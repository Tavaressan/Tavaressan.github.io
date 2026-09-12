import Link from "next/link";

import { projects } from "@/data/projects";

// Pagina provisoria: existe so para validar o export estatico e o deploy.
// O conteudo real e a UI vem depois do aceite do design.
export default function Home() {
  return (
    <main>
      <h1>Vitor Tavares</h1>
      <p>Portfolio under construction.</p>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
