import {
  activitiesData,
  cohortsData,
  experiencesData,
  membersHighlights,
  navTopics,
  projectsData,
  skillsData,
  socialLinks,
  testimonialsData,
  type SkillCard,
} from "@/data/portfolioData";

export type TechnologyTagMap = Record<string, { category: string }>;

export type LegendItem = {
  label: string;
  color: string;
  type: string;
};

const LEGEND: LegendItem[] = [
  { label: "Frontend", color: "#84cc16", type: "frontend" },
  { label: "Backend", color: "#22c55e", type: "backend" },
  { label: "Database", color: "#16a34a", type: "database" },
  { label: "DevOps", color: "#4d7c0f", type: "devops" },
  { label: "Soft Skills", color: "#65a30d", type: "softskill" },
  { label: "Geral", color: "#3f6212", type: "all" },
];

export async function getPortfolioProjects() {
  return projectsData;
}

export async function getPortfolioExperiences() {
  return experiencesData;
}

export async function getPortfolioTechnologies() {
  return skillsData;
}

export async function getHomeActivities() {
  return activitiesData;
}

export async function getMemberHighlights() {
  return membersHighlights;
}

export async function getTestimonials() {
  return testimonialsData;
}

export async function getCohorts() {
  return cohortsData;
}

export async function getNavigationTopics() {
  return navTopics;
}

export async function getSocialLinks() {
  return socialLinks;
}

export function buildTechnologyTagMap(
  technologies: SkillCard[],
): TechnologyTagMap {
  return technologies.reduce<TechnologyTagMap>((acc, technology) => {
    acc[technology.id] = { category: technology.type };
    return acc;
  }, {});
}

export function buildLegendItems(technologies: SkillCard[]): LegendItem[] {
  const types = new Set<string>(
    technologies.map((technology) => technology.type),
  );
  return LEGEND.filter((item) => types.has(item.type));
}
