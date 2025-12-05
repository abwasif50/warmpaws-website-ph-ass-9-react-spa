import HeroSlider from "../components/HeroSlider"; 
import Meetourvets from "../components/Meetourvets";
import ServiceCard from "../components/ServiceCard";
import WhatWeDo from "../components/WhatweDo";
import WinterTips from "../components/WinterTips";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <ServiceCard />

      <WinterTips/>
      
      <Meetourvets/>

      <WhatWeDo/>
    </div>
  );
}



