import React, { useState } from "react";
import "./Form.css";


function Form() {
  const [name, setName] = useState("");
  const [nameText, setNameText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameText(name);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:&nbsp; &nbsp; 
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <button type="submit">OK</button>
      </form>
      {nameText ? (<p data-testid="your-name">Hello, {nameText}</p>) : (<></>)}
    </div>
  );
}

export default Form;