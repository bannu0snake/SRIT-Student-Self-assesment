import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Signin from "./components/Signin.js";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              vaue: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "#f33501"
              }
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <Aboutme/>
      <Services/>
    </>
  );
}

export default App;
