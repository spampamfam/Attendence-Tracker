import HalfChildContainer from "../../../components/UI/container/HalfChildContainer";
import HeroContainer from "../../../components/UI/container/HeroContainer";
import ChildContainer from "../../../components/UI/container/ChildContainer";

export default function Dashboard() {
  return (
    <>
      <HeroContainer>
        <h1 className="outfit text-2xl bold text-shadow-2xs">Hello {"user"}</h1>
        <section className="p-4 ">
          <h1 className="mb-2">Dashboard</h1>
          <section className="flex gap-4 justify-between mb-3">
            <HalfChildContainer>Heys</HalfChildContainer>
            <HalfChildContainer>Heys</HalfChildContainer>
          </section>
          <ChildContainer>Heys</ChildContainer>
        </section>
      </HeroContainer>
    </>
  );
}
