import React from 'react'
import { Link } from 'react-router-dom'

function NavbarMovie() {
  return (
    <div className='relative group transition duration-500'>
    <Link className='text-white_ hover:text-white' to='/Discover/Movies?SortBy=popularity'>
      Movies
    </Link>
  
    <div className='absolute flex space-x-8 p-5 group-hover:translate-y-0 -mt-0.5 rounded opacity-0 translate-y-4 group-hover:opacity-100 transition duration-500 invisible bg-gray group-hover:visible'>
        <div className='relative flex flex-wrap flex-col'>
        <h1 className='text-white_ pb-2'>Categories</h1>
        <div className='flex'>
        <div className='flex flex-col'>
            <Link to='/Discover/movies?Genre=Action&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Action</Link>
            <Link to='/Discover/movies?Genre=Comedy&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Comedy</Link>
            <Link to='/Discover/movies?Genre=Adventure&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Adventure</Link>
            <Link to='/Discover/movies?Genre=Animation&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Animation</Link>
            <Link to='/Discover/movies?Genre=Horror&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Horror</Link>
            <Link to='/Discover/movies?Genre=Science_Fiction&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Science Fiction</Link>
            <Link to='/Discover/movies?Genre=History&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>History</Link>
            <Link to='/Discover/movies?Genre=Fantasy&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Fantasy</Link>
            <Link to='/Discover/movies?Genre=Drama&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Drama</Link>
        </div>
        <div className='flex flex-col'>
            <Link to='/Discover/movies?Genre=Romantic&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Romantic</Link>
            <Link to='/Discover/movies?Genre=War&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>War</Link>
            <Link to='/Discover/movies?Genre=Western&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Western</Link>
            <Link to='/Discover/movies?Genre=Crime&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Crime</Link>
            <Link to='/Discover/movies?Genre=Family&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Family</Link>
            <Link to='/Discover/movies?Genre=Music&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Music</Link>
            <Link to='/Discover/movies?Genre=Mystery&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Mystery</Link>
            <Link to='/Discover/movies?Genre=Thriller&SortBy=popularity' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Thriller</Link>
        </div>
        </div>
        </div>
        <div className='relative flex flex-wrap flex-col'>
        <h1 className='text-white_ pb-2'>Year</h1>
        <div className='flex flex-col'>
            <Link to='/Discover/movies?FromYear=2022&SortBy=popularity&ToYear=2022' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2022</Link>
            <Link to='/Discover/movies?FromYear=2021&SortBy=popularity&ToYear=2021' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2021</Link>
            <Link to='/Discover/movies?FromYear=2020&SortBy=popularity&ToYear=2020' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2020</Link>
            <Link to='/Discover/movies?FromYear=2019&SortBy=popularity&ToYear=2019' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2019</Link>
            <Link to='/Discover/movies?FromYear=2018&SortBy=popularity&ToYear=2018' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2018</Link>
            <Link to='/Discover/movies?FromYear=2017&SortBy=popularity&ToYear=2017' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>2017</Link>
            <Link to='/Discover/movies' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>more ...</Link>
        </div>
        </div>
        <div className='h-100 w-0.5 bg-glassy rounded'></div>

        <div className='relative flex flex-col my-5'>
        <div className='flex flex-col space-y-2'>
            <Link to='/Discover/movies?type=now_playing' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>In Theaters</Link>
            <Link to='/Discover/movies?type=popular' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Popular</Link>
            <Link to='/Discover/movies?type=top_rated' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Top Rated</Link>
            <Link to='/Discover/movies?type=upcoming' className='pr-3 hover:text-white_ text-sm text-darkcyan whitespace-nowrap py-0.5 text-left'>Upcoming</Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default NavbarMovie