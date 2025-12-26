export default function DangerButton({ children, onClick }) {
  return (
    <>
      <button className="btn btn-error text-slate-200" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
