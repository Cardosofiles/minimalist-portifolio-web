import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Knowledge from "@/components/Knowledge";
import Languages from "@/components/Languages";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center 
    flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Knowledge />
        <Certificates />
        <Languages />
        <Footer />
      </div>
    </main>
  );
}
