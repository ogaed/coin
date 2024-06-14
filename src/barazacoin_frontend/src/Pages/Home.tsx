import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import Footer from "../components/ui/Footer"

const Home = ({handleConnectWallet}:any) => {
  return (
    <div style={{ width: "100vw" }}>
      <div style={{ marginBottom: "10PX", width:"100vw" }}></div>
      <Navbar handleConnectWallet={handleConnectWallet} />
      <Outlet />
      <Footer/>
=======

const Home = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <div style={{ marginBottom: "10PX" }}></div>
      <Navbar />
      <Outlet />
>>>>>>> refs/remotes/origin/main
    </div>
  );
};

export default Home;
