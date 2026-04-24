import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import WorkList from "@/components/WorkList/WorkList";
import backdrop from "@public/img/sc.webp";


export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <ParallaxSection
        image={backdrop}
        alt="Section backdrop. An sunny image of the french alps. White plastic chairs and outdoor tables with a view of the snowy mountain range."
      />
      <WorkList />
    </>
  );
}
