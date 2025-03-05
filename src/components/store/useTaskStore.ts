import { create } from 'zustand';
import { addTask, deleteTask, toggleTask } from '../../api';

type Task = {
  id: number;
  title: string;
  is_done: boolean;
};

type TaskStore = {
  tasks: Task[];
  addTaskLocal: (title: string) => void;
  toggleTaskLocal: (id: number) => void;
  deleteTaskLocal: (id: number) => void;
  setTasks: (tasks: Task[]) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTaskLocal: async (title: string) => {
    const newTask = await addTask({ title });
    set((state) => ({
      tasks: [newTask, ...state.tasks],
    }));
  },
  deleteTaskLocal: async (id: number) => {
    await deleteTask(id);
    set((state) => ({
      tasks: state.tasks.filter((task: Task) => task.id !== id),
    }));
  },
  toggleTaskLocal: async (id: number) => {
    await toggleTask(id);
    set((state) => ({
      tasks: state.tasks.map((task: Task) =>
        task.id === id ? { ...task, is_done: !task.is_done } : task
      ),
    }));
  },
  setTasks: (tasks: Task[]) => set({ tasks }),
}));

export default useTaskStore;
