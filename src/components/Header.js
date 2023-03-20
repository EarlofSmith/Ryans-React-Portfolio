import React from "react";
import Nav from "./Nav";

function Header(props) {
  const { currentPage, handlePageChange } = props;

  return (
    <div>
      <section>
        <header className="">
          <div>
            <h1>Ryan Smith's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            ></Nav>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;