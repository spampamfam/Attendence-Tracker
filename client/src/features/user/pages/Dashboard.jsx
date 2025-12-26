import { useSelector } from "react-redux";
import { useMemo } from "react";
import isoToReadableDate from "../../../services/data/isoToReadableDate";

import DashboardChartComponent from "../components/DashboardChartComponent";
import MainContainer from "../../../components/UI/container/MainContainer";
import ChildContainer from "../../../components/UI/container/ChildContainer";
import BiggerChildContainer from "../../../components/UI/container/BiggerChildContainer";
import LoadingScreen from "../../../components/UI/LoadingScreen";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const data = useSelector((state) => state.tasks.data);
  const stats = useSelector((state) => state.tasks.stats);
  const globalLoading = useSelector((state) => state.loading?.loading);

  const isLoading =
    globalLoading || data === null || stats === null || user === null;

  // Combine courses + stats for easier access
  const dashboardCourses = useMemo(() => {
    if (!data || !stats) return [];
    return data.map((course) => {
      const courseStat = stats.find((s) => s.course_id === course.id) || {};
      const attendancePercentage =
        courseStat.total_sessions > 0
          ? Math.round(
              (courseStat.attended_count / courseStat.total_sessions) * 100
            )
          : 0;
      return { ...course, ...courseStat, attendancePercentage };
    });
  }, [data, stats]);

  // Upcoming sessions (next 5)
  const upcomingSessions = useMemo(() => {
    const now = new Date();
    let sessions = [];
    dashboardCourses.forEach((course) => {
      if (!course.course_sessions) return;
      course.course_sessions.forEach((s) => {
        const start = new Date(s.start_datetime);
        if (start > now) {
          sessions.push({ ...s, courseName: course.course_name });
        }
      });
    });
    return sessions
      .sort((a, b) => new Date(a.start_datetime) - new Date(b.start_datetime))
      .slice(0, 5);
  }, [dashboardCourses]);

  const pieData = useMemo(() => {
    if (!data || !stats) {
      return [
        { name: "Attended", value: 0, fill: "#4CAF50" },
        { name: "Absent", value: 0, fill: "#F44336" },
        { name: "Excused", value: 0, fill: "#FF9800" },
        { name: "Prof Absent", value: 0, fill: "#2196F3" },
      ];
    }

    const dashboardCourses = data.map((course) => {
      const courseStat = stats.find((s) => s.course_id === course.id) || {};
      return { ...course, ...courseStat };
    });

    // Example: overall attendance for all courses combined
    let attended = 0,
      absent = 0,
      excused = 0,
      profAbsent = 0;

    dashboardCourses.forEach((c) => {
      attended += c.attended_count || 0;
      absent += c.absent_count || 0;
      excused += c.excused_count || 0;
      profAbsent += c.prof_absent_count || 0;
    });

    return [
      { name: "Attended", value: attended, fill: "#4CAF50" },
      { name: "Absent", value: absent, fill: "#F44336" },
      { name: "Excused", value: excused, fill: "#FF9800" },
      { name: "Prof Absent", value: profAbsent, fill: "#2196F3" },
    ];
  }, [data, stats]);

  return isLoading ? (
    <LoadingScreen fullscreen message={"Loading "} />
  ) : (
    <MainContainer>
      <h1 className="outfit text-2xl font-bold text-shadow-2xs">
        Welcome, {user?.name || "Student"}
      </h1>
      <section className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-[180px_180px] gap-4 pb-4">
          {/* USER INFO */}
          <ChildContainer>
            <h1 className="text-xl font-semibold">User Info</h1>
            <section className="text-left mt-2 flex flex-col gap-2">
              <h2>Name: {user?.name || "N/A"}</h2>
              <h2>College: {user?.college || "N/A"}</h2>
              <h2>Major: {user?.major || "N/A"}</h2>
            </section>
          </ChildContainer>

          {/* COURSES OVERVIEW */}
          {/* <div className="dashboardChildContainer">
            <h1>Courses Overview</h1>
            {dashboardCourses.map((course) => (
              <h2 key={course.id}>
                {course.course_name} &rarr; Attendance:{" "}
                {course.attendancePercentage}%
              </h2>
            ))}
          </div> */}
          {/* ATTENDANCE CHART */}
          <BiggerChildContainer>
            <DashboardChartComponent data={pieData} />
          </BiggerChildContainer>

          <ChildContainer extraClass={" row-start-2 sm:col-start-1"}>
            <h1 className="text-xl font-semibold">Overreview</h1>
            <section className="text-left mt-2 flex flex-col gap-2">
              <h2>Total Courses: {data?.length || 0}</h2>
              <h2>
                Average Attendance:{" "}
                {dashboardCourses.length > 0
                  ? Math.round(
                      dashboardCourses.reduce(
                        (sum, course) => sum + course.attendancePercentage,
                        0
                      ) / dashboardCourses.length
                    )
                  : 0}
                %
              </h2>

              <h2>
                Attended:{" "}
                {(stats || []).reduce(
                  (sum, s) => sum + (s.attended_count || 0),
                  0
                )}
              </h2>
            </section>
          </ChildContainer>
        </div>

        {/* UPCOMING SESSIONS */}
        <div className="dashboardChildContainer">
          <h1>Upcoming Schedule</h1>

          <h2>Next Sessions</h2>
          {upcomingSessions.length === 0 ? (
            <p>No upcoming sessions</p>
          ) : (
            <div className="flex flex-col gap-2 ">
              {upcomingSessions.map((s, idx) => (
                <div
                  key={idx}
                  className="dashboardMiniChildContainer text-sm sm:text-lg"
                >
                  <p>
                    <strong>{s.courseName}</strong> -{" "}
                    {isoToReadableDate(s.start_datetime)}
                  </p>
                  <p>Location: {s.location || "N/A"}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </MainContainer>
  );
}
