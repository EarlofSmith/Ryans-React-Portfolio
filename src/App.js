import './App.css';
import Header from '../src/components/Header';
import About from '../src/components/About';
import React, { useState } from "react";
import { HelmetProvider } from 'react-helmet-async';


function App() {
  const [currentPage, handlePageChange] = useState("about");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    // if (currentPage === "Contact") {
    //   return <Contact />;
    // }
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
      <HelmetProvider>
        <title>Lindsey Martin's Portfolio | {currentPage} </title>
      </HelmetProvider>
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
