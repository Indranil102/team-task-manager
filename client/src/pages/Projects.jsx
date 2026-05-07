import MainLayout from "../layouts/MainLayout";

function Projects() {

  const projects = [
    {
      name: "Website Redesign",
      description: "Update landing page and dashboard UI"
    },
    {
      name: "Mobile App",
      description: "Build task management mobile app"
    }
  ];

  return (
    <MainLayout>

      <h1 className="text-3xl font-semibold mb-6">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-5">

        {projects.map((project) => (
          <div
            key={project.name}
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