import React, { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0, 
      });
    }, [pathname])

  return <Fragment>{children}</Fragment>;
}

export default ScrollToTop;