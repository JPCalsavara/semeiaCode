import NavBar from "@/components/NavBar";
import Presentation from "@/components/Presentation";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import College from "@/components/College";
import Testimonials from "@/components/Testimonials";
import Cohorts from "@/components/Cohorts";
import Contact from "@/components/Contact";
import type {
  ActivityCard,
  ExperienceCard,
  MemberHighlight,
  NavTopic,
  TestimonialCard,
} from "@/data/portfolioData";

type AppProps = {
  navTopics: NavTopic[];
  activities: ActivityCard[];
  experiences: ExperienceCard[];
  members: MemberHighlight[];
  testimonials: TestimonialCard[];
  cohorts: string[];
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
};

export default function App({
  navTopics,
  activities,
  experiences,
  members,
  testimonials,
  cohorts,
  social,
}: AppProps) {
  return (
    <>
      <NavBar navTopics={navTopics} />
      <main>
        <Presentation />
        <Experience activities={activities} />
        <Hero experiences={experiences} />
        <College members={members} />
        <Testimonials testimonials={testimonials} />
        <Contact social={social} />
        <Cohorts cohorts={cohorts} />
      </main>
    </>
  );
}
