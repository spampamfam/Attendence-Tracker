import { useSelector } from "react-redux";
import { useMemo } from "react";
import isoToReadableDate from "../../../services/data/isoToReadableDate";

import DashboardChartComponent from "../components/DashboardChartComponent";
export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const data = useSelector((state) => state.tasks.data);
  const stats = useSelector((state) => state.tasks.stats);

  // Combine courses + stats for easier access
  const dashboardCourses = useMemo(() => {
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

  return (
    <div className="heroContainer overflow-y-auto">
      <h1 className="outfit text-2xl font-bold text-shadow-2xs">
        Welcome, {user?.name || "Student"}
      </h1>
      <section className="p-4">
        <div className="grid grid-cols-2 gap-4 pb-4">
          {/* USER INFO */}
          <div className="dashboardChildContainer">
            <h1>User Info</h1>
            <h2>Name: {user?.name || "N/A"}</h2>
            <h2>College: {user?.college || "N/A"}</h2>
            <h2>Major: {user?.major || "N/A"}</h2>
          </div>

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
          <div className="dashboardChildContainer">
            <DashboardChartComponent data={pieData} />
          </div>
        </div>

        {/* UPCOMING SESSIONS */}
        <div className="dashboardChildContainer">
          <h1>Upcoming Schedule</h1>

          <h2>Next Sessions</h2>
          {upcomingSessions.length === 0 ? (
            <p>No upcoming sessions</p>
          ) : (
            <div className="">
              {upcomingSessions.map((s, idx) => (
                <div key={idx} className="dashboardMiniChildContainer">
                  <p>
                    <strong>{s.courseName}</strong> -{" "}
                    {isoToReadableDate(s.start_datetime)}
                  </p>
                  <p>Location: {s.location || "N/A"}</p>
                  <p>Status: {s.status}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
