export const TASKS_KEY = "todo:tasks";

export enum TaskState {
  Creating = "creating",
  Created = "created",
}

export type Task = {
  id: string;
  title: string;
  concluded?: boolean;
  state?: TaskState;
};
