import './App.css';
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContextProvider } from './store/todo-items-store';


function App() {
    return (
        <TodoItemsContextProvider>
            <center
                className='todo-container'>
                <AppName />
                <AddTodo />
                <WelcomeMessage />
                <TodoItems />
            </center>
        </TodoItemsContextProvider>
    );
}

export default App;


{/* Context API format to ensure every component can access it independently. */ }

{/* Till now, i used to declare the state and pass it as props to its children (like here todoItems were passed to all its children) but now after introducing context API, i am declaring state and pass it(todoItems) to context API. It will be handeled there now. We can pass states, various methods in form of objext to context API(as we did above). All components which are children of context API can directly use them. So there is no need to pass anything as props, while calling components. Instead just made them children of context API. */ }