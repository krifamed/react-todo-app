import {useState} from "react";

const Header = ({addTodo}) => {
    const [todo, setTodo] = useState('');
    const onChange = (event) => {
        setTodo(event.target.value);
    }

    const saveTodo = (event) => {
        if(event.key === 'Enter' && todo !== ''){
            addTodo(todo);
            setTodo('');
        }
    }
    
    return (
        <input
          type="text"
          name="todo"
          placeholder="What needs to be done?"
          className="todo__input"
          value={todo}
          onChange={onChange}
          onKeyDown={saveTodo}
        />
    );
  };
export default Header;