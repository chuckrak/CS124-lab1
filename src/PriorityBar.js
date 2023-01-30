


const PriorityBar = (props) => {

  return <div className={"container backdrop"}>
    <div className={"taskModal"}>
      <div className="justify-content-center">
        <h3>Change Priority</h3>
      </div>
      <div className={"row align-items-center"}>
        <button className={"col-3 priority-button priority-low"} type={"button"}
          onClick={() => {
            props.onItemChanged(props.currentTaskList.id, props.taskToEdit.id, "priority", 0);
            props.togglePriorityBar();
          }}>
          Low
        </button>

        <button className={"col-3 priority-button priority-medium"} type={"button"}
          onClick={() => {
            props.onItemChanged(props.currentTaskList.id, props.taskToEdit.id, "priority", 1);
            props.togglePriorityBar();
          }}>
          Medium
        </button>
        <button className={"col-3 priority-button priority-high"} type={"button"}
          onClick={() => {
            console.log(props.currentTaskList);
            props.onItemChanged(props.currentTaskList.id, props.taskToEdit.id, "priority", 2);
            props.togglePriorityBar();
          }}>
          High
        </button>
        <button className={"col-3 priority-button p"} type={"button"} onClick={() => props.togglePriorityBar()}> 
          Cancel
        </button>
      </div>
    </div>
  </div>


}

export default PriorityBar;
