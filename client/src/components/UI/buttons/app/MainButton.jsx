export default function MainButton({ children, onClick }) {
  return (
    <>
      <button type="button" className="btn btn-primary " onClick={onClick}>
        {children}
      </button>
    </>
  );
}
