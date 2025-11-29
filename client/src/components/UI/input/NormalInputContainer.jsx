export default function NormalInputContainer({
  children,
  type,
  placeholder,
  action,
  value,
}) {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={action}
      className="bg-input-container w-full rounded-xl border-black border-1 p-2"
    >
      {children}
    </input>
  );
}
