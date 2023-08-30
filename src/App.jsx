import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
  }


  return (
    <>
      <Header
        setCurrentPage={setCurrentPage}
      ></Header>

      {render()}
      
      <Footer></Footer>
    </>
  );
}

export default App;
