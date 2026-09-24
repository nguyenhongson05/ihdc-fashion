import { projects } from '../data/homeData'

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <section className="projects section page-shell" id="du-an"><div className="section-heading split-heading"><div><p className="eyebrow">06 · Dự án & lookbook</p><h2>Những bản sắc<br />đã được hiện thực.</h2></div><a className="text-link" href="#lien-he">Cùng IHDC tạo bản sắc của bạn <span aria-hidden="true">↗</span></a></div><div className="projects-grid"><article className="project-feature"><img src={featuredProject.image} alt={featuredProject.title} style={{ objectPosition: featuredProject.position }} /><div className="image-veil"></div><div className="project-copy"><p>{featuredProject.eyebrow}</p><h3>{featuredProject.title}</h3><span>{featuredProject.copy}</span></div></article>{otherProjects.map((project, index) => <article className="project-card" key={project.title}><img src={project.image} alt={project.title} style={{ objectPosition: project.position }} /><div><p>0{index + 2} · {project.eyebrow}</p><h3>{project.title}</h3><span>{project.copy}</span></div></article>)}</div></section>
  )
}
