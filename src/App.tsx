import React, { useState } from "react";
import "./App.css";
import {Routes, Route} from "react-router"
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Course from "./pages/Course";
function App() {
  const [counter, setCounter] = useState<number>(0);
  const isLogin: boolean = true;
  const increaseCount = () => {
    setCounter(counter + 1);
  };
  const decreaseCount = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course/:id/:slug" element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
// slug คือ 
export default App;
