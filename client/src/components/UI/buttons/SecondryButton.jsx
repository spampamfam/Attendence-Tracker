const SecondryButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn w-full btn-outline btn-primary btn-ghost "
    >
      {children}
    </button>
  );
};

export default SecondryButton;
