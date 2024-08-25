// import { OrbitControls } from "@react-three/drei";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { Office } from "./Office";
import { motion } from "framer-motion-3d";
import { Avatar } from "./Avatar";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Projects } from "./Projects";
import { Background } from "./Background";
// import * as THREE from "three";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(
        section === 0
          ? "Typing"
          : section === 2
          ? "Pointing"
          : section >= 3
          ? "Waving"
          : "Standing"
      );
    }, 600);

    // onSectionChange(section);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler().setFromQuaternion(quaternion, "XYZ");
    // console.log([euler.x, euler.y, euler.z]);
  });

  return (
    <>
      <Background />
      <motion.group
        position={[5.992833728355833, -0.04010869190013292, 3.4836169161070596]}
        rotation={[-3.0630528372500483, 0.9025979010256551, 3.141592653589793]}
        scale={3.193}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 2.122,
            scaleY: 2.122,
            scaleZ: 2.122,
          },
          1: {
            y: -viewport.height - 1.5,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            y: -viewport.height * 2 + 0.2,
            x: menuOpened ? -5 : -3.3,
            z: 7,
            scaleX: 2,
            scaleY: 2,
            scaleZ: 2,
            rotateX: 0,
            rotateY: 1,
            rotateZ: 0,
          },
          3: {
            scaleX: 3.5,
            scaleY: 3.5,
            scaleZ: 3.5,
            x: menuOpened ? -1 : -1,
            y: -viewport.height * 3 - 2.9,
            z: 11.2,
            rotateX: 0,
            rotateY: menuOpened ? Math.PI * 2 - 1.2 : Math.PI / 8,
            rotateZ: 0,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[4.8, 8.5, 4]}
        scale={[0.7, 0.7, 0.7]}
        rotation-y={-Math.PI / 3.5}
        rotation-x={Math.PI / 40}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          name="Empty"
          position={[0.491, -0.115, -1.788]}
          rotation={[-Math.PI, 0.005, -Math.PI]}
          scale={3.193}
        ></group>
      </motion.group>
      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[5, 3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[-4, 1, -18]} scale={[3, 3, 3]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"yellow"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[-5, 5, -11]} scale={[1.4, 1.4, 1.4]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
      <Projects menuOpened={menuOpened} section={section} />
    </>
  );
};
