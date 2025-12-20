import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ModalContainer from "../container/ModalContainer";
import HalfDivContainer from "../div/HalfDivContainer";
import NormalDivContainer from "../div/NormalDivContainer";

import ModalOverlay from "../overlay/ModalOverlay";
import ConfirmModal from "./ConfirmModal";

import { editCourseModalService } from "../../../services/dispatch/editCourseModalService";
import { viewCourseModalService } from "../../../services/dispatch/viewCourseModalService";
import { confirmModalService } from "../../../services/dispatch/confirmModalService";
import { taskDataService } from "../../../services/dispatch/taskDataService";

import { deleteTask } from "../../../services/Handler/Tasks";
import EditCourseModal from "./EditCourseModal";

export default function CourseModal() {
  const isConfirmModalOpen = useSelector((state) => state.confirmModal.open);
  const isEditCourseModalOpen = useSelector(
    (state) => state.editCourseModal.open
  );
  const id = useSelector((state) => state.viewCourseModal.id);
  const data = useSelector((state) => state.tasks.data);

  const [target, setTarget] = useState({});

  const array = data;
  useEffect(() => {
    let found = array.find((task) => task.id === id);
    setTarget(found);
  }, [id]);

  const handleConfirm = () => {
    confirmModalService.setClose();
    viewCourseModalService.setClose();

    console.log(target);
    deleteTask(target.id);
  };

  const handleCancel = () => {
    confirmModalService.setClose();
  };

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
            <h1>{target.course_name || "N/A"}</h1>
            <p className="outfit text-lg ">{target.professor_name || "N/A"}</p>
          </header>
          {/* <section className="mt-2 text-center">
            <h2>Classes</h2>
            <section className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>{0}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Attended</h3>
                <HalfDivContainer>{target.attend || 0}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Total</h3>
                <HalfDivContainer>{target.total || 0}</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Prof Abscent</h3>
                <HalfDivContainer>{target.profAbscent || 0}</HalfDivContainer>
              </div>
            </section> */}
          {/* <h2>Grade</h2>
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
              </div> */}
          {/* </section>
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
            </section> */}
          {/* <h2>Upcoming</h2>
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
          </section>*/}
          <footer className="mt-4 flex gap-2">
            <button
              className="normalButton"
              onClick={() => {
                editCourseModalService.setOpen();
              }}
            >
              Edit
            </button>
            <button
              className="dangerButton"
              onClick={() => {
                confirmModalService.setOpen();
              }}
            >
              Delete
            </button>
          </footer>
        </ModalContainer>
      </ModalOverlay>
      {isConfirmModalOpen && (
        <ConfirmModal confirm={handleConfirm} cancel={handleCancel} />
      )}
      {isEditCourseModalOpen && <EditCourseModal target={target} />}
    </>
  );
}
