import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MoreButton } from "../shared/icons/more.svg";

function More({ link }) {
  return (
    <Link to={link} className="h-48 w-54 mx-2 rounded hover:underline cursor-pointer flex items-center justify-center text-white_">
      <h1 className="flex items-center"><span className="mr-2">View More </span><MoreButton /></h1>
    </Link>
  );
}

export default More;
