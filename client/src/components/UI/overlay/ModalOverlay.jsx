export default function ModalOverlay({ children }) {
  return (
    <div className="w-full h-full bg-black/40 fixed top-0 left-0 z-50 backdrop-blur flex justify-center items-center">
      {children}
    </div>
  );
}
