import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";

const Root = () => {
  return (
    <div>
      <Scroll />
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
