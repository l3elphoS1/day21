// rfce for React functional component with export
import React, { ReactNode, useState } from "react";
import Button from "./Button";

interface HeadingProps {
  title: string;
  color: string;
  imgUrl: string;
  counter: number;
  children: ReactNode;
}
//  react hook
function Heading({ imgUrl, counter, children }: HeadingProps) {
  // const [counter, setCounter] = useState<number>(0);

  // const [username, setUsername] = useState<string>{"abc"};

  // const IncreaseCount = () => {
  //   console.log("abc");
  //   setCounter(counter + 1);
  // };

  // const DecreaseCount = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <div>
      {children}
      {/*  props ถูกส่งมาเป็น object จึงใช้ {} เพื่อ destructure */}
      {/* <h1>{counter}</h1>
      <img src={imgUrl} alt="" />
      <button onClick={IncreaseCount}>increase</button>
      <button onClick={DecreaseCount}>Decrease</button> */}
      {/* <ExternalButton title="Register" color="grey" />*/}
    </div>
  );
}


export {Heading,Button}