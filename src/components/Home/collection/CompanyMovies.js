import React from 'react';
import Slider from 'react-slick';
import { Collections, Collection_settings } from '../../shared/Constants/Collections';
import CompanyMoviesItem from './CompanyMoviesItem';

function CompanyMovies() {
      return (
            <div className='w-full my-8'>
              <Slider {...Collection_settings}>
                    {Collections?.map((item, index) => <CompanyMoviesItem item={item} key={index} /> )}
              </Slider>
            </div>
      )
}

export default CompanyMovies;