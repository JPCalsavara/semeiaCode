import App from "@/components/App";
import {
  getCohorts,
  getHomeActivities,
  getMemberHighlights,
  getNavigationTopics,
  getPortfolioExperiences,
  getSocialLinks,
  getTestimonials,
} from "@/lib/portfolio";

export default async function HomePage() {
  const [
    experiences,
    activities,
    members,
    testimonials,
    cohorts,
    navTopics,
    social,
  ] = await Promise.all([
    getPortfolioExperiences(),
    getHomeActivities(),
    getMemberHighlights(),
    getTestimonials(),
    getCohorts(),
    getNavigationTopics(),
    getSocialLinks(),
  ]);

  return (
    <App
      navTopics={navTopics}
      activities={activities}
      experiences={experiences}
      members={members}
      testimonials={testimonials}
      cohorts={cohorts}
      social={social}
    />
  );
}
