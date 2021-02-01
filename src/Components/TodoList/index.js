import TodoItem from '../TodoItem';

const TodoList = ({todos, updateTodos}) => {

    const onDeleteTodo = todo_id => {
        const newTodos = todos.filter(todo=>todo.id!==todo_id);
        updateTodos(newTodos);
    }

    const onUpdateTodo= (todo_id, data) => {
        const newTodos = todos.map(todo => todo.id===todo_id?{...todo, ...data}: todo); 
        updateTodos(newTodos);
    }
    
    const count_completed = todos.reduce((acc, val)=> acc+(val.active===false), 0)===todos.length && todos.length;

    const completeAll= () => {
        const newTodos = todos.map(todo => ({...todo, active: count_completed}));
        updateTodos(newTodos);

    }

  return (
    <section className="main">
        <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={count_completed}
            readOnly
        />
        <label htmlFor="toggle-all" onClick={completeAll} />

        <ul className="todos__list">
            {
                todos.map(todo=>(
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                        // editTodo={editTodo}
                        updateTodo={onUpdateTodo}
                        deleteTodo={onDeleteTodo}
                    />
                ))
            }
        </ul>

    </section>
  );
};

export default TodoList;