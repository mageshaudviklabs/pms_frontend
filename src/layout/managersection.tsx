
import TopBar from "../components/topbar";


const ManagerDashboard = () => {
  return (
    <div className="flex bg-gray-100">
     

      <div className="flex-1">
        <TopBar />

        <main className="p-6 space-y-6">
          {/* Stats */}
          

          {/* Project List */}
          <div className="bg-white border rounded p-4">
            <h3 className="font-semibold mb-3">Project Status</h3>

            <table className="w-full text-sm">
              <thead className="text-left text-gray-500">
                <tr>
                  <th>Project</th>
                  <th>Progress</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td>PMS Revamp</td>
                  <td>70%</td>
                  <td className="text-green-600">On Track</td>
                </tr>
                <tr className="border-t">
                  <td>Mobile App</td>
                  <td>40%</td>
                  <td className="text-red-600">Delayed</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tasks + Team */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border rounded p-4">
              <h3 className="font-semibold mb-2">Tasks</h3>
              <p>To Do: 12</p>
              <p>In Progress: 8</p>
              <p>Completed: 24</p>
            </div>

            <div className="bg-white border rounded p-4">
              <h3 className="font-semibold mb-2">Team</h3>
              <p>John – 5 tasks </p>
              <p>Sara – 3 tasks </p>
              <p>Arun – 7 tasks </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ManagerDashboard;
