import Button from "./Button";
import ResetCounter from "./ResetCounter";
import DeleteCounter from "./DeleteCounter";

interface ICounter {
  id: string;
  value: number;
  buttons: number[];
}

interface IProps {
  counter: ICounter;
  changeCounterValue: (id: string, buttonValue: number) => void;
  resetCounter: (id: string) => void;
  deleteCounter: (id: string) => void;
}

function Counter(props: IProps) {
  return (
    <div style={{ marginTop: 10 }}>
      {[...props.counter.buttons].reverse().map((button, index) => (
        <Button
          key={index}
          button={-button}
          id={props.counter.id}
          changeCounterValue={props.changeCounterValue}
        />
      ))}{" "}
      <b>{props.counter.value}</b>{" "}
      {props.counter.buttons.map((button, index) => (
        <Button
          key={index}
          button={button}
          id={props.counter.id}
          changeCounterValue={props.changeCounterValue}
        />
      ))}{" "}
      <ResetCounter
        id={props.counter.id}
        resetCounter={props.resetCounter}
      />{" "}
      <DeleteCounter
        id={props.counter.id}
        deleteCounter={props.deleteCounter}
      />
    </div>
  );
}

export default Counter;
