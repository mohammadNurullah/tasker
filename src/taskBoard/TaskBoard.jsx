import { useState } from "react";

import NoTasksFound from "./NoTasksFound";
import TaskModal from "./TaskModal";
import TasksAction from "./TasksAction";
import TasksList from "./TasksList";
import TasksSearch from "./TasksSearch";

const defaultTask = {
  id: crypto.randomUUID(),
  title: "Integration API",
  description:
    "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
  tags: ["Web", "Python", "Javascript"],
  priority: "High",
  isFavorite: true,
};

export default function TaskBoard() {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((t) => {
          if (t.id === newTask.id) {
            return newTask;
          }
          return t;
        })
      );
    }
    setShowModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const handleFavTask = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    const newTasks = [...tasks];

    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;

    setTasks(newTasks);
  };

  const handleCancleTask = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleSearch = (searchTerm) => {
    //console.log(searchTerm);

    setTasks(
      tasks.filter((t) =>
        t.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  return (
    <>
      <section className="mb-20" id="tasks">
        {showModal && (
          <TaskModal
            onSave={handleAddTask}
            taskToUpdate={taskToUpdate}
            onCancle={handleCancleTask}
          />
        )}
        <div className="container">
          {/* <!-- Search Box --> */}
          <div className="p-2 flex justify-end">
            <TasksSearch onSearch={handleSearch} />
          </div>
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TasksAction
              onTaskClick={() => setShowModal(true)}
              onDeleteAllClick={handleDeleteAllTask}
            />

            {tasks.length > 0 ? (
              <TasksList
                tasks={tasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onFav={handleFavTask}
              />
            ) : (
              <NoTasksFound />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
