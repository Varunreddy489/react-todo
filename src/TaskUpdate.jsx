import React, { useState } from "react";
import PropTypes from "prop-types";

const TaskUpdate = ({ index, title, description, onUpdate, onCancel }) => {

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleUpdate = () => {
    onUpdate(index, updatedTitle, updatedDescription);
  };

  return (
    <div className="bg-blue text-black mx-auto w-full lg:w-700 md:w-96 bg-gradient-to-l from-slate-300 to-slate-100 border border-slate-300 grid grid-col-2 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-center">
        <div className="mr-4">
          <input type="radio" />
        </div>
        <div className="text-center flex flex-col border-slate-800">
          <input
            type="text"
            value={updatedTitle}
            className="p-1"
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedDescription}
            className="p-1"

            onChange={(e) => setUpdatedDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="space-x-4 flex flex-row sm:flex-row justify-center">
          <button
            className="flex items-center bg-gradient-to-r from-blue-800 to-cyan-300 border-none text-white rounded-full font-inherit text-base px-4 py-2 m-2"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="flex items-center bg-gradient-to-r from-blue-800 to-cyan-300 border-none text-white rounded-full font-inherit text-base px-4 py-2 m-2"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

TaskUpdate.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default TaskUpdate;
