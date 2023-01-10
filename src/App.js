import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Navbar from './components/Navbar';
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
     <Navbar />
     <Header />
     <About />
     <Menu/>
     <Testimonials />
    </>
    );
}

export default App;
