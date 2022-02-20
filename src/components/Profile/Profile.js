import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import WatchLater from "./WatchLater";
import toast from "react-hot-toast";
import { ClearRecentlyWatched } from "../shared/RecentlyWatched";

function Profile() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  if (!isAuthenticated) loginWithRedirect();
  return (
    <>
    <div className="mt-16 flex justify-center ">
      <div className="rounded  bg-metal p-6 text-white_ flex flex-col items-center">
        <img
          src={user.picture}
          className="h-28 w-28 rounded-full"
          alt={user.name}
        />
        <div className="flex flex-col space-y-5 mt-5">
          <div className="bg-gray w-80 p-2 h-16 rounded">
            <p className="text-sm text-darkcyan">Name :</p>
            <h1>{user.given_name}</h1>
          </div>
          <div className="bg-gray w-80 p-2 h-16 rounded">
            <p className="text-sm text-darkcyan">Last name :</p>
            <h1>{user.family_name}</h1>
          </div>
          <div className="bg-gray w-80 overflow-hidden p-2 h-16 rounded">
            <p className="text-sm text-darkcyan">Email :</p>
            <h1>{user.email}</h1>
          </div>
        </div>
        <div></div>
        <div className="flex flex-col w-full mt-3 space-y-2">
          <button onClick={() => {ClearRecentlyWatched(); toast.success("History cleared", { duration: 1500 }) }} className="rounded w-full bg-darkcyan hover:opacity-100 opacity-90 hover:text-black text-black p-2">Clear recently viewed</button>
          <button onClick={() => logout()} className="rounded hover:opacity-100 opacity-90 w-full bg-red p-2">Log Out</button>
        </div>
      </div>
    </div>

    <WatchLater /> 
    </>
  );
}

export default Profile;
