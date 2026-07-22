import Navbar from "@/components/Navbar";
import ScrollDots from "@/components/ScrollDots";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Finding from "@/components/Finding";
import Approach from "@/components/Approach";
import Couplet from "@/components/Couplet";
import Skills from "@/components/Skills";
import Proof from "@/components/Proof";
import TeamJoin from "@/components/TeamJoin";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollDots />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Finding />
        <Approach />
        <Couplet />
        <Skills />
        <Proof />
        <TeamJoin />
      </main>
      <Footer />
    </>
  );
}
