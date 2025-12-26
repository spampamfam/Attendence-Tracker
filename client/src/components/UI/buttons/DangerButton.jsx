export default function DangerButton({ children, action }) {
  return (
    <>
      <button className="btn btn-error w-full text-slate-200" onClick={action}>
        {children}
      </button>
    </>
  );
}
