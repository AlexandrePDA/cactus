import { Faq } from "@/Components/Home/Faq";
import Hero from "@/Components/Home/Hero";
import How from "@/Components/Home/How";
import Together from "@/Components/Home/Together";
import Whatis from "@/Components/Home/Whatis";


export default function Home() {
  return (
    <div>
      <Hero />
      <Whatis />
      <How/>
      <Together/>
      <Faq/>
    </div>
  );
}
