export default function MainBUtton({ children, onClick }) {
  return (
    <>
      <button
        type="button"
        className="btn w-full btn-primary "
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
