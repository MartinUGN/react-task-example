import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();



export function TaskContextProvider(x) {

  const [tasks, setTask] = useState([]);

  function createTask(task) {
    setTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  
  function deleteTask(taskId) {
    setTask(tasks.filter((tasks) => tasks.id !== taskId));
  }
  
  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {x.children}
    </TaskContext.Provider>
  );
}
