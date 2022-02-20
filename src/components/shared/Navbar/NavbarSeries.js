import React from 'react'
import { Link } from 'react-router-dom'

function NavbarSeries() {
  return (
    <div className='relative group transition duration-500'>
    <Link className='text-white_ hover:text-white' to='/Discover/Series'>
      Series
    </Link>
  
    <div className='absolute flex space-x-8 p-5 group-hover:translate-y-0 -mt-0.5 rounded opacity-0 translate-y-4 group-hover:opacity-100 transition duration-500 invisible bg-gray group-hover:visible'>
        <div className='relative flex flex-wrap flex-col'>
        <h1 className='text-white_ pb-2'>Categories</h1>
        <div className='flex'>
        <div className='flex flex-col'>
            <Link to='/Discover/Series?Genre=Action, Adventure' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Action & Adventure</Link>
            <Link to='/Discover/Series?Genre=Animation' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Animation</Link>
            <Link to='/Discover/Series?Genre=Comedy' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Comedy</Link>
            <Link to='/Discover/Series?Genre=Crime' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Crime</Link>
            <Link to='/Discover/Series?Genre=Documentary' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Documentary</Link>
            <Link to='/Discover/Series?Genre=Drama' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Drama</Link>
            <Link to='/Discover/Series?Genre=Family' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Family</Link>
            <Link to='/Discover/Series?Genre=Kids' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Kids</Link>
        </div>
        <div className='flex flex-col'>
            <Link to='/Discover/Series?Genre=Mystery' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Mystery</Link>
            <Link to='/Discover/Series?Genre=News' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>News</Link>
            <Link to='/Discover/Series?Genre=Reality' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Reality</Link>
            <Link to='/Discover/Series?Genre=Sci-Fi, Fantasy' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Sci-Fi & Fantasy</Link>
            <Link to='/Discover/Series?Genre=Soap' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Soap</Link>
            <Link to='/Discover/Series?Genre=Talk' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Talk</Link>
            <Link to='/Discover/Series?Genre=War & Politics' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>War & Politics</Link>
            <Link to='/Discover/Series?Genre=Western' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Western</Link>
        </div>
        </div>
        </div>
        <div className='relative flex flex-wrap flex-col'>
        <h1 className='text-white_ pb-2'>Year</h1>
        <div className='flex flex-col'>
            <Link to='/Discover/Series?FromYear=2022&SortBy=popularity&ToYear=2022' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2022</Link>
            <Link to='/Discover/Series?FromYear=2021&SortBy=popularity&ToYear=2021' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2021</Link>
            <Link to='/Discover/Series?FromYear=2020&SortBy=popularity&ToYear=2020' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2020</Link>
            <Link to='/Discover/Series?FromYear=2019&SortBy=popularity&ToYear=2019' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2019</Link>
            <Link to='/Discover/Series?FromYear=2018&SortBy=popularity&ToYear=2018' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2018</Link>
            <Link to='/Discover/Series?FromYear=2017&SortBy=popularity&ToYear=2017' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2017</Link>
            <Link to='/Discover/Series' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>more ...</Link>
        </div>
        </div>
        <div className='h-100 w-0.5 bg-glassy rounded'></div>

        <div className='relative flex flex-col my-5'>
        <div className='flex flex-col space-y-2'>
            <Link to='/Discover/Series?type=airing_today' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Tv Airing Today</Link>
            <Link to='/Discover/Series?type=on_the_air' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Tv On The Air</Link>
            <Link to='/Discover/Series?type=popular' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Popular</Link>
            <Link to='/Discover/Series?type=top_rated' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Top Rated</Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default NavbarSeries