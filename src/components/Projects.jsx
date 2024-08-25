import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Whatkey",
    url: "https://whatkey.io",
    image: "/projects/whatkey.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, tempore.",
  },
  {
    title: "Whatkey",
    url: "https://whatkey.io",
    image: "/projects/whatkey.png",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati facilis iste eius eligendi, omnis perferendis placeat quae laborum vero quaerat.",
  },
  {
    title: "Whatkey",
    url: "https://whatkey.io",
    image: "/projects/whatkey.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, tempore.",
  },
  {
    title: "Whatkey",
    url: "https://whatkey.io",
    image: "/projects/whatkey.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, tempore.",
  },
  {
    title: "Whatkey",
    url: "https://whatkey.io",
    image: "/projects/whatkey.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, tempore.",
  },
  {
    title: "Whatkey",
    url: "https://whatkey.io",
    image: "/projects/whatkey.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, tempore.",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
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
        <meshBasicMaterial color={"#000"} transparent opacity={0.1} />
      </mesh>
      <Image
        scale={[7, 4.3, 1]}
        url={project.image}
        toneMapped={false}
        position-y={2}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.6}
        position={[-4, -0.7, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={8}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
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
