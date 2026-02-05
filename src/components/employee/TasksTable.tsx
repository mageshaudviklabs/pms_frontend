const tasks = [
  { name: "Payment Gateway Integration", status: "In Progress", due: "Jan 25, 2026", action: "To Do" },
  { name: "Design Product Listing Page", status: "Testing", due: "Jan 23, 2026", action: "To Do" },
];

const statusColors: any = {
  "In Progress": "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-red-100 text-red-700",
  Testing: "bg-blue-100 text-blue-700",
};

const TasksTable = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full table-fixed border-collapse text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 w-2/5 text-left">Task Name</th>
              <th className="p-3 w-1/5 text-left">Status</th>
              <th className="p-3 w-1/5 text-left">Due Date</th>
              <th className="p-3 w-1/5 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, i) => (
              <tr key={i} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{t.name}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs ${statusColors[t.status]}`}>
                    {t.status}
                  </span>
                </td>
                <td className="p-3">{t.due}</td>
                <td className="p-3">
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>{t.action}</option>
                    <option>In Progress</option>
                    <option>Done</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden divide-y">
        {tasks.map((t, i) => (
          <div
            key={i}
            className="p-4 space-y-2 text-sm bg-white hover:shadow-md rounded transition"
          >
            <div>
              <span className="text-gray-500">Task</span>
              <p className="font-medium">{t.name}</p>
            </div>
            <div className="flex justify-between">
              <span>Status</span>
              <span className={`${statusColors[t.status]} px-2 py-1 rounded text-xs`}>
                {t.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Due</span>
              <span>{t.due}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Action</span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>{t.action}</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksTable;
