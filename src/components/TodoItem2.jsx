import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem2(props) {

    const { deleteItem } = useContext(TodoItemsContext);

    let todoName = props.todoName;
    let todoDate = props.todoDate;
    return (


        <div className="container">
            <div className="row  hr-rows">
                <div className="col-6">
                    {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger hr-button" onClick={() => deleteItem(todoName)}>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );

}

export default TodoItem2;