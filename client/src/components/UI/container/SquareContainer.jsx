export default function SquareContainer({ children }) {
  return (
    <div
      className="bg-child-container w-full h-[180px] border-black shadow-md
    shadow-black/20 rounded-lg p-4"
    >
      {children}
    </div>
  );
}
