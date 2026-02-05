const cards = [
  { title: "Total Tasks", value: 24, color: "bg-blue-100 text-blue-700" },
  { title: "Completed", value: 12, color: "bg-green-100 text-green-700" },
  { title: "In Progress", value: 8, color: "bg-yellow-100 text-yellow-700" },
  { title: "Pending", value: 4, color: "bg-red-100 text-red-700" },
];

const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`rounded-lg shadow p-4 hover:shadow-lg transition ${card.color}`}
        >
          <p className="text-sm font-medium">{card.title}</p>
          <p className="text-2xl font-semibold">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
