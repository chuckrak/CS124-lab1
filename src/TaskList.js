import Task from './Task.js';


const TaskList = (props) => {
    const data = props.showAllTasks ? props.data : props.data.filter(entry => !entry.completed);
    if(!data){
      return <p>NO DATA</p>;
    }
    return (data.map(entry =>  <Task 
      onAddTask={props.onAddTask} 
      key={entry.id} 
      task={entry} 
      onItemChanged={props.onItemChanged}  
      toggleTaskEditor={props.toggleTaskEditor}
      changeTaskToEdit={props.changeTaskToEdit}
      className={entry.completed ? "CompletedTask" : "Task"} />))
}
export default TaskList;  