// 1. Create a react pure functional component
// that will take 2 numbers and print
// addition, subtraction, multiplication and division

import { useState } from "react";
function TableDisp() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <br />
      {num1}
      <label>+</label>
      {num2}
      <label>=</label>
      {num1 + num2}
      <br />
      {num1}
      <label>-</label>
      {num2}
      <label>=</label>
      {num1 - num2}
      <br />
      {num1}
      <label>*</label>
      {num2}
      <label>=</label>
      {num1 * num2}
      <br />
      {num1}
      <label>/</label>
      {num2}
      <label>=</label>
      {num1 / num2}
    </div>
  );
}
export default TableDisp;
// 2. Create a react pure functional component
// that will take email address as an input and
// print whether it is a valid email address or not
// 3. Create a react pure functional component
// that will toggle the visibility of the text written by user
// take one text box and one button, button will toggle the visibility
// when text is visible button text should be " hide text"
// when text is hidden button text should be "show text"
// 4. Create a react pure functional component
// that will take text input and print total number of
// characters
