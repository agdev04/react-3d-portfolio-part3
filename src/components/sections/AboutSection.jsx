import Section from "./Section";
import { motion } from "framer-motion";

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

export default function AboutSection() {
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
      </div>
    </Section>
  );
}
