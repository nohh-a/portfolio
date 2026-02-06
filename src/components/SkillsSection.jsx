/**
 * Page displays my technical skills grouped into categories – icon view only
 */
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Palette,
  Braces,
  Workflow,
  Layers,
  Globe,
  Server,
  Code,
  Terminal,
  FileCode,
  Database,
  GitBranch,
  Cpu,
  Cloud,
  PenTool,
  Kanban,
} from "lucide-react";

const skills = [
  // FRONTEND
  { name: "HTML/CSS", icon: Palette, category: "frontend" },
  { name: "JavaScript", icon: Braces, category: "frontend" },
  { name: "React", icon: Workflow, category: "frontend" },
  { name: "Tailwind CSS", icon: Layers, category: "frontend" },
  { name: "Next.js", icon: Globe, category: "frontend" },

  // BACKEND
  { name: "Node.js", icon: Server, category: "backend" },
  { name: "Express", icon: Code, category: "backend" },
  { name: "Python", icon: Terminal, category: "backend" },
  { name: "PHP", icon: FileCode, category: "backend" },
  { name: "MySQL", icon: Database, category: "backend" },
  { name: "MongoDB", icon: Database, category: "backend" },

  // TOOLS
  { name: "Git/GitHub", icon: GitBranch, category: "tools" },
  { name: "Figma", icon: PenTool, category: "tools" },
  { name: "VS Code", icon: Terminal, category: "tools" },
  { name: "cPanel", icon: Cpu, category: "tools" },
  { name: "AWS", icon: Cloud, category: "tools" },
  { name: "Trello", icon: Kanban, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill icons grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="flex flex-col items-center gap-2 bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
              >
                <Icon className="text-primary w-10 h-10 transition-colors duration-300 hover:text-primary/80" />
                <span className="font-medium text-sm text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
