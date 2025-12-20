export default function HalfChildContainer({ children }) {
  return (
    <div
      className="bg-child-container w-[50%] h-[200px] border-black shadow-md
    shadow-black/20 rounded-lg p-10"
    >
      {children}
    </div>
  );
}
