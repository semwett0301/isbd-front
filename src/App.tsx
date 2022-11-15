import React, {useState} from 'react';
// @ts-ignore
import classes from './App.module.css';
import CustomHeader from "./components/CustomHeader/CustomHeader";

function App() {
  const [positive, setPositive] = useState(0)
  const [negative, setNegative] = useState(0)

  return (
    <div className={classes.App}>
      <CustomHeader positive={positive} negative={negative}/>
    </div>
  );
}

export default App;
