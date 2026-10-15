import type { AcademicEducation, Experience, ExtensionCourse, LanguageSkill } from "./types";

export const workExperience: Experience[] = [
  {
    period: "Dec 2025 – Present",
    role: "Software Engineering Intern | Full-Stack & IoT",
    organization: "Alfabra Elevadores",
    context: "Real-time elevator telemetry and IoT cloud infrastructure",
    systems: ["ESP32", "C/C++", "ROS2", "Linux", "AWS IoT Core", "MQTT/TLS", "Rust", "Next.js", "Flutter"],
    contribution:
      "Architecting end-to-end IoT telemetry pipelines connecting ESP32 embedded modules to AWS IoT Core for predictive elevator maintenance. Developing full-stack web applications with Next.js frontend and Rust backend services, integrated with agentic AI workflows. Designing secure MQTT/TLS protocols and Flutter mobile apps for field technicians.",
  },
  {
    period: "Aug 2024 – Dec 2024",
    role: "Content Writer & SEO Specialist",
    organization: "PMK Digital Marketing",
    context: "Digital content production, SEO strategy, and institutional digital media",
    systems: ["WordPress", "SEO", "HTML5", "Email Marketing"],
    contribution:
      "Produced SEO-optimized technical and institutional web content for three portals with daily deliverables. Built institutional email marketing campaigns and digital publications using semantic HTML and visual authoring tools.",
  },
  {
    period: "Aug 2023 – Aug 2024",
    role: "Trilingual Customer Support Consultant (FR / EN / PT)",
    organization: "Apex America Brasil (Luxottica)",
    context: "International customer experience and logistics operations for Europe",
    systems: ["Microsoft Dynamics 365", "French", "English", "Portuguese"],
    contribution:
      "Delivered technical and logistical support for Luxottica global brands (Ray-Ban, Oakley) across France, Belgium, and Switzerland. Managed enterprise customer cases and workflows in Dynamics 365 while maintaining strict SLA compliance.",
  },
  {
    period: "Jan 2023 – Aug 2023",
    role: "Bilingual Customer Relationship Specialist (EN / PT)",
    organization: "Atento Brasil",
    context: "Enterprise customer service and omnichannel communications",
    systems: ["Salesforce CRM", "English", "Portuguese"],
    contribution:
      "Provided bilingual technical and customer relationship assistance via phone and email channels, operating enterprise Salesforce CRM queues.",
  },
  {
    period: "Mar 2018 – Sep 2019",
    role: "Administrative Assistant",
    organization: "Sabesp",
    context: "State water and sanitation utility serving 28M+ customers",
    systems: ["Corporate ERP", "Excel"],
    contribution:
      "Operated corporate utility systems, coordinated field service orders, handled customer verification calls, and managed administrative records in a large-scale regulated public company.",
  },
];

// Trilha acadêmica do 1º ao 6º semestre na Fatec Itaquera
export const academicExperience: Experience[] = [
  {
    period: "1st semester",
    role: "Academic Project",
    organization: "Fatec Itaquera",
    project: "Rosary Store",
    context: "Web catalog and e-commerce platform for devotional products",
    systems: ["HTML5", "CSS3", "JavaScript"],
    contribution:
      "Created the responsive user interface, semantic product catalog layout, and client-side browsing functionality.",
  },
  {
    period: "2nd semester",
    role: "Academic Project",
    organization: "Fatec Itaquera",
    project: "Fluxora Maternal",
    context: "Management web application for maternal health and clinical nutrition",
    systems: ["React", "PHP", "MySQL", "CSS3"],
    contribution:
      "Full-stack development in an agile Scrum squad: designed relational database schema, implemented patient appointment scheduling flows, and integrated PHP backend with React UI.",
  },
  {
    period: "3rd semester",
    role: "Academic Project",
    organization: "Fatec Itaquera",
    project: "GT Solar",
    context: "Backend architecture for photovoltaic solar plant monitoring",
    systems: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "Swagger/OpenAPI"],
    contribution:
      "Architected core REST APIs for solar plant telemetry, business validation rules, Flyway database migrations, and OpenAPI documentation.",
  },
  {
    period: "4th semester",
    role: "Academic Project",
    organization: "Fatec Itaquera",
    project: "Kazu Tattoo",
    context: "Complete web platform for tattoo studio booking and artist portfolios",
    systems: ["Java 21", "Spring Boot", "Vue.js", "MySQL", "MongoDB"],
    contribution:
      "Implemented a hybrid persistence layer (MySQL for scheduling and accounts, MongoDB for rich media galleries), secure authentication, and interactive Vue components.",
  },
  {
    period: "5th semester",
    role: "Academic Project",
    organization: "Fatec Itaquera",
    project: "UP Barber",
    context: "Barbershop management, mobile booking, and instant PIX payment",
    systems: ["Java 21", "Spring Boot", "Next.js", "React Native", "PostgreSQL", "Docker Compose", "EFI Pay SDK"],
    contribution:
      "Integrated instant PIX payment processing via EFI Pay SDK, implemented backend scheduling logic in Spring Boot, and connected the React Native mobile client to containerized microservices.",
  },
  {
    period: "6th semester",
    role: "Integrator Project (In progress)",
    organization: "Fatec Itaquera",
    project: "Cafey",
    context: "Physical IoT appliance system: electronics, mechanical 3D CAD, firmware and cloud",
    systems: ["KiCad", "FreeCAD", "ESP32", "ESP-IDF", "FreeRTOS", "MQTT/TLS", "AWS IoT Core", "Kotlin", "Spring Boot", "PostgreSQL"],
    contribution:
      "Designed external mechanical enclosure in FreeCAD, validated electrical schematic in KiCad, wrote ESP-IDF active object firmware over FreeRTOS, and built AWS IoT Core MQTT ingestion.",
  },
];

export const experience: Experience[] = [
  ...workExperience,
  ...academicExperience.map((e, i) => ({ ...e, period: `0${i + 1} · ${e.period}` })).reverse(),
];

export const academicEducation: AcademicEducation[] = [
  {
    institution: "Fatec Itaquera (Faculdade de Tecnologia de São Paulo)",
    degree: "Technological Degree (CST)",
    course: "Multiplatform Software Development (DSM)",
    period: "Feb 2024 – Dec 2026",
    status: "In progress (6th semester)",
  },
  {
    institution: "Centro de Estudo de Línguas (CEL) - Fadlo Haidar",
    degree: "Foreign Language Program",
    course: "French Language & Culture Studies",
    period: "Jan 2020 – Nov 2022",
    status: "Completed (3-year program)",
  },
  {
    institution: "ETEC - Escola Técnica Estadual de São Paulo",
    degree: "High School Diploma",
    course: "General Studies & Secondary Education",
    period: "Feb 2019 – Nov 2020",
    status: "Completed",
  },
  {
    institution: "Evolutime Itaquera",
    degree: "Vocational Certificate",
    course: "Applied Computer Science & IT Fundamentals",
    period: "Feb 2018 – Nov 2019",
    status: "Completed",
  },
  {
    institution: "SENAI São Paulo",
    degree: "Industrial Apprenticeship Certificate (CAI)",
    course: "Business Administration & Corporate Operations",
    period: "Mar 2018 – Sep 2019",
    status: "Completed",
  },
];

export const extensionCourses: ExtensionCourse[] = [
  {
    name: "Santander Bootcamp 2024 - Java Backend Development",
    institution: "Digital Innovation One (DIO)",
    workload: "80 hours",
    period: "2024",
    location: "Online",
    details: "Spring Boot, Java 21, REST APIs, design patterns, and cloud deployment pipelines.",
  },
  {
    name: "GFT Bootcamp - Java Software Development",
    institution: "Digital Innovation One (DIO)",
    workload: "70 hours",
    period: "2024",
    location: "Online",
    details: "Clean architecture, Java microservices, and relational database persistence.",
  },
  {
    name: "IoT Application Development with the ESP32 Using ESP-IDF",
    institution: "Technical Specialization",
    workload: "40 hours",
    period: "2024",
    location: "Online",
    details: "C/C++ firmware engineering, FreeRTOS tasks, MQTT over TLS, and network stack protocols.",
  },
  {
    name: "AWS Academy Graduate - Machine Learning Foundations",
    institution: "AWS Academy",
    workload: "40 hours",
    period: "2024",
    location: "Online",
    details: "AWS cloud computing fundamentals, machine learning pipelines, and inference services.",
  },
  {
    name: "FCE Cambridge (First Certificate in English)",
    institution: "Cambridge Assessment English",
    workload: "International Exam",
    period: "B2 First Certificate",
    location: "São Paulo, Brazil",
    details: "Official international English language proficiency certification at CEFR Level B2.",
  },
];

export const languages: LanguageSkill[] = [
  { language: "Portuguese", level: "Native", details: "Native tongue, technical authoring, and corporate communication." },
  { language: "English", level: "Fluent / Professional", details: "Cambridge FCE (CEFR B2) certified. Bilingual engineering and cross-border client operations." },
  { language: "French", level: "Fluent / Professional", details: "3-year CEL diploma. Professional customer operations across France, Belgium, and Switzerland." },
  { language: "Spanish", level: "Advanced", details: "Professional verbal and written communication with Latin American teams and clients." },
  { language: "Mandarin Chinese", level: "Elementary", details: "Active foundational study focused on international hardware and technology markets." },
  { language: "Japanese", level: "Elementary", details: "Foundational study of writing systems (Kana/Kanji) and conversational fundamentals." },
];

// Home: resumo executivo que aponta para /about
export const trackTeaser = [
  { organization: "Alfabra Elevadores", summary: "Software Engineering Intern · IoT, Cloud & Full-Stack" },
  { organization: "Fatec Itaquera", summary: "Multiplatform Software Development · Semesters 01 to 06" },
  { organization: "International Operations", summary: "Trilingual Support (FR/EN/PT) · Apex America & Atento" },
];

export const aboutIntro = [
  "I am a Software Developer working on IoT and cloud systems at Alfabra Elevadores: from firmware at the edge to cloud message pipelines and user interfaces.",
  "I am currently in the 6th semester of Multiplatform Software Development at Fatec Itaquera, graduating in December 2026.",
  "Trilingual in Portuguese, English, and French, with professional experience in international customer operations and distributed systems.",
];
