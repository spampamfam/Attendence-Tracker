import HeroContainer from "../../../components/UI/container/HeroContainer";
import SquareContainer from "../../../components/UI/container/SquareContainer";

export default function Courses() {
  return (
    <HeroContainer>
      <header className="flex justify-between">
        <h1 className="outfit text-4xl bold text-shadow-2xs">Courses</h1>
        <p>Search bar</p> {/*underDev */}
      </header>
      <section className="grid grid-cols-4 gap-8 p-4">
        <SquareContainer>hey</SquareContainer>
      </section>
    </HeroContainer>
  );
}
