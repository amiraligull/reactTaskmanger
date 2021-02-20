import { useState } from 'react'
import Task from './Task';
const Tasks = ({ tasks, onDelete, onToggel }) => {
  return (
    <div className="container flex-1 w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="px-4 py-5 sm:px-6 border-b w-full">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          User database
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
          Details and informations about user.
        </p>
      </div>
      <div className="TasksContainer">
        <ul className="flex flex-col divide divide-y">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggel={onToggel}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Tasks
