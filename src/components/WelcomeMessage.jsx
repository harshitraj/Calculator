import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';

import styles from './WelcomeMessage.module.css';

const WelcomeMessage = () => {

    // const contextObject = useContext(TodoItemsContext);
    // const todoItems = contextObject.todoItems;
    {/*ABove two lines can be written as destructuring form as */ }

    const { todoItems } = useContext(TodoItemsContext);

    // Here we are using context API, since it contains various items so we will use it as object. First we create a contextObject and then by using contextObjext.todoItems(means using todoItems from contextObject) we can access todoItems from context API.


    return (todoItems.length === 0 && <p className={styles.Welcome}>Enjoy your day</p>
    );

}

export default WelcomeMessage;