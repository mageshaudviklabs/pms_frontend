import { useState } from "react";

const projectTasks = {
  "PMS Revamp": [
    { member: "Viraj", task: "API Integration", status: "In Progress" },
    { member: "Riishi", task: "UI Fixes", status: "Completed" },
  ],
  "Mobile App": [
    { member: "Aniket", task: "Login Flow", status: "Delayed" },
    { member: "Tanishka", task: "Dashboard UI", status: "In Progress" },
  ],
};

export default function ProjectStatusTable() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (project: string) => {
    setOpenProject(openProject === project ? null : project);
  };

  return (
    <div className="col-span-2 bg-white rounded-lg shadow-sm border border-[#B3AACF] overflow-hidden">
      <h3 className="font-bold text-[#8879B8] px-5 py-3 border-b border-[#B3AACF]/50">
        Project Status
      </h3>

      <table className="w-full text-sm">
        <thead className="bg-[#F2F0F7] text-[#8879B8] text-xs uppercase">
          <tr>
            <th className="px-4 py-3 text-left">Project</th>
            <th className="px-4 py-3">Progress</th>
            <th className="px-4 py-3">Assigned</th>
            <th className="px-4 py-3">Due</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#B3AACF]/40">
          {Object.keys(projectTasks).map((project) => (
            <>
              {/* Parent Row */}
              <tr
                key={project}
                className="hover:bg-[#F2F0F7] cursor-pointer transition"
              >
                <td
                  className="px-4 py-3 font-medium text-[#8879B8]"
                  onClick={() => toggleProject(project)}
                >
                  {openProject === project ? "▼" : "▶"} {project}
                </td>
                <td className="px-4 py-3">70%</td>
                <td className="px-4 py-3">01 Sep 2026</td>
                <td className="px-4 py-3">15 Sep 2026</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    On Track
                  </span>
                </td>
              </tr>

              {/* Inner Table */}
              {openProject === project && (
                <tr className="bg-[#F2F0F7]/60">
                  <td colSpan={5} className="px-6 py-4">
                    <table className="w-full text-sm bg-white rounded-md border border-[#B3AACF]/40">
                      <thead className="bg-[#F2F0F7] text-[#8879B8]">
                        <tr>
                          <th className="px-3 py-2 text-left">Member</th>
                          <th className="px-3 py-2 text-left">Task</th>
                          <th className="px-3 py-2 text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projectTasks[project].map((item, index) => (
                          <tr
                            key={index}
                            className="border-t hover:bg-[#F2F0F7]"
                          >
                            <td className="px-3 py-2">{item.member}</td>
                            <td className="px-3 py-2">{item.task}</td>
                            <td className="px-3 py-2">
                              <span
                                className={`px-2 py-1 text-xs rounded-full
                                  ${
                                    item.status === "Completed"
                                      ? "bg-green-100 text-green-700"
                                      : item.status === "Delayed"
                                      ? "bg-red-100 text-red-700"
                                      : "bg-yellow-100 text-yellow-700"
                                  }`}
                              >
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
