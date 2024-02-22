import Banner from "../../Components/Banner/Banner";
//import Specialties from './../../Components/Specialties/Specialties';
import BestDoctor from "../../Components/BestDoctor/BestDoctor";
import Partners from "../../Components/Partners/Partners";
import Faq from "../../Components/Faq/Faq";
import Testimonials from "../../Components/Testimonials/Testimonials";
import BMICalculator from "../../Components/BMICalculator/BMICalculator";
import PrescriptionToPDF from "../PrescriptionToPDF/PrescriptionToPDF";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <Specialties /> */}
      <BestDoctor />
      <PrescriptionToPDF />
      <Testimonials />
      <Faq />
      <Partners />
      <BMICalculator />
    </>
  );
};

export default Home;
