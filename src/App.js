import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from './components/Navbar';
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
     <Navbar />
     <Body />
     <Footer />
    </>
    );
}

export default App;
