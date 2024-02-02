import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
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
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
