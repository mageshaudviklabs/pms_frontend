import TopBar from "../components/topbar";
import AssignTask from "../components/taskassign";
import ProjectStatusTable from "../components/projectstatustable";
const ManagerDashboard = () => {

  return (
    <div className="flex min-h-screen bg-[#F2F0F7] font-sans">
      <div className="flex-1">
        <TopBar />

        <main className="p-6 space-y-6">
          {/* Project List */}
          {/* Project Status + Assign Task */}
          <div className="grid grid-cols-3 gap-6">
            {/* Project Status (2 columns wide) */}
            <div className="col-span-2">
              <ProjectStatusTable />
            </div>
            {/* Assign Task (1 column wide) */}
            <div className="col-span-1">
              <AssignTask />
            </div>

          </div>


          {/* Tasks + Team */}
          <div className="grid grid-cols-2 gap-6">
            {/* Tasks */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-[#B3AACF]">
              <h3 className="font-bold text-center text-[#8879B8] mb-4">
                Tasks
              </h3>

              <table className="w-full text-sm border-collapse">
                <tbody>
                  {[
                    ["To Do", 24],
                    ["In Progress", 8],
                    ["Completed", 12],
                  ].map(([label, value], index) => (
                    <tr
                      key={label}
                      className={`
            ${index % 2 === 0 ? "bg-[#F2F0F7]" : "bg-white"}
            hover:bg-[#B3AACF]/20
            transition-colors
          `}
                    >
                      <td className="px-4 py-2 font-medium">{label}</td>
                      <td className="px-4 py-2 text-right font-bold">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            {/* Team */}
            <div className="bg-white rounded-lg p-5 shadow-sm border border-[#B3AACF]">
              <h3 className="font-bold text-center text-[#8879B8] mb-4">
                Team
              </h3>

              <table className="w-full text-sm border-collapse">
                <tbody>
                  {[
                    ["Viraj", 5],
                    ["Riishi", 3],
                    ["Aniket", 7],
                    ["Tanishka", 7],
                    ["Magesh", 7],
                    ["Ayush", 7],
                  ].map(([name, tasks], index) => (
                    <tr
                      key={name}
                      className={`
            ${index % 2 === 0 ? "bg-[#F2F0F7]" : "bg-white"}
            hover:bg-[#B3AACF]/20
            transition-colors
          `}
                    >
                      <td className="px-4 py-2 font-medium">{name}</td>
                      <td className="px-4 py-2 text-right text-gray-600">
                        {tasks} tasks
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ManagerDashboard;
