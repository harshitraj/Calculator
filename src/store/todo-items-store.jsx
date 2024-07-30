import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },
});


//reducer function defined here. Dispatch function calls reducer function by providing action as parameter. Then reducer function already have currentvalues and it receives action from dispatch function and runs accordingly.

//Reducer finction is pure function so it is defined outside.

const todoItemsReducer = (currTodoItems, action) => {

    let newTodoItems = currTodoItems;

    if (action.type === "NEW_ITEM") { // action to add new item
        newTodoItems = [...currTodoItems,
        {
            todoName: action.payload.itemName,
            todoDate: action.payload.itemDueDate
        },
        ];
    }

    else if (action.type === "DELETE_ITEM") {
        newTodoItems = currTodoItems.filter(
            (item) => item.todoName !== action.payload.itemName);
    }

    return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
    // We will comment out all useState used. Insteasd let's use useReducer.
    // const [todoItems, setTodoItems] = useState([]);

    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    const addNewItem = (itemName, itemDueDate) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                itemName,
                itemDueDate,
            },
        };
        dispatchTodoItems(newItemAction);
        //Here inside setTodoItems method, we define an anonymous function instead of directly passing updated value to handle the error which might occurs while convrting Virtual DOM to Real DOM.

        // So always prefer functional update method(like done above) to update states in a component.
    }


    const deleteItem = (todoItemName) => {
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                itemName: todoItemName,
            },
        };
        dispatchTodoItems(deleteItemAction);
    };


    // const deleteItem = (todoItemName) => {
    //     const newTodoItems = todoItems.filter(item => item.todoName !== todoItemName);
    //     setTodoItems(newTodoItems);
    // }

    return (
        <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem, }}>
            {children}
        </TodoItemsContext.Provider>

        //Here TodoItemsContext.provider is react component which includes other components as child. By writing this way, it means that all the child component can use the TodoItemsContext.provider (Context API) directly by importing them in their components.
    );
};

export default TodoItemsContextProvider;
