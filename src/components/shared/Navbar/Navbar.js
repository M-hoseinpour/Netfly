import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Menu } from "../icons/menu.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import NavbarMovie from './NavbarMovie';
import NavbarSeries from './NavbarSeries';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileNavbar from './ProfileNavbar';
import Navphone from './Navphone';

function Navbar() {
  const [onTop, setonTop] = useState(true);
  const [showNav, setshowNav] = useState(false);
  const onScroll = () => setonTop(window.pageYOffset < 10);
  const { pathname } = useLocation(); 
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0(); 

  useEffect(() => {
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <Navphone setshowNav={setshowNav} showNav={showNav} />
      <div className={`w-full bg-nav h-16 fixed top-0 z-20 flex items-center ' ${onTop && "gradient_background transition duration-1000"}` }>
        <button className='sm:hidden text-sm text-white ml-2' onClick={() => setshowNav(true)}><Menu /></button>
        <h1 className='text-logo text-xl mx-5 hover:text-logo-hover' >
          <Link to={'/'}>Netfly</Link>
        </h1>
        <div className='space-x-5 ml-8 hidden md:inline-flex flex items-center'>
          <NavbarMovie />
          <NavbarSeries />
        </div>
        <div className='ml-auto flex items-center'>
          { pathname !== "/search" &&
              <Link to='/search' className='flex items-center'>
                <div className='flex items-center border bg-glassy ml-auto text-white_ p-2 mr-5 rounded border-white_ '>
                  <label className='text-white_'><Search /></label>
                  &nbsp;Search
                </div>
              </Link>
            }
            {(!isAuthenticated && !isLoading) && <button onClick={() => loginWithRedirect()} className='mr-2 p-2 flex items-center border border-white_ rounded text-white_  hover:text-white hover:border-white_'>Login/register</button>}
             <ProfileNavbar /> 
          </div>
      </div>
      </div>
  )
}

export default React.memo(Navbar);
