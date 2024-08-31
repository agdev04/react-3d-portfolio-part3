import Section from "./Section";
import { motion } from "framer-motion";

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

export default function SkillSection() {
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
}
