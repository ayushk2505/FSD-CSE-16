import React, { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const addHandler = () => {
    if (todo === "") { alert("Please add something") }
    else {
      if (editIndex !== null) {
        const updatedList = [...todoList];
        updatedList[editIndex] = todo;
        setTodoList([...updatedList]);
        setEditIndex(null)
      } else {
        setTodoList([...todoList, todo]);
      }
      setTodo("");
    }
  }
  const deleteHandler = (index) => {
    const updatedList = todoList.filter((t, i) => i !== index);
    setTodoList([...updatedList]);
  }
  const editHandler = (index) => {
    setTodo(todoList[index]);
    setEditIndex(index);
  }
  return (
    <div>
      <h1>ToDo List</h1>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}>
      </input>
      <button onClick={addHandler}>{editIndex!==null?"UPDATE":"ADD"}</button>
      <ul>
        {todoList.map((t, index) =>
          <li>
            <span>{t}</span>
            <button onClick={() => editHandler(index)}>EDIT</button>
            <button onClick={() => deleteHandler(index)}>DEL</button>
          </li>)}
      </ul>
    </div>
  )
}

export default App