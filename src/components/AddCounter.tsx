interface IProps {
  addCounter: () => void;
}

function AddCounter(props: IProps) {
  return (
    <div>
      <button onClick={props.addCounter}>Add counter</button>
    </div>
  );
}

export default AddCounter;