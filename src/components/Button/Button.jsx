import "./Button.css";
const Button = (props) => {
  const {
    variant = "primary",
    backgroundColor = "",
    children,
    ...rest
  } = props;
  const onClick = () => {
    console.log("clickedd");
  }
  return (
    <button
      style={{ backgroundColor: backgroundColor }}
      label="label"
      className={`button ${variant}`}
      {...rest}
      onClick = {onClick}
    >
      {children}
    </button>
  );
};

export default Button;
