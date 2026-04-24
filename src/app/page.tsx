import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import WorkList from "@/components/WorkList/WorkList";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkList />
    </>
  );
}
