'use client'
import {ModeToggle} from "@/components/ModeToggle";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className={"min-h-screen"}>
      {/*  Theme Toggle  */}
      <ModeToggle/>
      {/*    Background effect*/}
      <StarBackground/>
      {/*    Nav bar*/}
      <Navbar/>
      {/*    Main content*/}
      <main>
        <HeroSection/>
        <AboutSection/>
      </main>
      {/*    Footer*/}
    </div>
  );
}
