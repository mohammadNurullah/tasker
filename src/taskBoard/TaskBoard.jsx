import { useState } from "react";

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
  isFavourate: true,
};

export default function TaskBoard() {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);

  const handlerAddTask = () => {};

  return (
    <>
      <section className="mb-20" id="tasks">
        {showModal && <TaskModal />}
        <div className="container">
          {/* <!-- Search Box --> */}
          <div className="p-2 flex justify-end">
            <TasksSearch />
          </div>
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TasksAction onTaskClick={() => setShowModal(true)} />

            <TasksList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}
