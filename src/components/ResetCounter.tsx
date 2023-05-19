interface IProps {
  id: string;
  resetCounter: (id: string) => void;
}

function ResetCounter(props: IProps) {
  return (
    <button onClick={() => props.resetCounter(props.id)}>
      Reset
    </button>
  );
}

export default ResetCounter;