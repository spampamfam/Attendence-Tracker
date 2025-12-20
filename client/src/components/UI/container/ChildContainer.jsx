export default function ChildContainer({ children }) {
  return (
    <div
      className="bg-child-container w-full h-[400px] border-black shadow-md
    shadow-black/20 rounded-lg p-4"
    >
      {children}
    </div>
  );
}
