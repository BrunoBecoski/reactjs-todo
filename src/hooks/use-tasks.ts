import useLocalStorageState from "use-local-storage-state";

import { TASKS_KEY, type Task } from "../models/task";

export default function useTasks() {
  const [tasks, setTasks] = useLocalStorageState<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}
