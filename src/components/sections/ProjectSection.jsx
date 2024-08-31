"use client";

import { useAtom } from "jotai";
import Section from "./Section";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { currentProjectAtom, projects } from "../Projects";

export default function ProjectSection() {
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
}
