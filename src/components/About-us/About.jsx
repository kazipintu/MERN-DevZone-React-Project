import { useEffect } from "react";
import AboutBanner from "./AboutBanner/AboutBanner";
import Technology from "./Technology/Technology";
import AboutServices from "./AboutServices/AboutServices";
import Counter from "./Counter/Counter";
import MultisliderSwiper from "../../shared/Sliders/MultisliderSwiper";
import { teamData } from "../../util/teamData";
import ShortContact from "./ShortContact/ShortContact";
import WorkTogether from "./WorkTogether/WorkTogether";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <AboutBanner />
      <Technology />
      <AboutServices />
      <Counter />
      <MultisliderSwiper data={teamData} />
      <ShortContact />
      <WorkTogether />
    </div>
  );
};

export default About;