import { useState } from 'react';


const TaskListAdder = (props) => {
    const [inputValue, setInputValue] = useState("");
    const changeInputValue = (e) => setInputValue(e.target.value);
    return <div className={"container backdrop"}>
          <div className={"taskModal"}>
                <div className={"row"}>
                  <input value={inputValue} onChange={changeInputValue} className={"taskEditor"}/>
                </div>
                <div className={"row align-items-center"}>
                  <button className={"col-6 alert-button alert-cancel"} type={"button"} onClick={props.toggleTaskListAdder}>
                      Cancel
                  </button>
                  <button className={"col-6 alert-button alert-ok"} type={"button"}
                          onClick={() => {
                            props.toggleTaskListAdder();
                            props.addTaskList(inputValue);
                          }}>
                      Add
                  </button>
                </div>
          </div>
      </div>
}
export default TaskListAdder;