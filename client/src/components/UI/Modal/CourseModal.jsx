import Button from "../buttons/button";
import DangerButton from "../buttons/DangerButton";
import ModalContainer from "../container/ModalContainer";
import HalfDivContainer from "../div/HalfDivContainer";
import NormalDivContainer from "../div/NormalDivContainer";
import ModalOverlay from "../overlay/ModalOverlay";

export default function CourseModal() {
  return (
    <>
      <ModalOverlay>
        <ModalContainer>
          <header className="text-center">
            <h1>Managment 101</h1>
            <p className="outfit text-lg ">Batman el almany</p>
          </header>
          <section className="mt-2 text-center">
            <h2>Classes</h2>
            <section className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>53%</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>53%</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>53%</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>53%</HalfDivContainer>
              </div>
            </section>
            <h2>Classes</h2>
            <section className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>53%</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>53%</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>53%</HalfDivContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfDivContainer>53%</HalfDivContainer>
              </div>
            </section>
            <h2>Schedule</h2>
            <section className="flex flex-col justify-between gap-2">
              <div className="flex gap-2 ">
                <h2 className="mt-1">Days:</h2>
                <NormalDivContainer>Sunday - Tuesday</NormalDivContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Time:</h2>
                <NormalDivContainer>10:00 AM : 11:30 AM</NormalDivContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Location:</h2>
                <NormalDivContainer>B305</NormalDivContainer>
              </div>
            </section>
            <h2>Upcoming</h2>
            <section className="flex flex-col justify-between gap-2">
              <div className="flex gap-2 ">
                <h2 className="mt-1">Midterm Exam:</h2>
                <HalfDivContainer>Nov 15</HalfDivContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Project Proposal:</h2>
                <HalfDivContainer>Dec 15</HalfDivContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Final Project</h2>
                <HalfDivContainer>
                  <span className="text-danger-text bold">Nov,10</span>
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
