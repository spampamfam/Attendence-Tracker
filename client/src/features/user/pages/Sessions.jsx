import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HeroContainer from "../../../components/UI/container/HeroContainer";
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
      <div className="heroContainer no-scrollbar overflow-y-auto text-black">
        <header className="sticky top-2 pb-10 ">
          <form
            className="filter"
            onChange={(e) => {
              setTargetId(e.target.value);
            }}
          >
            {data.map((task) => (
              <input
                className="btn"
                type="radio"
                name="target"
                aria-label={task.course_name}
                value={task.id}
                key={task.id}
              />
            ))}
            <input
              className="btn btn-square"
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
      </div>
    </>
  );
};

export default Sessions;
