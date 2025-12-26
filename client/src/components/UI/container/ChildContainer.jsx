export default function ChildContainer({ children, extraClass }) {
  return (
    <div
      className={`bg-child-container w-full h-[180px] border-black shadow-md
    shadow-black/20 rounded-lg p-4 text-black text-center
    grid grid-rows-[30px_35px_45px_40px] text-xs ${extraClass}`}
    >
      {children}
    </div>
  );
}

//idon'tknoww hat is thisused for but i'll use it in the courses tab
