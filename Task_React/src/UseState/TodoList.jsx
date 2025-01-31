import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  // using to store the value in browser it mean to display in browser
  const [store, setStore] = useState([]);
  const [eidt, setEdit] = useState(false);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const SubmitIt = (event) => {
    event.preventDefault();
    setStore([...store, input]); // it store the values
  };

  // edit handle function

  const handleEdit = (event) => {
    setEdit(true);
    prompt("enter the name!");
  };

  return (
    <>
      <form action="" onSubmit={SubmitIt}>
        Enter the text:{" "}
        <input
          type="text"
          onChange={handleInput}
          name={input}
          placeholder="Todo List"
        />
        <button type="submit">Submit!</button>
      </form>

      <ul>
        {store.map((item) => (
          <li key={item.toString()}>
            {item} <button onClick={handleEdit}>Edit</button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
