export default function RectangleContainer({ children }) {
  return (
    <div
      className="bg-child-container w-[calc(35%)] h-[150px] border-black shadow-md shadow-black/20 rounded-lg p-6"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
