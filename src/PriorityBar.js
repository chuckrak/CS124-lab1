


const PriorityBar = (props) => {

    return <div className={"container backdrop"}>
        <div className={"taskModal"}>
        <div className="justify-content-center">
          Change Priority
        </div> 
        <div className={"row align-items-center"}>     
                  <button className={"col-4 priority-button priority-low"} type={"button"} 
                          onClick={() => {
                            props.onItemChanged(props.taskListToEdit, props.taskToEdit.id, "priority", 0);
                            props.togglePriorityBar();
                            }}>
                    Low
                  </button>

                  <button className={"col-4 priority-button priority-medium"} type={"button"} 
                          onClick={() => {
                            props.onItemChanged(props.taskListToEdit, props.taskToEdit.id, "priority", 1);
                            props.togglePriorityBar();
                  }}>
                    Medium
                  </button>
                  <button className={"col-4 priority-button priority-high"} type={"button"} 
                          onClick={() => {
                            props.onItemChanged(props.taskListToEdit, props.taskToEdit.id, "priority", 2);
                            props.togglePriorityBar();
                  }}>
                    High
                  </button>
                  </div>
        </div>
        </div>


}

export default PriorityBar;
