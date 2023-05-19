interface IProps {
  button: number;
  id: string;
  changeCounterValue: (id: string, buttonValue: number) => void;
}

function Button(props: IProps) {
  return (
    <button onClick={() => props.changeCounterValue(props.id, props.button)}>
      {props.button > 0 ? "+" + props.button : props.button}
    </button>
  );
}

export default Button;