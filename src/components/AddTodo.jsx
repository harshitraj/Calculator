import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { useState, useRef } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo() {

    // const [todoName, setTodoName] = useState("");
    // const [dueDate, setDueDate] = useState("");


    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value);
    // }
    // const handleDateChange = (event) => {
    //     setDueDate(event.target.value);
    // }

    // Here above written useState logic is comment out because each time as state changes then whole page gets rerender again. So to improve this we have useRef method by using which if value changes then only referenced element gets changed, whole page didn't gets rerender.

    const { addNewItem } = useContext(TodoItemsContext);

    const todoNameElement = useRef();
    const dueDateElement = useRef();

    const handleAddButtonClicked = (event) => {
        event.preventDefault(); // In form, whenever we click any button then by default the form gets submitted to server and all data seen on screen disappears. To prevent our form from this default behaviour we'll use a mehood named preventDefault.
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;

        addNewItem(todoName, dueDate);

        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
        // setDueDate("");
        // setTodoName("");
    }

    return (
        <div className="container  text-center">
            <form className="row  hr-rows" onSubmit={handleAddButtonClicked} // Here we add a method called onSubmit, so whenever any button clicked in this form, this attribute comes into picture as per default behavior of form
            >
                <div className="col-6">
                    <input type="text"
                        placeholder='Enter Todo Here'
                        ref={todoNameElement}
                    // value={todoName}
                    // onChange={handleNameChange}
                    />
                </div>
                <div className="col-4">
                    <input type="date"
                        ref={dueDateElement}
                    // value={dueDate}
                    // onChange={handleDateChange}
                    />
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-success hr-button"
                    // onClick={handleAddButtonClicked}>
                    >
                        <IoAddCircleSharp />
                    </button>
                </div>
            </form>
        </div>
    );

}

export default AddTodo;