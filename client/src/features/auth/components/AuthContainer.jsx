export default function AuthContainer({ children }) {
  return (
    <>
      <div className="bg-hero-container w-[calc(50%-300px)] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-black shadow-2xl shadow-black/80 rounded-xl p-8">
        {children}
      </div>
    </>
  );
}
