export default function Button({ children, onClick }) {
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
