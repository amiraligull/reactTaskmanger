import { FaTimes} from 'react-icons/fa';
const Task = ({ task, onDelete, onToggel }) => {
  return (
    <div className="">
      <li className="flex flex-row">
        <div
          className={`select-none cursor-pointer flex flex-1 items-center p-4 ${task.reminder ? 'border-green-800 border-l-8' : ' '}` }
          onDoubleClick={() => onToggel(task.id)}
        >
          <div className="flex-1 pl-1 mr-16">
            <div className="font-medium dark:text-white">{task.text}</div>
            <div className="text-gray-600 dark:text-gray-200 text-sm">
              {task.day}
            </div>
          </div>
          {/* <div className="text-gray-600 dark:text-gray-200 text-xs">6:00 AM</div> */}
          <button
            className=" text-right flex justify-end text-red-500"
            onClick={() => onDelete(task.id)}
          >
            <FaTimes />
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task
