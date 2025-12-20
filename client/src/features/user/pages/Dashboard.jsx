import { useSelector } from "react-redux";

import HalfChildContainer from "../../../components/UI/container/HalfChildContainer";
import HeroContainer from "../../../components/UI/container/HeroContainer";
import ChildContainer from "../../../components/UI/container/ChildContainer";
import RectangleContainer from "../../../components/UI/container/RectangleContainer";
export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <HeroContainer>
        <h1 className="outfit text-2xl bold text-shadow-2xs">
          Hello {user.name || null}
        </h1>
        <section className="p-4 ">
          <h1 className="mb-2">What do you have today</h1>
          <div className="flex gap-4">
            <HalfChildContainer>
              <h2>{"Man101"}</h2>
            </HalfChildContainer>
            <HalfChildContainer>
              <h2>{"Man101"}</h2>
            </HalfChildContainer>
            <HalfChildContainer>
              <h2>{"Man101"}</h2>
            </HalfChildContainer>
          </div>
        </section>
      </HeroContainer>
    </>
  );
}
