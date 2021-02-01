import { useState } from "react";

const TodoActions = ({ filter, todos, applyFilter, updateTodos }) => {
  const clearCompleted = () => {
    const newTodos = todos.filter(todo => todo.active);
    updateTodos(newTodos);
  };
  const completed_count = todos.reduce((acc, val)=>val.active===false?acc+1:acc,0);
  const todos_count = todos.length - completed_count;

  return (
    <section className="todos__state">
      <span>{`${todos_count} item${todos_count>1?'s':''} left`}</span>
      <ul>
        <li>
          <a
            className={filter === "all" ? "active" : ""}
            href="#/all"
            onClick={() => applyFilter("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={filter === "active" ? "active" : ""}
            onClick={() => applyFilter("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={filter === "completed" ? "active" : ""}
            onClick={() => applyFilter("completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <div>
        {completed_count!==0 && (
          <button className="clear_completed" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </div>
    </section>
  );
};

export default TodoActions;
