const NormalInputContainer = ({ onChange, value, type, placeholder }) => {
  return (
    <input
      className="bg-input-container w-full border-black
      p-2 rounded-md border
      "
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default NormalInputContainer;
