import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem2 from "./TodoItem2";
import styles from './TodoItems.module.css';

const TodoItems = () => {

    // const contextObject = useContext(TodoItemsContext);
    // const todoItems = contextObject.todoItems;
    {/*ABove two lines can be written as destructuring form as */ }

    const { todoItems } = useContext(TodoItemsContext);

    // Here we are using context API, since it contains various items so we will use it as object. First we create a contextObject and then by using contextObjext.todoItems(means using todoItems from contextObject) we can access todoItems from context API.

    return (
        <>
            <div className={`${styles['item-container']}`}>
                {todoItems.map((item) => (
                    <TodoItem2
                        key={item.todoName}
                        todoName={item.todoName}
                        todoDate={item.todoDate}
                    />
                ))}
            </div>
        </>
    )
}

export default TodoItems;