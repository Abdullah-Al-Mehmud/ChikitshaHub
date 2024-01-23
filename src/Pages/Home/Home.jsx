/* eslint-disable no-unused-vars */
import Specialties from "../../Components/Specialties/Specialties";
import BestDoctor from "../../Components/BestDoctor/BestDoctor";
import Partners from "../../Components/partners/Partners";
import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <>
      <Banner />
      <Specialties />
      <BestDoctor />
      <Faq />
      <Testimonials />
      <Partners />
    </>
  );
};

export default Home;
