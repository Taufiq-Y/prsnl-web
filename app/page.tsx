"use client";

import Hero from "@/components/Hero";
import { AnimatedModalDemo } from "@/components/ui/AnimatedModaldata";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Gird";
import Projects from "@/components/Projects";
import { FaHome } from "react-icons/fa";

const Home = () => (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
        { name: 'Home', link: '/', icon: <FaHome /> }
      ]} />
      <Hero />
      <Grid />
      {/* <AnimatedModalDemo /> */}
      <Projects />
    </div>
  </main>
);

export default Home;
