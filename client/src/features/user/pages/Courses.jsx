import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import HeroContainer from "../../../components/UI/container/HeroContainer";
import SquareContainer from "../../../components/UI/container/SquareContainer";

import AddCourseModal from "../../../components/UI/modal/AddCourseModal";
import CourseModal from "../../../components/UI/modal/CourseModal";

import { addCourseModalService } from "../../../services/dispatch/addCourseModalService";
import { viewCourseModalService } from "../../../services/dispatch/viewCourseModalService";

export default function Courses() {
  const data = useSelector((state) => state.tasks.data);

  const isAddCourseModalOpen = useSelector(
    (state) => state.addCourseModal.open
  );

  const isViewAddCourseModalOpen = useSelector(
    (state) => state.viewCourseModal.open
  );

  return (
    <>
      <HeroContainer>
        <header className="flex justify-between">
          <h1 className="outfit text-4xl bold text-shadow-2xs">Courses</h1>
          <button
            className="min-w-[150px] h-13 rounded-xl text-center p-2 bg-normalbtn-default hover:bg-normalbtn-hover text-white text-shadow-black text-shadow-4xs transition-all shadow-2xs shadow-black inline-flex justify-center items-center"
            onClick={() => {
              addCourseModalService.setOpen();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"
              />
            </svg>
            <span className="mr-2">Add Course</span>
          </button>
        </header>
        <section className="grid grid-cols-4 gap-8 p-4">
          {data ? (
            data.tasks.map((task) => (
              <>
                <div
                  className="coursesChildContainer grid grid-rows-[30px_35px_45px_40px] grid-1"
                  id={task._id}
                >
                  <h2>{task.title || "N/A"}</h2>
                  <p className="">
                    Attendence: <span>{task.attend || "N/A"}</span>
                  </p>
                  <p className=" text-secondry-text">{task.prof}</p>
                  <button
                    className="normalButton"
                    onClick={() => {
                      console.log(task._id);
                      viewCourseModalService.setOpen(task._id);
                    }}
                  >
                    View
                  </button>
                </div>
              </>
            ))
          ) : (
            <>
              <h1>No Tasks Yet</h1>
            </>
          )}
        </section>
      </HeroContainer>
      {isViewAddCourseModalOpen && <CourseModal />}
      {isAddCourseModalOpen && <AddCourseModal />}
    </>
  );
}
