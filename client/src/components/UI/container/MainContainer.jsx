export default function MainContainer({ children }) {
  return (
    <>
      <div className="bg-hero-container md:w-[calc(100%-250px)] sm:min-w-[calc(80%-250px)] h-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-black shadow-2xl shadow-black/80 rounded-xl p-8">
        {children}
      </div>
    </>
  );
}
