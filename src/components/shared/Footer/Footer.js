import React from "react";
import pic from '../Toast/profile-pic.png'

function Footer() {
  return (
    <div className="w-full h-54 flex sm:flex-row flex-col justify-between items-center mt-24 px-5">
      <div className="flex items-center">
        <img
          alt=""
          className="md:w-24 md:h-24 h-16 w-16 rounded-full animate-bounce"
          src={pic}
        />
        <div className="md:text-sm text-xs mx-2 mb-5 text-white_">
          <h2>Developed by Mohammad Hoseinpour</h2>
          <span className="text-glass">React js developer</span>
        </div>
      </div>
      <div className="flex flex-col flex-col-reverse sm:flex-row justify-center items-center sm:items-start">
        <a className="text-grey my-2 mx-2 underline hover:text-white_"
            href="https://github.com/M-hoseinpour/Netfly"  
        >
            Source code
        </a>
        <a
          className="relative w-72 sm:w-32 cursor-pointer flex justify-center rounded text-white_ mb-5 bg-chocolate whitespace-nowrap p-2 hover:opacity-100 opacity-90"
          href="mailto:mostafahoseinpourmhp@gmail.com"
        >
          Hire me
        </a>
      </div>
    </div>
  );
}

export default React.memo(Footer);
