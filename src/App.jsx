import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";


import { useState } from "react";

function App() {

  // const currentPage = "Projects"
  const [currentPage, setCurrentPage] = useState("Projects")

  function render() {
    if(currentPage === "About") {
      return <About></About>
    } else if(currentPage === "Projects") {
      return <Projects></Projects>
    }
    else if(currentPage === "Contact") {
      return <Contact></Contact>
    }
    else if(currentPage === "Resume") {
      return <Resume></Resume>
    }
  }


  return (
    <>
      <Header
        setCurrentPage={setCurrentPage}
      ></Header>

      <main id="currentPage">
        {render()}
      </main>
      
      <Footer></Footer>
    </>
  );
}

export default App;
