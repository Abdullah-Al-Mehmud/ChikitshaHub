import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { subscribeToAuthChanges } from "../redux/authThunks";

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subscribeToAuthChanges());
  }, [dispatch]);
  return (
    <div>
      <Scroll />
      <Header></Header>
      <div className="min-h-[100vh]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
