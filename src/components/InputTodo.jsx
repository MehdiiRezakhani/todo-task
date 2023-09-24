import { useState } from "react";

function InputTodo({ theme ,addTask }) {
  const [text, setText] = useState('');
  const getTodo = (e) => {
    e.preventDefault();
    if (text !== "") {
      addTask(text);
      setText('');
      return;
    };
  }
  function handleChange(e) {
    setText(e.target.value,);
  }
  return (
    <>
      <form onSubmit={getTodo}>
        <input
          onChange={handleChange}
          className={`input-${theme}`}
          value={text}
          type="text"
          placeholder="Create a new Todo.."
        />
        <input type="submit" className={`submit-${theme}`}/>
      </form>
    </>
  );
}

export default InputTodo;
