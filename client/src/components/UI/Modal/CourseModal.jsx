import Button from "../buttons/button";
import DangerButton from "../buttons/DangerButton";
import ModalContainer from "../container/ModalContainer";
import HalfInputContainer from "../input/HalfInputContainer";
import NormalInputContainer from "../input/NormalInputContainer";
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
                <HalfInputContainer>53%</HalfInputContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfInputContainer>53%</HalfInputContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfInputContainer>53%</HalfInputContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfInputContainer>53%</HalfInputContainer>
              </div>
            </section>
            <h2>Classes</h2>
            <section className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfInputContainer>53%</HalfInputContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfInputContainer>53%</HalfInputContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfInputContainer>53%</HalfInputContainer>
              </div>
              <div className="text-center">
                <h3>Attendence</h3>
                <HalfInputContainer>53%</HalfInputContainer>
              </div>
            </section>
            <h2>Schedule</h2>
            <section className="flex flex-col justify-between gap-2">
              <div className="flex gap-2 ">
                <h2 className="mt-1">Days:</h2>
                <NormalInputContainer>Sunday - Tuesday</NormalInputContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Time:</h2>
                <NormalInputContainer>10:00 AM : 11:30 AM</NormalInputContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Location:</h2>
                <NormalInputContainer>B305</NormalInputContainer>
              </div>
            </section>
            <h2>Upcoming</h2>
            <section className="flex flex-col justify-between gap-2">
              <div className="flex gap-2 ">
                <h2 className="mt-1">Midterm Exam:</h2>
                <HalfInputContainer>Nov 15</HalfInputContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Project Proposal:</h2>
                <HalfInputContainer>Dec 15</HalfInputContainer>
              </div>
              <div className="flex gap-2 ">
                <h2 className="mt-1">Final Project</h2>
                <HalfInputContainer>
                  <span className="text-danger-text bold">Nov,10</span>
                </HalfInputContainer>
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
