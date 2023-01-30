


const Filter = (props) => {


  return <div className={"container backdrop"}>
    <div className={"taskModal"}>
      <div className="justify-content-center">
        <h3>Sort Tasks By</h3>
      </div>
      <div className={"row align-items-center"}>

        <button className={"col-3 priority-button"} type={"button"}
        tabIndex="0"
          onClick={() => {
            props.changeTaskOrder("task");
            props.toggleFilter();
          }}>
          Name
        </button>

        <button className={"col-3 priority-button"} type={"button"}
        tabIndex="1"
          onClick={() => {
            props.changeTaskOrder("priority");
            props.toggleFilter();
          }}>
          Priority
        </button>

        <button className={"col-3 priority-button"} type={"button"}
        tabIndex="2"
          onClick={() => {
            props.changeTaskOrder("dateCreated");
            props.toggleFilter();
          }}>
          Date
        </button>
        <button className={"col-3 priority-button"} type={"button"}
        tabIndex="3"
          onClick={() => props.toggleFilter()}>
          Cancel
        </button>
      </div>
    </div>
  </div>


}

export default Filter;