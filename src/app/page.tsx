import Hero from "@/components/Hero/Hero";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const introPlayed = cookieStore.get("intro-played")?.value === "true";

  return <Hero introPlayed={introPlayed} />;
}
