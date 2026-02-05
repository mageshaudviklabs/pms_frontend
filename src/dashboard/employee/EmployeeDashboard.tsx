import Topbar from "../../components/employee/Topbar";
import OverviewCards from "../../components/employee/OverviewCards";
import ProjectCards from "../../components/employee/ProjectCards";
import TasksTable from "../../components/employee/TasksTable";
import TeamMembers from "../../components/employee/TeamMembers";


const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <h2 className="text-xl font-semibold text-gray-800">
          Dashboard Overview
        </h2>

        <OverviewCards />
        <ProjectCards />
        <TasksTable />
        <TeamMembers />
        
      </main>
    </div>
  );
};

export default EmployeeDashboard;
