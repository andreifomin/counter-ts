interface IProps {
  id: string;
  deleteCounter: (id: string) => void;
}

function DeleteCounter(props: IProps) {
  return (
    <button onClick={() => props.deleteCounter(props.id)}>
      Delete
    </button>
  );
}

export default DeleteCounter;