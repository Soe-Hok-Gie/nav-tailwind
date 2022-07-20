import React from "react";

const Navbar = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-slate-500 block py-6">
              CALIBURN
            </a>
          </div>
          <div className="flex items-center px-4">
            <button>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
