import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { currentProjectAtom, projects } from "./Projects";
import { useForm, ValidationError } from "@formspree/react";
import { useScroll } from "@react-three/drei";

const links = [
  {
    icon: "/icons/facebook.png",
    url: "https://www.facebook.com/agabriel.nieve",
    onClick: () =>
      window.open("https://www.facebook.com/agabriel.nieve", "_blank"),
  },
  {
    icon: "/icons/gmail.png",
    url: "",
    onClick: () => openGmail(),
  },
  {
    icon: "/icons/cv.png",
    url: "",
    onClick: () =>
      window.open(
        "https://drive.google.com/file/d/186Cmm38MiFnt77JoBBQisid9zJ4n2Rm6/view?usp=sharing",
        "_blank"
      ),
  },
  {
    icon: "/icons/telephone.png",
    url: "",
    onClick: () => window.open("tel:+639568138851", "_blank"),
  },
];

const openGmail = () => {
  const subject = encodeURIComponent("Contact AG Nieve");

  const sender = encodeURIComponent("sender@yourdomain.com");
  const body = encodeURIComponent("E-mail body");

  const url = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&to=${sender}&body=${body}`;

  window.open(url, "_blank");
};

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
          className="w-[38%] text-lg text-gray-100 mt-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Iam an experienced Full Stack Developer with six years of expertise in
          software development,focusing on both web and mobile applications. My
          passion lies in creating robust, scalable, and user-centric solutions
          that drive business growth and enhance user experiences.
        </motion.p>
        <motion.div
          whileInView={"visible2"}
          className="flex items-center justify-start mt-5 mb-3 gap-x-5"
        >
          {links.map((link, index) => {
            return (
              <motion.button
                initial={{ opacity: 0 }}
                variants={{
                  visible2: {
                    opacity: 1,
                  },
                }}
                transition={{ duration: 1.5, delay: 2.5 + index * 0.5 }}
                key={index}
                onClick={link.onClick}
                className="p-2 bg-white rounded-xl"
              >
                <img src={link.icon} alt="icon" className="w-8 h-8" />
              </motion.button>
            );
          })}
        </motion.div>
        {/* <div>
          <motion.button
            onClick={() => setSection(5)}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="px-8 py-4 mt-16 font-medium text-[#5356FF] bg-[#DFF5FF] rounded-xl hover:shadow-lg"
          >
            Contact Me
          </motion.button>
        </div> */}
      </div>
    </Section>
  );
};

const skills = [
  {
    title: "HTML",
    level: 98,
  },
  {
    title: "CSS",
    level: 92,
  },
  {
    title: "React",
    level: 90,
  },
  {
    title: "Tailwind CSS",
    level: 80,
  },
  {
    title: "Node.js",
    level: 85,
  },
  {
    title: "MongoDB",
    level: 84,
  },
  {
    title: "Rust",
    level: 78,
  },
  {
    title: "PHP",
    level: 93,
  },
  {
    title: "CodeIgniter",
    level: 82,
  },
  {
    title: "Laravel",
    level: 84,
  },
  {
    title: "Linux Administration",
    level: 80,
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
  const [state, handleSubmit] = useForm("mnnalkpw");
  const data = useScroll();

  let curSection = Math.floor(data.scroll.current * data.pages);
  console.log("curSection interface: ", curSection);

  return (
    <Section>
      <div
        className={`flex ${
          curSection >= 3 && menuOpened ? "justify-start" : "justify-end"
        }`}
      >
        <div className="p-5 rounded-xl bg-white w-[40%]">
          <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
            <h1 className="text-2xl text-center text-[#5356FF]">Contact</h1>
            {state.succeeded && (
              <div className="p-3 bg-white rounded-xl">
                <h1 className="text-2xl text-center text-[#5356FF]">
                  Thank you for contacting me!
                </h1>
              </div>
            )}
            <div className="flex flex-col w-full">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                className="p-3 border border-indigo-500 rounded-xl"
              />
              <ValidationError
                className="text-red-500"
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="email"
                className="p-3 border border-indigo-500 rounded-xl"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message">Message</label>
              <textarea
                className="p-3 border border-indigo-500 rounded-xl"
                rows={3}
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500"
              />
            </div>
            <button
              disabled={state.submitting}
              type="submit"
              className="px-8 py-3 text-white bg-indigo-500 rounded-xl"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};
