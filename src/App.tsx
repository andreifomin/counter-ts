import {useEffect, useState} from "react";
import Counter from "./components/Counter";
import "./App.css";
import AddCounter from "./components/AddCounter";
import { v4 as uuidv4 } from "uuid";
import db from "./connectDB";
import { collection, getDocs } from "firebase/firestore";

function App() {

  const initialCounter = {
    id: uuidv4(),
    value: 0,
    buttons: [1, 2, 3],
  };

  const [counters, setCounters] = useState([initialCounter]);

  useEffect(() => {
    const getTasks = async () => {
      const countersCollection = collection(db, "counters");
      const countersSnapshot = await getDocs(countersCollection);
      const countersList = JSON.parse(JSON.stringify(countersSnapshot.docs.map(doc => doc.data())));
      setCounters(countersList);
    };
    getTasks();
  }, []);      // make firebase writable

  const changeCounterValue = (id: string, buttonValue: number) => {
    const newCounters = counters.map(counter =>
      counter.id === id
        ? { ...counter, value: counter.value + buttonValue }
        : counter
    );
    setCounters(newCounters);
  };

  const addCounter = () => {
    const newCounter = {
      ...initialCounter,
      id: uuidv4(),
    };
    setCounters([...counters, newCounter]);
  };

  const resetCounter = (id: string) => {
    const newCounters = [...counters].map(counter =>
      counter.id === id
        ? {...counter, value: initialCounter.value}
        : counter
    );
    setCounters(newCounters);
  };

  const deleteCounter = (id: string) => {
    const newCounters = [...counters].filter(counter => counter.id !== id);
    setCounters(newCounters);
  };


  return (
    <div className="App">
      <h2>Counter app</h2>
      <AddCounter
        addCounter={addCounter}
      />
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            changeCounterValue={changeCounterValue}
            resetCounter={resetCounter}
            deleteCounter={deleteCounter}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
