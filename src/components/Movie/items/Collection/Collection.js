import React from 'react';
import { Link } from 'react-router-dom';

function Collection({ item }) {
  return (
      <Link to={`/collection/${item.belongs_to_collection.id}`}>
        <h1 className='text-white_ mt-3 text-lg'>{item.belongs_to_collection.name}</h1>
        <div className='flex justify-center h-64 sm:w-96 w-82  rounded skeleton'>
            <img alt='' src={`https://image.tmdb.org/t/p/w500/${item.belongs_to_collection.backdrop_path}`} className='h-full w-full rounded'/>
        </div>
      </Link>
  );
}

export default Collection;
