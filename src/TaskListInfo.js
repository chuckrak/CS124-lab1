import { useState } from "react";
const TaskListInfo = (props) => {
    const [inputValue, setInputValue] = useState(props.taskList.name);
    const changeInputValue = (e) => setInputValue(e.target.value);
    console.log("tli", props.taskList);
    function promptUnshare(email){
        const proceed = window.confirm("Are you sure you want to unshare from " + email + "?");
        proceed && props.unshareTaskList(props.taskList.id, email)

    }
    const sharedList = props.taskList.hasAccess.filter(elt => elt !== props.taskList.owner);
    return <div className={"container backdrop"}>
        <div className={"taskModal"}>
            <div className="justify-content-center">
                <h3>Task List Info</h3>
            </div>
            <div className="row">
                <h5>Owner: {props.taskList.owner}</h5>
            </div>
            <div className="row">
                <h5>Shared With {props.user.email === props.taskList.owner && "(Click To Unshare)"}:</h5>
                {sharedList.map((email) => {
                    return <button className={"sharedUsers"} key={email} onClick={() => promptUnshare(email)}>
                        {email}
                    </button>;
                })}
            </div>
            <div className={"row"}>
                <h5>Edit Task List Name:</h5>
                <input value={inputValue} onChange={changeInputValue} className={"taskEditor"} />
            </div>
            <div className={"row align-items-center"}>
                <button className={"col-6 alert-button alert-cancel"} type={"button"} onClick={props.toggleShowTaskListInfo}>
                    Cancel
                </button>
                <button className={"col-6 alert-button alert-ok"} type={"button"}
                    onClick={() => {
                        props.editTaskListName(props.taskList.id, inputValue);
                        props.toggleShowTaskListInfo();
                    }}>
                    Save
                </button>
            </div>
            <br/>
            {props.taskList.owner === props.user.email && <div className={"row"}>
                <button className="col-12 alert-button alert-danger" type="button"
                onClick={() => {
                    const proceed = window.confirm("Are you sure you want to delete task list? This cannot be undone");
                    proceed && props.deleteTaskList(props.taskList.id);
                    props.toggleShowTaskListInfo();
                }}>
                    Delete Task List
                </button>
            </div>}
            <div className="row">
                <button className="col-12 alert-button alert-cancel" type="button" onClick={props.toggleShowTaskListInfo}>
                    Close
                </button>
            </div>
        </div>
    </div>;
}

export default TaskListInfo;