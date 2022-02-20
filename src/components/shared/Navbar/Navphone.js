import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Cross } from "../icons/cross.svg";

function Navphone({ setshowNav, showNav }) {
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target))
      setshowNav(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setshowNav]);

  return (
    <div
      className={`fixed transition duration-500 flex flex-col left-0 top-0 ${
        !showNav && "-translate-x-36"
      } h-full w-36 bg-black z-50 text-white_`}
      ref={ref}
    >
      <div className="flex items-center p-2 mt-3">
        <button
          className="sm:hidden text-sm text-white ml-2"
          onClick={() => setshowNav(false)}
        >
          <Cross />
        </button>
        <h1 className="text-logo text-xl mx-5 hover:text-logo-hover">
          <Link to={"/"}>Netfly</Link>
        </h1>
      </div>
      <div className="mt-2 mx-2">
        <Link
          to="/Discover/Movies"
          className="w-full text-left my-2 text-lg p-1 flex justify-between items-center"
          onClick={() => setshowNav(false)}
        >
          Movies
        </Link>
        <Link
          to="/Discover/series"
          className="w-full text-left my-2 text-lg p-1 flex justify-between items-center"
          onClick={() => setshowNav(false)}
        >
          Series
        </Link>
      </div>
    </div>
  );
}

export default Navphone;
