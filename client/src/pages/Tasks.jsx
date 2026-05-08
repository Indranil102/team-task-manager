import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import API from "../services/api";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: "",
    project_id: "",
  });

  const fetchTasks = async () => {

    try {

      const response = await API.get("/tasks/");

      setTasks(response.data);

    } catch (error) {

      console.log(error.response.data);

    }
  };

  const fetchProjects = async () => {

    try {

      const response = await API.get("/projects/");

      setProjects(response.data);

    } catch (error) {

      console.log(error.response.data);

    }
  };

  useEffect(() => {

    fetchTasks();

    fetchProjects();

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/tasks/",
        formData
      );

      setFormData({
        title: "",
        description: "",
        due_date: "",
        project_id: "",
      });

      fetchTasks();

    } catch (error) {

      console.log(error.response.data);

    }
  };
  const updateTaskStatus = async (
  taskId,
  status
) => {

  try {

    await API.put(
      `/tasks/${taskId}?status=${status}`
    );

    fetchTasks();

  } catch (error) {

    console.log(error.response.data);

  }
};

  return (
    <MainLayout>

      <h1 className="text-3xl font-semibold mb-6">
        Tasks
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-xl p-5 mb-6 space-y-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none"
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none h-28 resize-none"
        />

        <input
          type="date"
          name="due_date"
          value={formData.due_date}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none"
        />

        <select
          name="project_id"
          value={formData.project_id}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none"
        >

          <option value="">
            Select Project
          </option>

          {projects.map((project) => (

            <option
              key={project.id}
              value={project.id}
            >
              {project.name}
            </option>

          ))}

        </select>

        <button
          className="bg-slate-900 text-white px-5 py-3 rounded-lg"
        >
          Create Task
        </button>

      </form>

      <div className="grid md:grid-cols-2 gap-5">

        {tasks.map((task) => (

          <div
            key={task.id}
            className="bg-white border border-slate-200 rounded-xl p-5"
          >

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-semibold">
                {task.title}
              </h2>

              <select
  value={task.status}
  onChange={(e) =>
    updateTaskStatus(
      task.id,
      e.target.value
    )
  }
  className="text-sm border border-slate-300 rounded-full px-3 py-1 outline-none"
>

  <option value="Pending">
    Pending
  </option>

  <option value="In Progress">
    In Progress
  </option>

  <option value="Completed">
    Completed
  </option>

</select>

            </div>

            <p className="text-slate-600 mt-3">
              {task.description}
            </p>

            <p className="text-sm text-slate-500 mt-4">
              Due: {task.due_date}
            </p>

          </div>

        ))}

      </div>

    </MainLayout>
  );
}

export default Tasks;