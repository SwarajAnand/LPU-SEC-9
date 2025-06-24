import { useState } from "react";
import Test from "./Test";

function Demo() {
  const name = "TEST NAME";
  var ans = 0;

  const [sum, setSum] = useState(0);

  console.log(sum);

  const addVal = () => {
    ans = ans + 10;
    // console.log(ans);
    setSum(sum + 1);
  }

  console.log("Demo is rendered");
  return (
    <>
      <h1>Hello {name}</h1>
      <div>{sum}</div>
      <Test />
      <button onClick={addVal}>Click Me</button>
    </>
  )
}

export default Demo
