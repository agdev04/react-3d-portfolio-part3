import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";

export default function Interface(props) {
  const { setSection, section, menuOpened } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillSection />
      <ProjectSection />
      <ContactSection section={section} menuOpened={menuOpened} />
    </div>
  );
}
