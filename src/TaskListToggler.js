import Dropdown from 'react-bootstrap/Dropdown';

export default function TaskListToggler(props) {
    return <div className="col-6 smallPadding">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className={"taskLists"}>
                {props.currentTaskListName}
            </Dropdown.Toggle>
            <Dropdown.Menu className={"dropdownMenu"}>
                {props.taskLists.map(taskList => <Dropdown.Item key={taskList.id} onClick={() => props.changeCurrentTaskList(taskList)} className={taskList.owner === props.user.email ? "owner" : "notOwner"} aria-label={taskList.name + ", click to select this task list"}>{taskList.name}</Dropdown.Item>)}
                <Dropdown.Divider />
                <Dropdown.Item key="0" onClick={props.toggleTaskListAdder}>Add New Task List</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>;
}