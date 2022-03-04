import { useState } from "react";

const TaskAdder = (props) => {
    const [inputValue, setInputValue] = useState("");
    const updateInputState = (newValue) => setInputValue(newValue);
    return (
    <div className="row top-buffer">
        <div className="col-12">
            <div className="taskAdder input-group">
                <input type="text" className="form-control" id="newTaskInput" placeholder="Enter New Task"
                    aria-label="Add Task" aria-describedby="addTaskButton" onChange={(e) => updateInputState(e.target.value)}/>
                <div className="input-group-append">
                    <span className="input-group-text" id="addTaskButton" onClick={() => props.onAddTask(props.data, inputValue)}>Submit</span>
                </div>
            </div>
        </div>
    </div>
    )
}
export default TaskAdder;