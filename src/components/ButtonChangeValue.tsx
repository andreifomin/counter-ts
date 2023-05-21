interface IProps {
  buttonValue: number;
  id: string;
  changeCounterValue: (id: string, buttonValue: number) => void;
}

function ButtonChangeValue(props: IProps) {
  return (
    <button onClick={() => props.changeCounterValue(props.id, props.buttonValue)}>
      {props.buttonValue > 0 ? "+" + props.buttonValue : props.buttonValue}
    </button>
  );
}

export default ButtonChangeValue;