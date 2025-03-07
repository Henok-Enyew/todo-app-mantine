---

### **Frontend - React Todo App (Mantine + Zustand)**

````markdown
# Frontend - React Todo App

This is the frontend for a simple Todo application built with React, Mantine (for UI), and Zustand (for state management). The app connects to the Django API to perform CRUD operations on tasks.

## Prerequisites

- Node.js (v18+)
- npm or yarn (for package management)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/frontend-todo-app.git
   cd frontend-todo-app
   ```
2. **Install dependencies:**:
   ```bash
    yarn install
   ```
3. **Start the app**:
   ```bash
    yarn dev
   ```
## State Management (Zustand)

This app uses Zustand to manage the tasks state globally.
The tasks are stored and updated in Zustand, and any changes trigger a re-render of the components that use the tasks state.

### Store (`src/store/useTaskStore.js`)

The store defines actions for fetching tasks, adding tasks, deleting tasks, and toggling task completion.  
The tasks state is updated directly after each action to keep the frontend in sync with the backend.

---

## UI (Mantine)

The app uses Mantine for UI components. Mantine offers a rich set of components like buttons, modals, inputs, and more. To customize or add components, you can also explore the [Mantine documentation](https://mantine.dev/).
