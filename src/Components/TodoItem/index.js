import { useState } from "react";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(todo.todo);

  const onChange = event => {
    updateTodo(todo.id, { active: !event.target.checked });
  };

  const editOnDoubleClick = event => {
    setEdit(true);
  };

  const handleKeyDown = event => {
    console.log(event.key, event.target.value);
    if (event.key === "Enter") {
      updateTodo(todo.id, { todo: value });
      setEdit(false);
    }
    if (event.key === "Escape") {
      setEdit(false);
      setValue(todo.todo);
    }
  };

  const handleValueChange = event => {
    setValue(event.target.value);
  };

  return (
    <li className={`todo__item ${todo.active?'': 'completed'}`}>
      {edit ? (
        <input
          type="text"
          onChange={handleValueChange}
          value={value}
          className="todo__edit"
          onKeyDown={handleKeyDown}
          autoFocus={true}
        />
      ) : (
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={!todo.active}
            onChange={onChange}
          />
          <label
            onDoubleClick={() => editOnDoubleClick(todo)}
            className="label__todo"
          >
            {todo.todo}
          </label>
          <button
            className="destroy"
            onClick={() => deleteTodo(todo.id)}
          ></button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
