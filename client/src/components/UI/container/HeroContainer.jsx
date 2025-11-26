export default function HeroContainer({ children }) {
  return (
    <>
      <div className="bg-hero-container w-[calc(100%-300px)] h-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-black shadow-2xl shadow-black/80 rounded-xl p-8">
        {children}
      </div>
    </>
  );
}
