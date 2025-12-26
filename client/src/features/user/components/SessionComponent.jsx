import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import isoToReadableDate from "../../../services/data/isoToReadableDate";
import { editSession } from "../../../services/Handler/Tasks";
import { useSelector } from "react-redux";
import Sessions from "../pages/Sessions";

const SessionComponent = ({ session }) => {
  const data = useSelector((state) => state.tasks.data);
  const [sessionStatus, setSessionStatus] = useState(session.status);
  const [newSession, setNewSession] = useState({ ...session });
  const [targetCourse, setTargetCourse] = useState(
    data.find((course) => course.id === session.course_id)
  );
  const [isLoading, setIsLoading] = useState(false);
  //pre POST request

  useEffect(() => {}, [isLoading]);

  useEffect(() => {
    setNewSession((prev) => ({ ...prev, status: sessionStatus }));
  }, [sessionStatus]);

  const handleSubmission = () => {
    editSession(newSession);
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        toast.success("Session Status was saved Succesfully");
      }, 150);
    }, 700);
  };

  return (
    <div>
      <div className="sessionContainer " key={session.id}>
        <h2>{targetCourse.course_name}</h2>
        <h3>Starts: {isoToReadableDate(session.start_datetime)}</h3>
        {/* <h3>ends: {isoToReadableDate(session.end_datetime)}</h3> */}
        <div className="dropdown  text-white">
          <div tabIndex={0} role="button" className="btn btn-primary m-1">
            {sessionStatus}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-primary-color rounded-box z-1 w-52 p-2 shadow-sm"
            onChange={(e) => {
              setSessionStatus(e.target.value);
            }}
          >
            <li>
              <a
                className="border-b border-black/20"
                onClick={() => {
                  setSessionStatus("scheduled");
                  document.activeElement.blur();
                }}
              >
                scheduled
              </a>
            </li>
            <li>
              <a
                className="border-b border-black/20"
                onClick={() => {
                  setSessionStatus("attended");
                  document.activeElement.blur();
                }}
              >
                attended
              </a>
            </li>
            <li>
              <a
                className="border-b border-black/20"
                onClick={() => {
                  setSessionStatus("absent");
                  document.activeElement.blur();
                }}
              >
                absent
              </a>
            </li>
            <li>
              <a
                className="border-b border-black/20"
                onClick={() => {
                  setSessionStatus("Prof absent");
                  document.activeElement.blur();
                }}
              >
                Prof absent
              </a>
            </li>
            <li>
              <a
                className="border-b border-black/20"
                onClick={() => {
                  setSessionStatus("excused");
                  document.activeElement.blur();
                }}
              >
                excused
              </a>
            </li>
          </ul>
        </div>

        {sessionStatus != session.status ? (
          <button
            type="submit"
            className="btn btn-accent btn-soft"
            onClick={() => {
              handleSubmission();
              setIsLoading(true);
            }}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner"></span>
                <span>saving</span>
              </>
            ) : (
              "save"
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SessionComponent;
