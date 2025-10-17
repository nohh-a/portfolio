import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6l font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello, I am </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Noah
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Rodriguez
            </span>
          </h1>{" "}
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a software engineer that graduated from Monash University with
            a double degree in Information Technology (Software Dev) and
            Business (Banking and Finance). I am confident in my skills to
            provide real solutions to real world problems, but I am still humble
            to continue learning to ensure I can be be the best developer I can
            be!
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View my projects
            </a>
          </div>
        </div>{" "}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
