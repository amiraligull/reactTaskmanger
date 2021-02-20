import { useState } from 'react';
const AddTask = ({ onAdd  }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault()
    if (!text || !day)
    {
      alert('please fill the task fild ');
      return 
    }
    onAdd({ text, day, reminder });
    setText("")
    setDay("")
    setReminder("");
  }
  return (
    <form className="add-form p-10" onSubmit={ onSubmit }>
      <label className="text-gray-600 font-light">Task</label>
      <input
        type="text"
        placeholder="Enter your Task here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full mt-2 mb-6 px-6 py-3 border rounded-lg text-lg text-gray-700 focus:outline-none"
      />
      <label className="text-gray-600 font-light">Date and Time</label>
      <input
        type="text"
        placeholder="Enter your day and time "
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="w-full mt-2 mb-6 px-6 py-3 border rounded-lg text-lg text-gray-700 focus:outline-none"
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          className="h-4 w-4 text-gray-700 border rounded mr-2"
        />
        <label htmlFor="checkbox-example">Set Remainder</label>
      </div>
      <button
        type="submit"
        className="mb-1 w-full bg-gray-800 text-gray-100 rounded hover:bg-gray-500 px-2 py-2 focus:outline-none"
      >
        Save Task
      </button>
    </form>
  );
};

export default AddTask
