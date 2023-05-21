import ButtonChangeValue from "./ButtonChangeValue";
import ButtonResetCounter from "./ButtonResetCounter";
import ButtonDeleteCounter from "./ButtonDeleteCounter";

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
  // console.log(props)
  return (
    <div style={{ marginTop: 10 }}>
      {[...props.counter.buttons].reverse().map((buttonValue, index) => (
        <ButtonChangeValue
          key={index}
          buttonValue={-buttonValue}
          id={props.counter.id}
          changeCounterValue={props.changeCounterValue}
        />
      ))}{" "}
      <b>{props.counter.value}</b>{" "}
      {props.counter.buttons.map((buttonValue, index) => (
        <ButtonChangeValue
          key={index}
          buttonValue={buttonValue}
          id={props.counter.id}
          changeCounterValue={props.changeCounterValue}
        />
      ))}{" "}
      <ButtonResetCounter
        id={props.counter.id}
        resetCounter={props.resetCounter}
      />{" "}
      <ButtonDeleteCounter
        id={props.counter.id}
        deleteCounter={props.deleteCounter}
      />
    </div>
  );
}

export default Counter;
