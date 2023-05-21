import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import "./App.css";
import AddCounter from "./components/AddCounter";
import db from "./connectDB";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const initialCounter = {
    id: "",
    value: 0,
    buttons: [1, 2, 3],
  };

  const [counters, setCounters] = useState([initialCounter]);

  const getCounters = () => {
    (async () => {
      const snapshot = await getDocs(collection(db, "counters"));
      const docList = JSON.parse(
        JSON.stringify(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      );
      setCounters(docList);
    })();
  };

  useEffect(() => {
    getCounters();
  }, []);

  const changeCounterValue = (id: string, buttonValue: number) => {
    const counterToChange = counters.filter((counter) => counter.id === id)[0];
    const newCounter = {
      value: counterToChange.value + buttonValue,
      buttons: counterToChange.buttons,
    };
    (async () => await setDoc(doc(db, "counters", id), newCounter))();
    getCounters();
  };

  const addCounter = () => {
    const newCounter = {
      value: initialCounter.value,
      buttons: initialCounter.buttons,
    };
    (async () => await addDoc(collection(db, "counters"), newCounter))();
    getCounters();
  };

  const resetCounter = (id: string) => {
    const newCounter = {
      value: initialCounter.value,
      buttons: initialCounter.buttons,
    };
    (async () => await setDoc(doc(db, "counters", id), newCounter))();
    getCounters();
  };

  const deleteCounter = (id: string) => {
    (async () => await deleteDoc(doc(db, "counters", id)))();
    getCounters();
  };

  return (
    <div className="App">
      <h2>Counter app</h2>
      <AddCounter addCounter={addCounter} />
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
