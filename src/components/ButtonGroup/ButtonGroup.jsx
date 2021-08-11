const ButtonGroup = (props) => {
  const { BtnComponent} = props;
  return (
    <div>
      {BtnComponent.map((Button) => (
        <div>
          <Button />
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
