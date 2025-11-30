import Button from "../buttons/button";
import DangerButton from "../buttons/DangerButton";
import ModalContainer from "../container/ModalContainer";
import HalfDivContainer from "../div/HalfDivContainer";
import NormalDivContainer from "../div/NormalDivContainer";
import ModalOverlay from "../overlay/ModalOverlay";

import { viewCourseModalService } from "../../../services/dispatch/viewCourseModalService";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CourseModal() {
  const [target, setTarget] = useState({});
  const id = useSelector((state) => state.viewCourseModal.id);
  const data = useSelector((state) => state.tasks.data);
  const array = data.tasks;

  useEffect(() => {
    let found = array.find((task) => task._id === id);
    setTarget(found);
    console.log(found);
  }, [id]);

  return (
    <>
      <ModalOverlay
        action={() => {
          viewCourseModalService.setClose();
          setTarget(null);
        }}
      >
        <ModalContainer>
          <header className="text-center">
            <h1>{target.title || "N/A"}</h1>
            <p className="outfit text-lg ">{target.prof || "N/A"}</p>
          </header>
          <section className="mt-2 text-center">
            <h2>Classes</h2>
            <section className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Attended</h3>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Total</h3>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Prof Abscent</h3>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
            </section>
            <h2>Grade</h2>
            <section className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <h3>Participation</h3>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Assigments</h3>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Bonus</h3>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Midterm</h3>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Total</h3>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
            </section>
            <h2>Schedule</h2>
            <section className="flex flex-col justify-between gap-2">
              <div className="flex gap-2 ">
                <h2 className="mt-1">Days:</h2>
                <NormalDivContainer>{"N/A"}</NormalDivContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Time:</h2>
                <NormalDivContainer>{"N/A"}</NormalDivContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Location:</h2>
                <NormalDivContainer>{"N/A"}</NormalDivContainer>
              </div>
            </section>
            <h2>Upcoming</h2>
            <section className="flex flex-col justify-between gap-2">
              <div className="flex gap-2 ">
                <h2 className="mt-1">Midterm Exam:</h2>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Project Proposal:</h2>
                <HalfDivContainer>{"N/A"}</HalfDivContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Final Project</h2>
                <HalfDivContainer>
                  <span className="text-danger-text bold">{"N/A"}</span>
                </HalfDivContainer>
              </div>
            </section>
          </section>
          <footer className="mt-4 flex gap-2">
            <Button>Edit</Button>
            <DangerButton>Delete</DangerButton>
          </footer>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
}
