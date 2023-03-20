import './App.css';
import Header from './components/Header'
import About from '../src/components/About';
import Footer from './components/Footer';
import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Contact from './components/Contact';


function App() {
  const [currentPage, handlePageChange] = useState("about");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    // if (currentPage === "Portfolio") {
    //   return <Portfolio />;
    // }
    // if (currentPage === "Resume") {
    //   return <Resume />;
    // }
    return <About />;
  };

  return (
    <>
      <Helmet>
        <title>Ryan Smith's Portfolio | {currentPage} </title>
      </Helmet>
      ;
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </>
  );
}

export default App;
