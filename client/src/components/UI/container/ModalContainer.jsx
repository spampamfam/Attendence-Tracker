export default function ModalContainer({ children }) {
  return (
    <>
      <div
        className="bg-hero-container w-[calc(65%-300px)] min-h-[600px] max-h-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-black shadow-2xl shadow-black/80 rounded-xl p-8 overflow-y-auto no-scrollbar pb-8"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
}
