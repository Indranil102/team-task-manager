

export default function ProjectCard({ name, description, progress }) {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Progress: {progress}%</p>
    </div>
  );
}
