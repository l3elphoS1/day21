import React, { useState } from "react";
import { Heading } from "./components/Heading";
import "./App.css";
import Button from "./components/Button";
import Footer from "./components/footer";
import List from "./components/List";
import Dashboard  from "./pages/Dashboard";
import Login from "./pages/Login";
import BMI from "./pages/bmi";
// ชื่อ Component ต้องขึ้นต้นด้วยตัวใหญ่
// ชื่อไฟล์ Component ต้องขึ้นต้นด้วยตัวใหญ่
function App() {
  const [counter, setCounter] = useState<number>(0);

  const IncreaseCount = () => {
    console.log("abc");
    setCounter(counter + 1);
  };

  const DecreaseCount = () => {
    setCounter(counter - 1);
  };

  const isLogin: boolean = false; // This will control what is rendered

  return (
    <>
      {isLogin ? 
        <Dashboard />
       :  <BMI/>// Replace this with your login component if needed
      }
      {/* <Heading imgUrl="ABC" counter={counter}>
        Noew Counter = {counter}
      </Heading>
      <Button title="Increase" color="red" updateCount={IncreaseCount} />
      <Button title="Decrease2" color="blue" updateCount={DecreaseCount} />
      <h1>Hello world</h1>
      <Button title="Reset" color="green" updateCount={() => setCounter(0)} />
      <List items={[1, 2, 3]} render={(item) => <h2>{item}</h2>} />
      <List items={["a", "b", "c"]} render={(item) => <h1>{item}</h1>} />
      <Footer counter={counter}></Footer> */}
    </>
  );
}

export default App;
