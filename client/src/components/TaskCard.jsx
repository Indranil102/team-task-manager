import MainLayout from "../layouts/MainLayout";

function Tasks() {

  const tasks = [
    {
      title: "Build Login API",
      status: "In Progress"
    },
    {
      title: "Design Dashboard",
      status: "Completed"
    }
  ];

  return (
    <MainLayout>

      <h1 className="text-3xl font-semibold mb-6">
        Tasks
      </h1>

      <div className="space-y-4">

        {tasks.map((task) => (
          <div
            key={task.title}
            className="bg-white border border-slate-200 rounded-xl p-5 flex justify-between items-center"
          >
            <h2 className="font-medium">
              {task.title}
            </h2>

            <span className="text-sm text-slate-600">
              {task.status}
            </span>
          </div>
        ))}

      </div>

    </MainLayout>
  );
}

export default Tasks;