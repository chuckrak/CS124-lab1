export default function TaskToggler(props) {
    return <div className="row">
        <button className="col-6 CompletedBar" onClick={props.displayAllTasks}>
            <div className={props.showAllTasks ? "SelectedTab" : "Tab"}>
                All Tasks ({props.tasks.length})
            </div>
        </button>
        <button className="col-6 CompletedBar" onClick={props.hideCompletedTasks}>
            <div className={props.showAllTasks ? "Tab" : "SelectedTab"}>
                Outstanding Tasks({props.tasks.filter(t => !t.completed).length})
            </div>
        </button>
    </div>;
}