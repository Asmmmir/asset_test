import About from "@/components/About";
import Application from "@/components/Application";
import Projects from "@/components/Projects";
import VideoProjects from "@/components/VideoProjects";


export default function Home() {
  return (
    <main className="flex flex-col">
      <About />
      <Application />
      <Projects />
      <VideoProjects />
    </main>
  );
}
