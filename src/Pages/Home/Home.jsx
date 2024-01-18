import Specialties from './../../Components/Specialties/Specialties';
import BestDoctor from './../../Components/BestDoctor/BestDoctor';
import Partners from '../../Components/partners/Partners';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Faq from '../../Components/Faq/Faq';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Specialties />
      <BestDoctor />
      <Faq/>
      <Testimonials/>
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
