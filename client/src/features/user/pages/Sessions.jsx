import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MainContainer from "../../../components/UI/container/MainContainer";
import HalfChildContainer from "../../../components/UI/container/HalfChildContainer";
import isoToReadableDate from "../../../services/data/isoToReadableDate";
import SessionComponent from "../components/SessionComponent";

const Sessions = () => {
  //getting the data ready from the redux state
  const data = useSelector((state) => state.tasks.data);

  //setting up the filtering states
  const [targetId, setTargetId] = useState("");
  const [targetCourse, setTargetCourse] = useState("");

  //gathering all sessions in one thingy
  let allSessionsArr = data.flatMap((course) => course.course_sessions ?? []);

  //actual filtering
  useEffect(() => {
    if (targetId == "x") setTargetCourse(allSessionsArr);
    setTargetCourse(data.find((task) => task.id === targetId || null));
  }, [targetId]);

  return (
    <>
      <MainContainer>
        <header className="sticky top-0 bg-white p-5 border-black/10 shadow-2xl border-2 h-20 z-5 mb-5 overflow-x-auto no-scrollbar">
          <form
            className="filter"
            onChange={(e) => {
              setTargetId(e.target.value);
            }}
          >
            {data.map((task) => (
              <input
                className="btn btn-primary"
                type="radio"
                name="target"
                aria-label={task.course_name}
                value={task.id}
                key={task.id}
              />
            ))}
            <input
              className="btn btn-square btn-error"
              type="reset"
              value="x"
              onClick={() => setTargetId("x")}
            />
          </form>
        </header>
        <section className="grid grid-cols-1 gap-2 ">
          {targetCourse
            ? targetCourse.course_sessions.map((session) => {
                return (
                  <SessionComponent
                    session={session}
                    key={session.id}
                    data={data}
                  ></SessionComponent>
                );
              })
            : allSessionsArr.map((session) => {
                return (
                  <SessionComponent
                    session={session}
                    key={session.id}
                  ></SessionComponent>
                );
              })}
        </section>
      </MainContainer>
    </>
  );
};

export default Sessions;
