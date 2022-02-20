import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Stars_settings } from '../../shared/Constants/Stars';
import Star from './Star';

function Stars() {
    const [stars, setStars] = useState("")
    useEffect(() => 
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        .then((res) => setStars(res.data.results))
    , [])
      return (
            <div className='w-full my-8'>
                <h1 className='text-2xl py-1 px-2 text-white_'>Popular stars</h1>
                {stars &&
                <Slider {...Stars_settings}>
                        {stars?.map((star, index) => <Star star={star} key={index} /> )}
                </Slider>
                }
            </div>
      )
}

export default Stars;