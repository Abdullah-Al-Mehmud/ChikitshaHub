import Banner from "./../../Components/Banner/Banner";
import Specialties from "./../../Components/Specialties/Specialties";
import BestDoctor from "./../../Components/BestDoctor/BestDoctor";
import Partners from "../../Components/partners/Partners";

import Faq from "../../Components/Faq/Faq";
import Testimonials from "../../Components/Testimonials/Testimonials";
import BMICalculator from "../../Components/BMICalculator/BMICalculator";

const Home = () => {
  return (
    <>
      <Banner />
      <Specialties />
      <BestDoctor />
      <Faq />
      <Testimonials />
      <Partners />
      <BMICalculator />
    </>
  );
};

export default Home;
