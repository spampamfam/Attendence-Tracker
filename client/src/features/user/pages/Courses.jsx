import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MainContainer from "../../../components/UI/container/MainContainer";
import SquareContainer from "../../../components/UI/container/SquareContainer";
import ChildContainer from "../../../components/UI/container/ChildContainer";
import CourseSkeleton from "../../../components/UI/skeleton/CourseSkeleton";

import AddCourseModal from "../../../components/UI/Modal/AddCourseModal";
import CourseModal from "../../../components/UI/Modal/CourseModal";

import add from "/icons/add.svg";

import { addCourseModalService } from "../../../services/dispatch/addCourseModalService";
import { viewCourseModalService } from "../../../services/dispatch/viewCourseModalService";
import MainButton from "../../../components/UI/buttons/app/MainButton";

export default function Courses() {
  const data = useSelector((state) => state.tasks.data);
  const globalLoading = useSelector((state) => state.loading?.loading);

  const isAddCourseModalOpen = useSelector(
    (state) => state.addCourseModal.open
  );

  const isViewAddCourseModalOpen = useSelector(
    (state) => state.viewCourseModal.open
  );

  return (
    <>
      <MainContainer>
        <header className="flex justify-between w-full">
          <h1 className="outfit text-3xl sm:text-4xl text-shadow-2xs text-black">
            Courses
          </h1>
          <MainButton
            className="min-w-[150px] h-13 rounded-xl text-center p-2 bg-normalbtn-default hover:bg-normalbtn-hover text-white text-shadow-black text-shadow-4xs transition-all shadow-2xs shadow-black inline-flex justify-center items-center"
            onClick={() => {
              addCourseModalService.setOpen();
            }}
          >
            <img src={add} />
            <span className="mr-2">Add Course</span>
          </MainButton>
        </header>
        <section className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:gap-8 pt-8">
          {data === null || globalLoading ? (
            // initial load: show skeletons
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <CourseSkeleton />
              </div>
            ))
          ) : data && data.length > 0 ? (
            data.map((task) => (
              <ChildContainer
                // className="coursesChildContainer grid grid-rows-[30px_35px_45px_40px] grid-1"
                id={task.id}
                key={task.id}
              >
                <h2 className="">{task.course_name || "N/A"}</h2>
                <p>
                  Attendance: <span>{task.attend || "N/A"}</span>
                </p>
                <p className="text-secondry-text">{task.professor_name}</p>
                <MainButton
                  className="normalButton"
                  onClick={() => {
                    viewCourseModalService.setOpen(task.id);
                  }}
                >
                  View
                </MainButton>
              </ChildContainer>
            ))
          ) : (
            <h1>Add new Tasks</h1>
          )}
        </section>
      </MainContainer>
      {isViewAddCourseModalOpen && <CourseModal />}
      {isAddCourseModalOpen && <AddCourseModal />}
    </>
  );
}
