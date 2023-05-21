interface IProps {
  id: string;
  resetCounter: (id: string) => void;
}

function ButtonResetCounter(props: IProps) {
  return (
    <button onClick={() => props.resetCounter(props.id)}>
      Reset
    </button>
  );
}

export default ButtonResetCounter;