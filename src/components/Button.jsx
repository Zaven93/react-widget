const Button = ({ onClick, disabled, className, title }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
