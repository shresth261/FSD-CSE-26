import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Header from "../components/Header";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default UserLayout;