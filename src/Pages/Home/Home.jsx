import BestDoctor from "../../Components/BestDoctor/BestDoctor";
import Specialties from "../../Components/Specialties/Specialties";
import Header from "../../Shared/Header/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Specialties />
      <BestDoctor/>
    </>
  );
};

export default Home;
