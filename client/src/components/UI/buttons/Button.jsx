export default function Button({ children }) {
  return (
    <>
      <button
        className="min-w-[150px] rounded-xl text-center p-2 bg-normalbtn-default hover:bg-normalbtn-hover text-white text-shadow-black text-shadow-4xs transition-all shadow-2xs shadow-black"
        // onClick={() => action}
      >
        {children}
      </button>
    </>
  );
}
