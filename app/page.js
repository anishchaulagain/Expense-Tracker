import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./_component/Navbar";
import Hero from "./_component/Hero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  );
}
