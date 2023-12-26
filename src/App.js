import { useState } from "react";
import Input1 from "./inputs/Input1";
import Input2 from "./inputs/Input2";
import Plus from "./buttons/Plus";
import Minus from "./buttons/Minus";
import Umnojenie from "./buttons/Umnojenie";
import Delenie from "./buttons/Delenie";


function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [resoult, setResoult] = useState('')
  return (
    <div className="App">
      <Input1 setInput1={setInput1} />
      <Input2 setInput2={setInput2}/>

      <Plus input1={input1} input2={input2} setResoult={setResoult}/>
      <Minus input1={input1} input2={input2} setResoult={setResoult}/>
      <Umnojenie input1={input1} input2={input2} setResoult={setResoult}/>
      <Delenie input1={input1} input2={input2} setResoult={setResoult}/>
      <input value={resoult} ></input>
    </div>
  );
}

export default App;
