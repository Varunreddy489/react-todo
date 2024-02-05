import React, { useState } from "react";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import TaskUpdate from "./TaskUpdate";
import AddDeadline from "./AddDeadline";

const Task = ({ title, description, deleteTask, index, date, time }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isradioClick, setIsRadioClick] = useState(false);
  const [isAddingDeadline, setIsAddingDeadline] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelUpdate = () => {
    setIsEditing(false);
  };

  const radioOnCLick = () => {
    setIsRadioClick(!isradioClick);

    if (isradioClick) {
      const radio = document.getElementById(`radio-${index}`);
      if (radio) {
        radio.checked = false;
      }
    }
    const taskElement = document.getElementById(`task-${index}`);
    if (taskElement) {
      taskElement.style.textDecoration = isradioClick ? "none" : "line-through";
    }
  };

  const handleDeadlineClick = () => {
    setIsAddingDeadline(!isAddingDeadline);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {isEditing ? (
        <TaskUpdate
          index={index}
          title={title}
          description={description}
          onUpdate={(updatedIndex, updatedTitle, updatedDescription) => {
            setIsEditing(false);
          }}
          onCancel={handleCancelUpdate}
        />
      ) : (
        <div
          className={`bg-blue text-black mx-auto lg:w-700 md:w-96 sm:w-full bg-gradient-to-l from-slate-300 to-slate-100 border border-slate-300 grid grid-col-2 p-4 rounded-lg shadow-md ${
            isradioClick ? "line-through" : ""
          }`}
          id={`task-${index}`}
        >
          <div className="flex items-center justify-center">
            <div className="mr-4">
              <input
                type="radio"
                onClick={radioOnCLick}
                id={`radio-${index}`}
              />
            </div>

            <div className="text-center flex-1">
              <p>{title}</p>
              <span>{description}</span>
            </div>

            <div className="space-x-4 flex flex-col sm:flex-row justify-center">
              <button
                className="flex items-center bg-gradient-to-r from-blue-800 to-cyan-300 border-none text-white rounded-full font-inherit text-base px-4 py-2 m-2"
                onClick={handleEditClick}
              >
                <EditOutlined />
              </button>
              <button
                className="flex items-center bg-gradient-to-r from-blue-800 to-cyan-300 border-none text-white rounded-full font-inherit text-base px-4 py-2 m-2"
                onClick={() => deleteTask(index)}
              >
                <DeleteOutlined />
              </button>
              <button
                className="flex items-center bg-gradient-to-r from-blue-800 to-cyan-300 border-none text-white rounded-full font-inherit text-base px-4 py-2 m-2"
                onClick={handleDeadlineClick}
              >
                <CalendarOutlined />
              </button>
            </div>
          </div>
        </div>
      )}
      {isAddingDeadline && <AddDeadline />}
    </div>
  );
};

export default Task;
