const members = ["Ayush", "Rahul", "Neha", "Vishal"];

const TeamMembers = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <h3 className="font-medium mb-4">Team Members</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {members.map((m, i) => (
          <div key={i} className="flex items-center gap-2 hover:bg-gray-50 p-1 rounded transition">
            <img src={`https://i.pravatar.cc/40?img=${i + 10}`} className="w-8 h-8 rounded-full" />
            <span className="text-sm">{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
