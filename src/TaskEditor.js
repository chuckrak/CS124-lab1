import { useState } from 'react';


const TaskEditor = (props) => {
    const [inputValue, setInputValue] = useState(props.taskToEdit.task);
    const changeInputValue = (e) => setInputValue(e.target.value);
    return <div className={"container backdrop"}>
          <div className={"taskModal"}>
                <div className={"row"}>
                  <input value={inputValue} onChange={changeInputValue} className={"taskEditor"}/>
                </div>
                <div className={"row align-items-center"}>
                  <button className={"col-6 alert-button alert-cancel"} type={"button"} onClick={props.toggleTaskEditor}>
                      Cancel
                  </button>
                  <button className={"col-6 alert-button alert-ok"} type={"button"}
                          onClick={() => {
                            props.toggleTaskEditor();
                            props.onItemChanged(props.taskToEdit.id, "task", inputValue);
                          }}>
                      OK
                  </button>
                </div>
          </div>
      </div>
}
export default TaskEditor;