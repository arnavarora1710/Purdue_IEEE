import React, { useState } from "react"

export default function Demo2() {
  /* IGNORE START */
  const [showBasic, setShowBasic] = useState()
  const [showNested, setShowNested] = useState()
  const [showMulti, setShowMulti] = useState()
  /* IGNORE END */

  // base jsx
  const basicJSX = <p>Basic JSX</p>;
  // jsx with nesting
  const nestedJSX = <div><h1>Nested</h1><p>JSX</p></div>;
  // multiline jsx
  const multiJSX = (
    <div>
      <h1>Nested MULTI</h1>
      <p>JSX</p>
    </div>
  );

  return (
    <>
      <div id="basic">
        <button onClick={() => { setShowBasic(!showBasic) }}>Show basic JSX</button>
        {showBasic ? basicJSX : null}
      </div>
      <div id="nested">
        <button onClick={() => { setShowNested(!showNested) }}>Show nested JSX</button>
        {showNested ? nestedJSX : null}
      </div>
      <div id="multi">
        <button onClick={() => { setShowMulti(!showMulti) }}>Show multi-line JSX</button>
        {showMulti ? multiJSX : null}
      </div>
    </>
  )
}