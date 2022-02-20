import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingSpinner from "../../Discover/items/LoadingSpinner";
import { Link } from "react-router-dom";

function ProfileNavbar() {
  const { user, logout, isLoading } = useAuth0();
  return !isLoading ? (
    user ? (
      <div className="relative group transition duration-500">
        <div className="text-white_ flex">
          <img className="h-12 w-12 rounded-full mx-2 text-xs" src={user.picture} alt={user.name} />
        </div>
        <div className="relative">
          <div className="absolute right-0 mr-2 flex space-x-8 p-1 group-hover:translate-y-0 -mt-0.5 rounded opacity-0 translate-y-4 group-hover:opacity-100 transition duration-500 invisible bg-gray group-hover:visible">
            <div className="relative flex flex-wrap flex-col w-full w-32">
              <div className="flex w-full">
                <div className="flex flex-col w-full">
                  <Link
                    to="/Profile"
                    className="p-2 rounded w-full  hover:text-white_ text-sm text-darkcyan whitespace-nowrap"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/Profile"
                    className="p-2 rounded w-full  hover:text-white_ text-sm text-darkcyan whitespace-nowrap"
                  >
                    Watch later
                  </Link>
                <button className="p-2 rounded w-full text-left  hover:text-white_ text-sm text-darkcyan whitespace-nowrap" onClick={() => logout()}>Log out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  ) : (
    <LoadingSpinner />
  );
}

export default ProfileNavbar;
