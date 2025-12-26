export default function MainContainer({ children }) {
  return (
    <>
      <div
        className="bg-hero-container text-black
      sm:w-[85%] w-[90%] 
      h-[80%] sm:h-[530px] 
      sm:mt-10 mt-6
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      border-black shadow-2xl shadow-black/80 rounded-xl p-8
     overflow-y-auto no-scrollbar"
      >
        {children}
      </div>
    </>
  );
}
