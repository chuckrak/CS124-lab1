import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeletedButton = (props) => {
    return (
      <div>
        <FontAwesomeIcon icon={faTrash} name="trashButton" size="xl" onClick={props.deleteCompletedTasks}/>
      </div>
    );
}
export default DeletedButton;  