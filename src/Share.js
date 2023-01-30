import { useState } from 'react';

const Share = (props) => {
  const [inputValue, setInputValue] = useState("");
  const changeInputValue = (e) => setInputValue(e.target.value);


  return <div className={"container backdrop"}>
    <div className={"taskModal"}>
      <div className="justify-content-center">
        <h3>Share Tasks With</h3>
      </div>
      <div className={"row"}>
        <input value={inputValue} onChange={changeInputValue} className={"taskEditor"} />
      </div>
      <div className={"row align-items-center"}>
        <button className={"col-6 alert-button alert-cancel"} type={"button"} onClick={() => props.toggleShowShare()}>
          Cancel
        </button>
        <button className={"col-6 alert-button alert-ok"} type={"button"}
          onClick={() => {
            props.shareTaskList(props.taskListId, inputValue);
            props.toggleShowShare();
          }}>
          SHARE
        </button>
      </div>
    </div>
  </div>;
}

export default Share;