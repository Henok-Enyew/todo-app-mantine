import { create } from 'zustand';

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

type TaskStore = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    { id: 3, title: 'Finish homework', isDone: false },
    { id: 7, title: 'Visit the gym', isDone: false },
    { id: 8, title: 'Call mom', isDone: true },
  ],
  addTask: (title: string) =>
    set((state) => ({
      tasks: [{ id: Date.now(), title, isDone: false }, ...state.tasks],
    })),
  deleteTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.filter((task: Task) => task.id !== id),
    })),
  toggleTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((task: Task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      ),
    })),
}));

export default useTaskStore;
