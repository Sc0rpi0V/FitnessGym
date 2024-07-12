import Image from "next/image";
import Informations from "./components/Informations";
import Feature from "./components/Feature";
import AboutFitness from "./components/AboutFitness";

export default function Home() {
  return (
    <>
      <Informations />
      <Feature />
      <AboutFitness />
    </>
  );
}
