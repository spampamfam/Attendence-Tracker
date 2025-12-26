const SmallButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn w-10 p-2 btn-primary "
    >
      {children}
    </button>
  );
};

export default SmallButton;
