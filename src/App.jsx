import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import {useState, useEffect} from 'react'
// import { tasks as data } from './data/task'

const App = () => {
  // const [tasks, setTask] = useState([])

  // useEffect(() => {
  //   setTask(data)
  // }, [])

  // var sum = tasks.length + 1

  //  function createTask (task){
  //     setTask([...tasks,{
  //       title: task.title,
  //       id: tasks.length,
  //       description: task.description
  //     }])
  //   }

  // function deleteTask(taskId){
  //   setTask(tasks.filter(tasks => tasks.id !== taskId))
  // }

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10" >
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
};

export default App;
