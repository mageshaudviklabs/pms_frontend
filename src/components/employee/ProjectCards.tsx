const projects = [
  { name: "PMS System", progress: 70 },
  { name: "E-Commerce Platform", progress: 45 },
  { name: "Mobile App Redesign", progress: 60 },
];

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((p, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
        >
          <h3 className="font-medium mb-2">{p.name}</h3>
          <div className="w-full bg-gray-200 h-3 rounded">
            <div
              className="bg-blue-500 h-3 rounded"
              style={{ width: `${p.progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Progress: {p.progress}%</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
