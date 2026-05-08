import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import API from "../services/api";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const fetchProjects = async () => {

    try {

      const response = await API.get("/projects/");

      setProjects(response.data);

    } catch (error) {

      console.log(error.response.data);

    }
  };

  useEffect(() => {
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
        "/projects/",
        formData
      );

      setFormData({
        name: "",
        description: "",
      });

      fetchProjects();

    } catch (error) {

      console.log(error.response.data);

    }
  };

  return (
    <MainLayout>

      <div className="flex items-center justify-between mb-6">

        <h1 className="text-3xl font-semibold">
          Projects
        </h1>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate-200 rounded-xl p-5 mb-6 space-y-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none"
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none h-28 resize-none"
        />

        <button
          className="bg-slate-900 text-white px-5 py-3 rounded-lg"
        >
          Create Project
        </button>

      </form>

      <div className="grid md:grid-cols-2 gap-5">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-white border border-slate-200 rounded-xl p-5"
          >

            <h2 className="text-xl font-semibold">
              {project.name}
            </h2>

            <p className="text-slate-600 mt-2">
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </MainLayout>
  );
}

export default Projects;