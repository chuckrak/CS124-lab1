import TaskList from './TaskList.js';
import InputField from './InputField.js';
import TaskToggler from './TaskToggler.js';
import TaskListToggler from './TaskListToggler';
import Header from './Header.js';


import { useState } from 'react';
import { collection, deleteDoc, doc, query, orderBy, setDoc/* , serverTimestamp */ } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { generateUniqueID } from 'web-vitals/dist/modules/lib/generateUniqueID';
import DeletedButton from './DeletedButton.js';

const subCollectionName = "tasks";
const ToggleBar = (props) => {
  const [showAllTasks, setShowAllTasks] = useState(true);
  const displayAllTasks = () => setShowAllTasks(true);
  const hideCompletedTasks = () => setShowAllTasks(false);
  const currentTaskList = props.currentTaskList;

  // const [currentTaskListId, setCurrentTaskListId] = useState((props.taskLists && props.taskLists.length > 0) ? props.taskLists[0].id : "");
  // const [currentTaskListName, setCurrentTaskListName] = useState((props.taskLists && props.taskLists.length > 0) ? props.taskLists[0].name : "");
  const ascOrDesc = props.taskOrder === "task" ? "asc" : "desc";
  

  const q = query(collection(props.db, props.collectionName, currentTaskList.id, subCollectionName), orderBy(props.taskOrder, ascOrDesc));

  const [tasks, loading, error] = useCollectionData(q);


  


  function handleAdd(taskName) {
    const uniqueId = generateUniqueID();
    setDoc(doc(props.db, props.collectionName,  currentTaskList.id, subCollectionName, uniqueId),
      {
        id: uniqueId,
        task: taskName,
        completed: false,
        dateCreated: new Date().getTime(),
        priority: 0,
      });
  }

  function deleteCompletedTasks() {
    tasks.forEach((task) => {
      if(task.completed){
        deleteDoc(doc(props.db, props.collectionName, currentTaskList.id, subCollectionName, task.id));
      }
    })
  }

  if (loading) {
    return (<div className="container">
      <Header/>
      <p>Loading</p>;
    </div>);
  }

  if (error) {
    return (<div className="container">
      <Header/>
      <p>Error</p>;
    </div>);
  }
  return (<div>
    <TaskToggler tasks={tasks} showAllTasks={showAllTasks} displayAllTasks={displayAllTasks} hideCompletedTasks={hideCompletedTasks}/>
    <div className="row">
      <TaskListToggler currentTaskListName={currentTaskList.name} taskLists={props.taskLists} changeCurrentTaskList={props.changeCurrentTaskList} user={props.user} toggleTaskListAdder={props.toggleTaskListAdder}/>

      <button className='col-6 CompletedBar' onClick={props.toggleFilter}>
        <div className="Tab Sorter">
          Sort by: {props.taskOrder === "task" ? "Alphabet" : (props.taskOrder === "priority" ? "Priority" : "Date" )}
        </div>
      </button>
    </div>
    <InputField placeholder={"Enter New Task"} onSubmit={handleAdd} />
    <div className="row">
      <TaskList data={tasks}
        showAllTasks={showAllTasks}
        currentTaskList={currentTaskList}
        toggleTaskEditor={props.toggleTaskEditor}
        togglePriorityBar={props.togglePriorityBar}
        changeTaskToEdit={props.changeTaskToEdit}
        onItemChanged={props.onItemChanged} onToggle />
    </div>
    <DeletedButton deleteCompletedTasks={deleteCompletedTasks}/>
  </div>);
}
export default ToggleBar;