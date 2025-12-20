import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ModalContainer from "../container/ModalContainer";
import ModalOverlay from "../overlay/ModalOverlay";

import { addCourseModalService } from "../../../services/dispatch/addCourseModalService";
import { taskDataService } from "../../../services/dispatch/taskDataService";
import { newTask } from "../../../services/Handler/Tasks";
import dateHandler from "../../../services/data/dateHandler";

export default function AddCourseModal() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [repeatWeeks, setRepeatWeeks] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmission = (e) => {
    e.preventDefault();
    const payload = {
      title,
      name,
      startDate,
      endDate,
      repeatWeeks,
      location,
      courseCode,
    };
    console.log(location);
    addCourseModalService.setClose();
    newTask(payload);
  };

  return (
    <>
      <ModalOverlay
        action={() => {
          addCourseModalService.setClose();
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
              placeholder="Enter the Course name"
              onChange={(e) => setTitle(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Prof. Name</h2>
            <input
              type="text"
              placeholder="Enter the professor's name"
              onChange={(e) => setName(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Course Code</h2>
            <input
              type="text"
              placeholder="Enter the Course's code"
              onChange={(e) => setCourseCode(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Location</h2>
            <input
              type="text"
              placeholder="Enter the Course's Location"
              onChange={(e) => setLocation(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Repeat Weeks</h2>
            <input
              type="number"
              // placeholder="Enter the Course's code"
              onChange={(e) => setRepeatWeeks(e.target.value)}
              className="normalInput"
            />

            <h2 className="mt-1">Start</h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp" //change this if you wanna change the format
              endDate={endDate}
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
