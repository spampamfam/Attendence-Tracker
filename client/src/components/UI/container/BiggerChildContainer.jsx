const BiggerChildContainer = ({ children }) => {
  return (
    <div
      className="bg-child-container w-full h-[375px] border-black shadow-md
    shadow-black/20 rounded-lg p-4 text-black text-center
    grid grid-rows-[30px_35px_45px_40px] text-xs
    "
    >
      {children}
    </div>
  );
};

export default BiggerChildContainer;
