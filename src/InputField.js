import { useState } from "react"
const InputField = (props) => {
    const [inputValue, setInputValue] = useState("");
    const updateInputState = (newValue) => setInputValue(newValue);
    return (
    <div className="row top-buffer">
        <div className="col-12">
            <div className="taskAdder input-group">
                <input type="text" className="form-control" id="newTaskInput" placeholder={props.placeholder}
                    aria-label="Add Task" aria-describedby="addTaskButton" value={inputValue} onChange={(e) => updateInputState(e.target.value)}/>
                <div className="input-group-append">
                    <button className="input-group-text" id="addTaskButton" 
                    onClick={(e) => {
                        props.onSubmit(inputValue);
                        updateInputState("");
                    }}>Submit</button>
                </div>
            </div>
        </div>
    </div>
    )
} 
export default InputField;