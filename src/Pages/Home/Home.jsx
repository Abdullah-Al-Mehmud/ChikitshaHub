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
<<<<<<< HEAD

export default Home;
=======
export default Home
>>>>>>> 20202366511affff6fc37630cb3ce584b7be2f07
