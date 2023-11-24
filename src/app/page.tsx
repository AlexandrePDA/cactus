import { Faq } from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import How from "@/components/Home/How";
import Together from "@/components/Home/Together";
import Whatis from "@/components/Home/Whatis";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <Hero />
      <Whatis />
      <How />
      <Together />
      <Faq />
    </div>
  );
}
