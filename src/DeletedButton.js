import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeletedButton = (props) => {
    return (
      <div>
        <button className={"taskDeleter col-12 alert-button alert-ok"} type={"button"} onClick={props.deleteCompletedTasks}>
          Delete Completed Tasks
          <FontAwesomeIcon className={"trashIcon"} icon={faTrash} name="trashButton" size="sm"/>
        </button>

      </div>
    );
}
export default DeletedButton;  