import MainLayout from "../layouts/MainLayout";

function Dashboard() {

  const stats = [
    { title: "Total Tasks", value: 24 },
    { title: "Completed", value: 10 },
    { title: "Pending", value: 8 },
    { title: "Overdue", value: 6 },
  ];

  return (
    <MainLayout>

      <h1 className="text-3xl font-semibold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-slate-200 rounded-xl p-5"
          >
            <p className="text-slate-500 text-sm">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {item.value}
            </h2>
          </div>
        ))}

      </div>

    </MainLayout>
  );
}

export default Dashboard;