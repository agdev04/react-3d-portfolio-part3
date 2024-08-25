import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Digos Website",
    url: "https://www.digoscity.gov.ph/",
    image: "/projects/digos.png",
    description: "The Local Government Website of Digos City",
    company: "ICT Office",
  },
  {
    title: "GPA Rebates",
    url: "https://gparebates.com",
    image: "/projects/gpa.png",
    description:
      "GPA Rebates is a comprehensive online platform designed to connect consumers with exciting rebate offers in Guam. By providing a centralized hub for all things rebates, gparebates aims to help residents and visitors save money on their purchases while supporting local businesses.",
    company: "XTendly",
  },
  {
    title: "Xffiliate",
    url: "https://www.xffiliate.com",
    image: "/projects/xffiliate.png",
    description:
      "Xffiliate is a web-based application designed to streamline the affiliate marketing process for both affiliates and merchants. It provides a centralized platform for managing affiliate programs, tracking performance, and facilitating payments.",
    company: "XTendly",
  },
  {
    title: "Hybrid AG",
    url: "https://www.hybridag.com.au",
    image: "/projects/hybrid.png",
    description:
      "HybridAg is a web application designed to assist farmers in improving soil health and crop yields through accurate soil testing. By providing farmers with real-time data and personalized recommendations, HybridAg aims to revolutionize agricultural practices and promote sustainable farming.",
    company: "Castle Digital",
  },
  {
    title: "Sargood",
    url: "https://bookings.sargoodoncollaroy.com/",
    image: "/projects/sargood.png",
    description:
      "Sargood Collaroy Booking System is a web-based application designed to streamline the booking process for guests at Sargood Collaroy. By providing a user-friendly interface and efficient booking management tools, the system aims to enhance the overall guest experience and improve operational efficiency for the hotel.",
    company: "Castle Digital",
  },
  {
    title: "Whatkey",
    url: "https://whatkey.io",
    image: "/projects/whatkey.png",
    description:
      "WhatKey is a specialized image recognition AI application designed to accurately identify and classify keys based on their unique features. By leveraging advanced machine learning algorithms, WhatKey can provide a reliable and efficient solution for key management, security, and access control.",
    company: "Castle Digital",
  },
  {
    title: "Olympus Insights",
    url: "https://olympusinsights.io/",
    image: "/projects/lms.png",
    description:
      "Oli is a decentralized learning management system (LMS) built on the Olympusinsights blockchain platform. It aims to revolutionize online education by leveraging the power of cryptocurrency and blockchain technology to create a secure, transparent, and equitable learning environment.",
    company: "Castle Digital",
  },
  {
    title: "Keen2work",
    url: "https://www.k2w.com.au/",
    image: "/projects/keen2work.png",
    description:
      "Keen2Work is a cross-based platform designed to connect job seekers with potential employers in a streamlined and efficient manner. By providing a user-friendly interface and advanced search features, Keen2Work aims to help individuals find fulfilling career opportunities and businesses recruit top talent.",
    company: "Castle Digital",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.2 : 0.09);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[10.5, 8.5]} />
        <meshBasicMaterial color={"#000"} transparent opacity={0.8} />
      </mesh>
      <Image
        scale={[7, 4.3, 1]}
        url={project.image}
        toneMapped={false}
        position-y={2}
      />
      <Text
        maxWidth={8}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.6}
        position={[-4, -0.7, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={8}
        anchorX={"right"}
        anchorY={"top"}
        fontSize={0.3}
        position={[4, -0.7, 0]}
      >
        {project.company.toUpperCase()}
      </Text>
      <Text
        maxWidth={8}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.3}
        position={[-4, -1.4, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = (props) => {
  const { menuOpened, section } = props;

  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group
      position-y={-viewport.height * 2 - (section === 2 ? -1 : 2)}
      position-x={0}
    >
      {projects.map((project, index) => {
        return (
          <motion.group
            key={"project_" + index}
            position={[index * 15.8, 0, 10]}
            animate={{
              x: menuOpened
                ? 6.5 + (index - currentProject) * 12
                : 0 + (index - currentProject) * 12,
              y:
                menuOpened && section !== 2 && section < 3
                  ? -15
                  : currentProject === index
                  ? 0
                  : -0.1,
              z: currentProject === index ? -2 : -3,
              rotateX: currentProject === index ? 0 : -Math.PI / 6,
              rotateZ:
                menuOpened && currentProject === index
                  ? -0.1
                  : currentProject === index
                  ? 0
                  : -0.1 * Math.PI,
            }}
          >
            <Project project={project} highlighted={index === currentProject} />
          </motion.group>
        );
      })}
    </group>
  );
};
