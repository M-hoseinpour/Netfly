import React, { useEffect, useState } from "react";
import Toast from "../../shared/Toast/Toast";
import ThemeState from "./theme_state/ThemeState";
import icon from './favicon.png'

function Theme({ children }) {
  useEffect(() => {
    setTimeout(() => Toast() , 15000);
  }, []);
  const [country, setcountry] = useState()
  useEffect(() => {
     fetch('http://api.ipapi.com/check?access_key=4b3e271e4c4902f254e5c860ffb30451&format=1')
    .then( res => res.json())
    .then(response => {
      setcountry(response.country_name)
   })
 },[])
  return (
    <ThemeState>
      {country === 'Iran' ? 
        <div className="flex flex-col justify-center items-center h-screen text-white_">
          <img src={icon} alt='' className='h-32 w-32' />
          <h1 className="sm:text-2xl text-lg flex flex-col flex-col-reverse items-end sm:flex-row"><p>.کنید reload سایت را </p> لطفا با فیلتر شکن وارد شوید و </h1>
        </div>
        : children
      }
    </ThemeState>
  );
}

export default Theme;
