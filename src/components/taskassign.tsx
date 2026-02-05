const AssignTask = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-[#B3AACF]">
      <h3 className="font-bold text-[#8879B8] mb-4">
        Assign Task
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">
            Task Title
          </label>
          <input
            type="text"
            className="w-full border border-[#B3AACF] rounded-md px-3 py-2
                       focus:outline-none focus:border-[#8879B8]"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Project
          </label>
          <select className="w-full border border-[#B3AACF] rounded-md px-3 py-2">
            <option>PMS Revamp</option>
            <option>Mobile App</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Assign To
          </label>
          <select className="w-full border border-[#B3AACF] rounded-md px-3 py-2">
            <option>Viraj</option>
            <option>Riishi</option>
            <option>Aniket</option>
            <option>Tanishka</option>
            <option>Magesh</option>
            <option>Ayush</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Priority
          </label>
          <select className="w-full border border-[#B3AACF] rounded-md px-3 py-2">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Due Date
          </label>
          <input
            type="date"
            className="w-full border border-[#B3AACF] rounded-md px-3 py-2"
          />
        </div>

        <div className="col-span-2 flex justify-end mt-4">
          <button
            className="bg-[#8879B8] text-white px-6 py-2 rounded-md
                       hover:bg-[#8879B8]/90 transition"
          >
            Assign Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
