
import Specialties from './../../Components/Specialties/Specialties';
import BestDoctor from './../../Components/BestDoctor/BestDoctor';
import Partners from '../../Components/partners/Partners';
import Banner from '../../Components/Banner/Banner';
import Faq from '../../Components/Faq/Faq';
import Testimonials from '../../Components/Testimonials/Testimonials';


const Home = () => {
  return (
    <>

      <Banner />
      <Specialties />
      <BestDoctor />
      <Faq/>
      <Testimonials/>
      <Partners />

    </>
  );
};

export default Home;
