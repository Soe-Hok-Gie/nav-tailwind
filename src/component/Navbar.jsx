import React from "react";

const Navbar = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-primary block py-6">
              CALIBURN
            </a>
          </div>
          <div className="flex items-center px-4">
            <button id="humberger" name="humberger" type="button" className="block absolute right-4">
              <span className="humberger-line"></span>
              <span className="humberger-line"></span>
              <span className="humberger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
