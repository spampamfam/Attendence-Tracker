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
import NormalInputContainer from "../input/app/NormalInputContainer";
import MainButton from "../buttons/app/MainButton";

export default function EditCourseModal({ target }) {
  const [title, setTitle] = useState(target.course_name);
  const [name, setName] = useState(target.professor_name);
  const [courseCode, setCourseCode] = useState(target.course_code);

  const [startDate, setStartDate] = useState(
    new Date(target.course_sessions[0].start_datetime)
  );
  const [endDate, setEndDate] = useState(
    new Date(target.course_sessions[0].end_datetime)
  );

  const data = useSelector((state) => state.tasks.data);

  const handleSubmission = async (e) => {
    e.preventDefault();

    const id = target.id;
    const payload = {
      title,
      prof: name,
      start: startDate,
      end: endDate,
      id,
      course_code: courseCode,
    };

    editTask(payload, data);

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
          {console.log(target)}
          <header className="text-center">
            <h1 className="text-2xl font-semibold">Edit Course</h1>
          </header>
          <form>
            <h2 className="mt-1">Title</h2>
            <NormalInputContainer
              type={"text"}
              value={title}
              placeholder={"Enter the Course name"}
              onChange={(e) => setTitle(e.target.value)}
            />

            <h2 className="mt-1">Course Code</h2>
            <NormalInputContainer
              type={"text"}
              value={courseCode}
              placeholder={"Enter the Course's code"}
              onChange={(e) => setCourseCode(e.target.value)}
            />

            <h2 className="mt-1">Prof. Name</h2>
            <NormalInputContainer
              type={"text"}
              value={name}
              placeholder={"Enter the professor's name"}
              onChange={(e) => setName(e.target.value)}
            />

            <h2 className="mt-1">Start</h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp" //change this if you wanna change the format
              className="border rounded-md p-2 bg-input-container w-[280px] sm:w-[320px]"
            />

            <h2 className="mt-1">End</h2>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              dateFormat="Pp"
              className="border rounded-md p-2 bg-input-container w-[280px] sm:w-[320px]"
            />
          </form>

          <footer className="mt-8 flex justify-center">
            <MainButton
              className="normalButton"
              onClick={(e) => {
                handleSubmission(e);
              }}
            >
              Save
            </MainButton>
          </footer>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
}
