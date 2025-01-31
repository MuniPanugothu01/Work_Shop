import React, { useState } from "react";

const TodoEdit = () => {
  const [input, setinput] = useState("");
  const [display, setDisplay] = useState([]);

  //   edit the function useState()
  const [isEdit, setIsEdit] = useState(false);

  const handleIn = (event) => {
    setinput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (input == "") {
      alert("spaces are not allowed");
      setinput("");
    } else if (display.includes(input)) {
      alert("data already exists!");
      setinput("");
    } else {
      setDisplay([...display, input]);
    }

    if (isEdit !== null) {
      let update = [...display];
      update[isEdit] = input;
      setDisplay(update);
      setIsEdit(null);
    } else {
      [...display, input];
    }
  };

  // handleDelte
  const handleDelete = (value, index) => {
    var data = display.filter((item, index) => {
      return value !== item;
    });
    setDisplay(data);
  };

  //handleEdit
  const handleEdit = (value, index) => {
    setinput(display[index]);
    setIsEdit(index);
  };

  var data = display.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value}</td>
        <td>
          <button
            onClick={() => {
              handleDelete(value, index);
            }}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              handleEdit(value, index);
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>TodoList</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter the Text:</label>
        <input type="text" name="name" value={input} onChange={handleIn} />
        <input type="submit" value="Add" />
      </form>

      <table>
        <thead>
          <tr>
            <th>Text</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </>
  );
};

export default TodoEdit;
