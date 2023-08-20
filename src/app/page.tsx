import { Footer } from "@/Components/Footer";
import { Faq } from "@/Components/Home/Faq";
import Hero from "@/Components/Home/Hero";
import How from "@/Components/Home/How";
import Together from "@/Components/Home/Together";
import Whatis from "@/Components/Home/Whatis";
import NavBar from "@/Components/NavBar";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Whatis />
      <How/>
      <Together/>
      <Faq/>
      <Footer/>
    </div>
  );
}
