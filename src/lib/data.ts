export type Category = "AI & ML" | "Backend" | "Cloud & DevOps";

export type Project = {
  index: string;
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  repo: string;
  size: "wide" | "regular";
  art: "voice" | "agents" | "chat" | "cli" | "docker" | "cloud" | "api";
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "voice-doc-assistant",
    name: "Voice Document Assistant",
    category: "AI & ML",
    tagline: "Retrieval-augmented voice interface for your documents",
    description:
      "An AI voice assistant that turns natural speech into grounded answers over your own document set. It streams audio in real time, retrieves the most relevant context with semantic search, and generates cited responses through a RAG pipeline — with an evaluation harness to keep answer quality measurable.",
    highlights: [
      "RAG architecture",
      "Semantic search",
      "Real-time audio streaming",
      "AI evaluation framework",
    ],
    tags: ["Python", "LangChain", "OpenAI", "Vector DB", "FastAPI"],
    repo: "https://github.com/cyril-pierro/voice-doc-assistant",
    size: "wide",
    art: "voice",
  },
  {
    index: "02",
    slug: "multi-agent-system",
    name: "Multi-Agent System",
    category: "AI & ML",
    tagline: "Task decomposition and real-time agent orchestration",
    description:
      "A multi-agent platform that decomposes complex goals into sub-tasks and coordinates specialised agents over real-time WebSocket channels. Built on async processing primitives so agents can work concurrently, report progress, and hand results back to the orchestrator.",
    highlights: ["Agent orchestration", "Task decomposition", "Real-time coordination"],
    tags: ["Python", "FastAPI", "WebSockets", "LangChain", "Async"],
    repo: "https://github.com/cyril-pierro/multi-agent-system",
    size: "regular",
    art: "agents",
  },
  {
    index: "03",
    slug: "chat_app_system",
    name: "Real-Time Chat Platform",
    category: "Backend",
    tagline: "Scalable messaging with WebSocket transport",
    description:
      "An enterprise-grade messaging platform built around WebSocket communication, secure user authentication, and a stateless service layer that scales horizontally. Presence, delivery, and history are handled with Redis and a normalised PostgreSQL schema.",
    highlights: ["WebSocket transport", "Auth & sessions", "Horizontally scalable"],
    tags: ["Python", "FastAPI", "WebSockets", "PostgreSQL", "Redis"],
    repo: "https://github.com/cyril-pierro/chat_app_system",
    size: "regular",
    art: "chat",
  },
  {
    index: "04",
    slug: "sea-cli",
    name: "SEA-CLI",
    category: "Backend",
    tagline: "Structured Entropy Analysis from the command line",
    description:
      "A command-line tool for running Structured Entropy Analysis over molecular dynamics simulation data, driven by declarative YAML configuration. Designed for reproducible scientific workflows with clean, scriptable output.",
    highlights: ["YAML configuration", "Reproducible analysis", "Scriptable CLI"],
    tags: ["Python", "YAML", "Molecular Dynamics", "CLI"],
    repo: "https://github.com/cyril-pierro/sea-cli",
    size: "regular",
    art: "cli",
  },
  {
    index: "05",
    slug: "dim",
    name: "DIM — Docker Image Migrator",
    category: "Cloud & DevOps",
    tagline: "Move container images between environments",
    description:
      "An automation utility that migrates Docker images across registries and environments with minimal downtime. Built to remove the manual, error-prone steps from release promotion and keep pipelines reproducible.",
    highlights: ["Zero-downtime migration", "Pipeline automation", "Registry agnostic"],
    tags: ["Bash", "Docker", "Shell", "DevOps"],
    repo: "https://github.com/cyril-pierro/dim",
    size: "regular",
    art: "docker",
  },
  {
    index: "06",
    slug: "aws-resources-provisioning",
    name: "AWS Infrastructure Provisioning",
    category: "Cloud & DevOps",
    tagline: "Infrastructure as Code for repeatable cloud",
    description:
      "A Terraform-driven provisioning toolkit for standing up AWS environments — compute, storage, networking, and IAM — as versioned, reviewable infrastructure. Environments become reproducible instead of hand-built.",
    highlights: ["Infrastructure as Code", "Reusable modules", "Cloud governance"],
    tags: ["Terraform", "AWS", "CloudFormation", "IaC"],
    repo: "https://github.com/cyril-pierro/AWS-Resources-Provisioning",
    size: "regular",
    art: "cloud",
  },
  {
    index: "07",
    slug: "rest-api",
    name: "Book Management REST API",
    category: "Backend",
    tagline: "Production-ready CRUD service in Go",
    description:
      "A production-ready RESTful API for book management with full CRUD operations, authentication, and PostgreSQL persistence. Written in Go with the Gin framework for a small, fast, dependency-light service.",
    highlights: ["RESTful design", "Authentication", "PostgreSQL persistence"],
    tags: ["Go", "Gin", "PostgreSQL", "REST"],
    repo: "https://github.com/cyril-pierro/Rest_api",
    size: "regular",
    art: "api",
  },
];

export const categories = ["All", "AI & ML", "Backend", "Cloud & DevOps"] as const;

export type Publication = {
  title: string;
  date: string;
  dateTime: string;
  publisher: string;
  link: string;
  summary: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    title:
      "Structured Entropy Analysis (SEA): A computational framework for latent biomolecular insights beyond conventional descriptors in molecular dynamics simulations",
    date: "27 Feb 2026",
    dateTime: "2026-02-27",
    publisher: "Elsevier",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1093326326000641",
    summary:
      "Introduces Structured Entropy Analysis, a computational framework that surfaces latent biomolecular insights from molecular dynamics simulations beyond conventional descriptors.",
    tags: ["Molecular dynamics", "Entropy analysis", "Biomolecular simulation", "Computational framework"],
  },
];

export type LinkedInPost = {
  title: string;
  summary: string;
  tags: string[];
  date: string;
  dateTime: string;
  url: string;
  embedUrl?: string;
};

export const linkedinPosts: LinkedInPost[] = [
  {
    title: "Independent Multi-Database Backup Pipeline with Apache Airflow",
    summary:
      "A fault-tolerant Airflow DAG orchestrating parallel backups across three database servers — SSHOperator isolation, branch-based alerting, and consolidated success reporting.",
    tags: ["Apache Airflow", "Data pipelines", "SSHOperator", "Python"],
    date: "20 Oct 2026",
    dateTime: "2026-10-20",
    url: "https://www.linkedin.com/posts/per-badasu-3380a9247_dataengineering-apacheairflow-python-share-7518305155553873921-qjkr/",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7518305155553873921",
  },
  {
    title: "Voice-Native AI Document Assistant",
    summary:
      "A production-ready, voice-first RAG app built with FastAPI, WebSockets, and Gemini Live — bidirectional audio streaming, pgvector retrieval, and MLOps observability.",
    tags: ["FastAPI", "WebSockets", "RAG", "Gemini Live"],
    date: "9 Sep 2026",
    dateTime: "2026-09-09",
    url: "https://www.linkedin.com/posts/per-badasu-3380a9247_ai-generativeai-mlops-activity-7503579139711508480-sqQ1",
  },
  {
    title: "Real-Time Streaming Multi-Agent System",
    summary:
      "A streaming multi-agent platform built to defeat LLM latency, with isolated multiprocessing workers, async Redis state, and a Planner → Executor → Aggregator workflow.",
    tags: ["Multi-agent", "Async", "Redis", "FastAPI"],
    date: "22 Oct 2025",
    dateTime: "2025-10-22",
    url: "https://www.linkedin.com/posts/per-badasu-3380a9247_python-fastapi-websockets-activity-7386785544346705920-FB3M",
  },
  {
    title: "Adaptive Bitrate (ABR) Streaming Backend",
    summary:
      "An HLS streaming backend that serves manifests and media segments dynamically, adapting video quality to network conditions for a smoother viewing experience.",
    tags: ["HLS", "Streaming", "FastAPI"],
    date: "21 Oct 2025",
    dateTime: "2025-10-21",
    url: "https://www.linkedin.com/posts/per-badasu-3380a9247_fastapi-hls-abr-activity-7386411144871305216-rGLB",
  },
  {
    title: "Grafana, Prometheus & Alertmanager in Production",
    summary:
      "Downtime strikes fast — a bulletproof on-prem monitoring stack with Grafana, Prometheus, and Alertmanager is what keeps DevOps and SRE teams ahead of it.",
    tags: ["Grafana", "Prometheus", "Alertmanager", "SRE"],
    date: "20 May 2024",
    dateTime: "2024-05-20",
    url: "https://www.linkedin.com/posts/per-badasu-3380a9247_devops-sre-monitoring-ugcPost-7198256116865097728-0Qhk/",
  },
  {
    title: "Selfie Voting System",
    summary:
      "A Valentine's Day voting app with real-time camera capture, authentication, live voting, and analytics — built on Next.js, Prisma, Material UI, and PostgreSQL.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    date: "14 Feb 2025",
    dateTime: "2025-02-14",
    url: "https://www.linkedin.com/posts/per-badasu-3380a9247_for-valentines-day-i-developed-a-selfie-ugcPost-7296246692901748736-MQMK/",
  },
];

export function withCampaign(url: string) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=portfolio&utm_medium=website&utm_campaign=featured_linkedin`;
}

export type Skill = {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  size: "wide" | "regular" | "full";
};

export const skills: Skill[] = [
  {
    title: "Backend & Distributed Systems",
    description:
      "RESTful APIs and microservices designed for scale — event-driven flows, async processing, and hardened auth.",
    tags: [
      "Python",
      "FastAPI",
      "Django REST",
      "Node.js",
      "Express",
      "Go",
      "Gin",
      "GraphQL",
      "OAuth 2.0 / JWT",
      "Celery",
    ],
    icon: "server",
    size: "wide",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Production LLM applications: retrieval, orchestration, and the evaluation layer that keeps them honest.",
    tags: [
      "LLM apps",
      "RAG",
      "Multi-agent systems",
      "Vector embeddings",
      "Semantic search",
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
    ],
    icon: "spark",
    size: "wide",
  },
  {
    title: "Frontend & Mobile",
    description:
      "Interfaces that feel fast and considered, from server-rendered web apps to cross-platform mobile.",
    tags: ["React", "Next.js", "TypeScript", "React Native", "Hooks & state", "Accessibility"],
    icon: "layout",
    size: "regular",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Cloud-native delivery with containerisation and infrastructure defined entirely as code.",
    tags: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "IAM",
      "Cloud governance",
    ],
    icon: "cloud",
    size: "regular",
  },
  {
    title: "DevSecOps & Automation",
    description:
      "Secure pipelines from commit to production, with the observability to know what shipped and how it behaves.",
    tags: [
      "CI/CD",
      "Git",
      "GitHub Actions",
      "SAST / DAST",
      "SonarQube",
      "OWASP ZAP",
      "Prometheus",
      "Grafana",
      "SigNoz",
      "Alertmanager",
      "Airflow",
      "n8n",
      "Shell",
    ],
    icon: "shield",
    size: "regular",
  },
  {
    title: "Data & Storage",
    description:
      "Schema design, optimisation, and the messaging layer that moves data reliably between services.",
    tags: [
      "PostgreSQL",
      "pgvector",
      "Neo4j",
      "Redis",
      "Apache Kafka",
      "RabbitMQ",
      "Firebase",
      "Cloud Firestore",
      "ETL",
    ],
    icon: "database",
    size: "full",
  },
];

export const principles = [
  {
    num: "01",
    title: "Design for failure",
    text: "Systems that assume things will break — retries, idempotency, and graceful degradation by default.",
  },
  {
    num: "02",
    title: "Ship in small increments",
    text: "Small, reviewable changes and automated delivery beat one heroic release every quarter.",
  },
  {
    num: "03",
    title: "Observability first",
    text: "If it can't be measured, traced, and alerted on, it isn't finished — it's just deployed.",
  },
  {
    num: "04",
    title: "Secure by default",
    text: "Security is a property of the pipeline, not a review that happens at the end.",
  },
];

export const focus = [
  "Architecting and shipping production-grade AI applications and intelligent systems",
  "Advancing expertise in distributed systems design and microservices architecture",
  "Building secure, automated CI/CD pipelines and cloud-native deployment strategies",
  "Deepening machine learning operations (MLOps) and AI evaluation frameworks",
  "Exploring the intersection of backend engineering, AI, and cloud infrastructure",
];

export const stats = [
  { value: "6+", label: "Years shipping" },
  { value: "7", label: "Featured builds" },
  { value: "3", label: "Core disciplines" },
  { value: "20+", label: "Technologies" },
];

export const marqueeItems = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "FastAPI",
  "Django",
  "Go",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Terraform",
  "LangChain",
  "PyTorch",
  "Kafka",
  "GraphQL",
];

export const links = {
  github: "https://github.com/cyril-pierro",
  linkedin: "https://www.linkedin.com/in/per-badasu-3380a9247",
  email: "peter.badasu10@gmail.com",
};

export const GITHUB_USERNAME = "cyril-pierro";
