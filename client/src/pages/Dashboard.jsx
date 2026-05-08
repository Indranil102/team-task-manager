import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import API from "../services/api";

function Dashboard() {

  const [stats, setStats] = useState({
    total_tasks: 0,
    completed_tasks: 0,
    pending_tasks: 0,
    overdue_tasks: 0,
  });

  const fetchStats = async () => {

    try {

      const response = await API.get(
        "/tasks/stats/dashboard"
      );

      setStats(response.data);

    } catch (error) {

      console.log(error.response.data);

    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const cards = [
    {
      title: "Total Tasks",
      value: stats.total_tasks,
    },
    {
      title: "Completed",
      value: stats.completed_tasks,
    },
    {
      title: "Pending",
      value: stats.pending_tasks,
    },
    {
      title: "Overdue",
      value: stats.overdue_tasks,
    },
  ];

  return (
    <MainLayout>

      <h1 className="text-3xl font-semibold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

        {cards.map((card) => (

          <div
            key={card.title}
            className="bg-white border border-slate-200 rounded-xl p-6"
          >

            <p className="text-slate-500 text-sm">
              {card.title}
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {card.value}
            </h2>

          </div>

        ))}

      </div>

    </MainLayout>
  );
}

export default Dashboard;