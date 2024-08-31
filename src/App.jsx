"use client";

import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { framerMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";
import Interface from "./components/Interface";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [0, 3, 15], fov: 62 }}>
          {/* <color attach="background" args={["#e6e7ff"]} /> */}
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience
                onSectionChange={setSection}
                section={section}
                menuOpened={menuOpened}
              />
            </Scroll>
            <Scroll html>
              <Interface
                section={section}
                menuOpened={menuOpened}
                setSection={setSection}
              />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          section={section}
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
      <Cursor />
      <Leva hidden />
    </>
  );
}

export default App;
