import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ModalContainer from "../container/ModalContainer";
import ModalOverlay from "../overlay/ModalOverlay";

import { editCourseModalService } from "../../../services/dispatch/editCourseModalService";
import { taskDataService } from "../../../services/dispatch/taskDataService";
import { editTask } from "../../../services/Handler/Tasks";
import dateHandler from "../../../services/data/dateHandler";

export default function EditCourseModal({ target }) {
  const [title, setTitle] = useState(target.title);
  const [name, setName] = useState(target.prof);
  const [startDate, setStartDate] = useState(
    target?.start ? new Date(target.start) : null
  );
  const [endDate, setEndDate] = useState(
    target?.end ? new Date(target.end) : null
  );

  const data = useSelector((state) => state.tasks.data);

  const handleSubmission = async (e) => {
    e.preventDefault();
    const id = target._id;
    const payload = { title, prof: name, start: startDate, end: endDate, id };
    await editTask(payload, data);

    editCourseModalService.setClose();
  };

  return (
    <>
      <ModalOverlay
        action={() => {
          editCourseModalService.setClose();
        }}
      >
        <ModalContainer>
          <header className="text-center">
            <h1>Add New Course</h1>
          </header>
          <form>
            <h2 className="mt-1">Title</h2>
            <input
              type="text"
              value={title}
              placeholder="Enter the Course name"
              onChange={(e) => setTitle(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Prof. Name</h2>
            <input
              type="text"
              value={name}
              placeholder="Enter the professor's name"
              onChange={(e) => setName(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Start</h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp" //change this if you wanna change the format
              className="border rounded-md p-2 bg-input-container w-[320px]"
            />

            <h2 className="mt-1">End</h2>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="border rounded-md p-2 bg-input-container w-[320px]"
            />
          </form>

          <footer className="mt-8 flex justify-center">
            <button
              className="normalButton"
              onClick={(e) => {
                handleSubmission(e);
              }}
            >
              Save
            </button>
          </footer>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
}
