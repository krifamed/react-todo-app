import { useState, useEffect } from "react";
import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import TodoActions from "./Components/TodoActions";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter === "active") {
      setFilteredTodos(todos.filter(todo => todo.active));
    } else if (filter === "completed") {
      setFilteredTodos(todos.filter(todo => todo.active === false));
    } else setFilteredTodos(todos);
  }, [todos, filter]);

  const addTodo = todo => {
    setTodos(todos => [
      ...todos,
      {
        id: Math.random()
          .toString(36)
          .substr(2, 9),
        todo,
        active: true,
        draft: todo
      }
    ]);
  };

  const updateTodos = newTodos => {
    setTodos(newTodos);
  };

  const applyFilter = filter => {
    setFilter(filter);
  };

  return (
    <div className="App">

      <Header />
      <div className="wrapper">
      <TodoInput addTodo={addTodo} />
      {todos.length>0&&<TodoList todos={filteredTodos} updateTodos={updateTodos} />}
      {todos.length >0&& (
        <TodoActions
        filter={filter}
        todos={todos}
        applyFilter={applyFilter}
        updateTodos={updateTodos}
        />
        )}
      </div>
    </div>
  );
};

export default App;
