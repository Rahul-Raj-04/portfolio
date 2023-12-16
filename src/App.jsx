import "./App.css";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Portfolio from "./Component/Portfolio";
import Skill from "./Component/Skill";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skill />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
