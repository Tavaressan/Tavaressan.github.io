import Image from "next/image";
import {
  aboutIntro,
  academicEducation,
  experience,
  extensionCourses,
  languages,
} from "@/content/experience";
import { site } from "@/content/site";
import { CONTENT_REQUIRED } from "@/content/placeholders";
import "./track-record.css";

/** /about: linha do tempo concisa, do mais recente para o mais antigo; formação, cursos e idiomas */
export function TrackRecord() {
  return (
    <section id="about" aria-labelledby="page-title" className="about pad-x env-paper" data-env="paper">
      <div className="wrap about__inner">
        <div className="g12 about__top">
          <div className="heading about__title">
            <p className="t-overline ink-2">Track record · Profile</p>
            <h1 id="page-title" tabIndex={-1} className="t-display2 page-title">
              {site.name}
            </h1>
            <p className="t-bodysm ink-2" style={{ marginTop: "8px" }}>
              {site.course} · {site.institution} ({site.coursePeriod})
            </p>
          </div>

          {/* 1. Chibi na esquerda (cols 1-2) */}
          <figure className="about__chibi">
            <Image
              src="/media/portrait.png"
              alt="Chibi illustration of Vitor Tavares tipping his hat"
              width={271}
              height={460}
              priority
              style={{ width: "100%", maxWidth: "150px", height: "auto" }}
            />
          </figure>

          {/* 2. Texto no meio (cols 3-8) */}
          <div className="t-body about__intro">
            {aboutIntro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* 3. Foto à direita (cols 9-12) */}
          <figure className="about__portrait">
            <Image
              src="/media/portrait.jpeg"
              alt="Professional portrait of Vitor Tavares Chaves"
              width={960}
              height={1280}
              priority
              sizes="(max-width: 1024px) 240px, 320px"
              style={{ objectFit: "cover", borderRadius: "4px", border: "1px solid var(--rule)" }}
            />
            <figcaption className="t-overline ink-2">{site.name}</figcaption>
          </figure>
        </div>

        {/* 1. Trajetória Profissional e Projetos Acadêmicos (Requisitos 6 e 9) */}
        <div>
          <div className="heading" style={{ marginBottom: "24px" }}>
            <p className="t-overline ink-2">Experience & Projects</p>
            <h2 className="t-title2">Professional roles and academic milestones</h2>
          </div>
          <div className="brow g12 col-heads t-overline ink-2" aria-hidden="true">
            <span className="tl__period">Period</span>
            <span className="tl__who">Role · organisation</span>
            <span className="tl__systems">Systems</span>
            <span className="tl__contribution">Contribution</span>
          </div>
          <ol className="list-reset">
            {experience.map((e) => (
              <li key={e.period + (e.project ?? e.organization)} className="brow g12">
                <p className="t-meta tl__period">
                  <time>{e.period}</time>
                </p>
                <div className="tl__who">
                  <h3 className="t-title3">{e.project ?? e.organization}</h3>
                  <p className="t-bodysm ink-2">{e.project ? `${e.organization} · ${e.role}` : e.role}</p>
                </div>
                <div className="tl__systems">
                  <p className="t-body">{e.context}</p>
                  {e.systems.length > 0 && <p className="t-meta ink-2">{e.systems.join(" · ")}</p>}
                </div>
                <p className="t-body tl__contribution">{e.contribution || CONTENT_REQUIRED}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* 2. Formação Acadêmica (Requisito 5) */}
        <div>
          <div className="heading" style={{ marginBottom: "24px" }}>
            <p className="t-overline ink-2">Academic Background</p>
            <h2 className="t-title2">Higher education and foundational studies</h2>
          </div>
          <div className="brow g12 col-heads t-overline ink-2" aria-hidden="true">
            <span className="tl__period">Period</span>
            <span className="tl__who">Institution</span>
            <span className="tl__systems">Degree & Program</span>
            <span className="tl__contribution">Status</span>
          </div>
          <ol className="list-reset">
            {academicEducation.map((ed) => (
              <li key={ed.institution + ed.period} className="brow g12">
                <p className="t-meta tl__period">
                  <time>{ed.period}</time>
                </p>
                <div className="tl__who">
                  <h3 className="t-title3">{ed.institution}</h3>
                </div>
                <div className="tl__systems">
                  <p className="t-body">{ed.course}</p>
                  <p className="t-meta ink-2">{ed.degree}</p>
                </div>
                <p className="t-body tl__contribution">{ed.status}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* 3. Cursos de Extensão & Certificações (Requisito 7) */}
        <div>
          <div className="heading" style={{ marginBottom: "24px" }}>
            <p className="t-overline ink-2">Extension Courses & Certifications</p>
            <h2 className="t-title2">Specialized training and accredited programs</h2>
          </div>
          <div className="brow g12 col-heads t-overline ink-2" aria-hidden="true">
            <span className="tl__period">Workload · Year</span>
            <span className="tl__who">Course name</span>
            <span className="tl__systems">Institution</span>
            <span className="tl__contribution">Scope & Focus</span>
          </div>
          <ol className="list-reset">
            {extensionCourses.map((c) => (
              <li key={c.name} className="brow g12">
                <p className="t-meta tl__period">
                  <span>{c.workload}</span>
                  <span className="t-meta ink-2" style={{ display: "block" }}>{c.period}</span>
                </p>
                <div className="tl__who">
                  <h3 className="t-title3">{c.name}</h3>
                </div>
                <div className="tl__systems">
                  <p className="t-body">{c.institution}</p>
                  {c.location && <p className="t-meta ink-2">{c.location}</p>}
                </div>
                <p className="t-body tl__contribution">{c.details}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* 4. Idiomas & Proficiência (Requisito 8) */}
        <div>
          <div className="heading" style={{ marginBottom: "24px" }}>
            <p className="t-overline ink-2">Languages</p>
            <h2 className="t-title2">Linguistic proficiency and international communication</h2>
          </div>
          <div className="brow g12 col-heads t-overline ink-2" aria-hidden="true">
            <span className="tl__period">Language</span>
            <span className="tl__who">Proficiency Level</span>
            <span className="tl__contribution" style={{ gridColumn: "6 / span 7" }}>Context & Verification</span>
          </div>
          <ol className="list-reset">
            {languages.map((l) => (
              <li key={l.language} className="brow g12">
                <p className="t-title3 tl__period" style={{ margin: 0 }}>
                  {l.language}
                </p>
                <div className="tl__who">
                  <p className="t-body" style={{ margin: 0, fontWeight: 600 }}>{l.level}</p>
                </div>
                <p className="t-body tl__contribution" style={{ gridColumn: "6 / span 7", margin: 0 }}>
                  {l.details}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

