import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { currentProjectAtom, projects } from "./Projects";

const Section = ({ children }) => {
  return (
    <motion.section
      className={`min-h-screen w-screen p-8 max-w-7xl mx-auto flex flex-col item-start justify-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection, section, menuOpened } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillSection />
      <ProjectSection />
      <ContactSection section={section} menuOpened={menuOpened} />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;

  return (
    <Section>
      <div>
        <h1 className="text-5xl text-white">
          Hi, I'm <span className="font-bold">AG Nieve</span>
        </h1>
        <motion.p
          className="w-[40%] text-lg text-gray-100 mt-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Iam an experienced Full Stack Developer with six years of expertise in
          software development,focusing on both web and mobile applications. My
          passion lies in creating robust,scalable,and user-centric solutions
          that drive business growth and enhance user experiences.
        </motion.p>
        <div>
          <motion.button
            onClick={() => setSection(3)}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="px-8 py-4 mt-16 font-medium text-[#5356FF] bg-[#DFF5FF] rounded-xl hover:shadow-lg"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "React",
    level: 90,
  },
  {
    title: "Tailwind CSS",
    level: 80,
  },
  {
    title: "Three.js",
    level: 70,
  },
  {
    title: "Node.js",
    level: 60,
  },
  {
    title: "MongoDB",
    level: 50,
  },
];

const SkillSection = () => {
  return (
    <Section>
      <motion.div className="" whileInView={"visible"}>
        <h1 className="mb-3 text-3xl text-white">Skills</h1>
        {skills.map((skill, index) => {
          return (
            <div className="w-64 mb-3" key={index}>
              <motion.h3
                className="text-white"
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                  },
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                }}
                transition={{ duration: 1, delay: 1 + index * 0.2 }}
              >
                {skill.title}
              </motion.h3>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <motion.div
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                  className="h-2 bg-[#5356FF] rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></motion.div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </Section>
  );
};

const ProjectSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  console.log("currentProject", currentProject);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex items-end justify-center w-full gap-8 mt-8 h-[70vh]">
        <div className="flex items-center gap-x-10">
          <button
            className="flex items-center transition-colors hover:text-[#5356FF]"
            onClick={previousProject}
          >
            <TiChevronLeft size={32} />
            <h4>Prev</h4>
          </button>
          <h2 className="text-4xl font-medium">Projects</h2>
          <button
            className="flex items-center transition-colors hover:text-[#5356FF]"
            onClick={nextProject}
          >
            <h4>Next</h4>
            <TiChevronRight size={32} />
          </button>
        </div>
      </div>
    </Section>
  );
};

const ContactSection = (props) => {
  const { section, menuOpened } = props;

  return (
    <Section>
      <div
        className={`flex ${
          section >= 3 && menuOpened ? "justify-start" : "justify-end"
        }`}
      >
        <div className="p-5 rounded-xl bg-white w-[40%]">
          <form className="flex flex-col gap-y-3">
            <h1 className="text-2xl text-center text-[#5356FF]">Contact</h1>

            <div className="flex flex-col w-full">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                className="p-3 border border-indigo-500 rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                className="p-3 border border-indigo-500 rounded-xl"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message">Message</label>
              <textarea
                className="p-3 border border-indigo-500 rounded-xl"
                rows={3}
              />
            </div>
            <button className="px-8 py-3 text-white bg-indigo-500 rounded-xl">
              Send
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};
