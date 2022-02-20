import React from 'react';
import { ReactComponent as Send } from "../../../shared/icons/send.svg";
import ReviewItem from './ReviewItem';

function Reviews({ reviews }) {
  return (
    <div className='flex w-full flex-col  items-center justify-center'>
        <form className='w-full flex flex-col sm:w-5/6 px-2 my-10'>
          <div className='w-full flex  items-center justify-center'>
            <div className='w-12 h-12 rounded-full profile-background bg-center bg-cover'>
              <img alt='' className='w-full h-full rounded-full' />
            </div>
            <textarea  type="text" placeholder='How was the movie?' className='flex-1 p-1 rounded focus:outline-none placeholder-darkcyan mx-2' />
            <button type='submit' className='hover:bg-black p-2 rounded-full'><Send /></button>
          </div>
          <div className='flex w-full px-5 items-center pt-2'>
            <input type='checkbox' className=''/>
            <p className='mx-1 text-white_ text-sm'>This review includes spoiling.</p>
          </div>
        </form>
        <div className='w-full sm:w-5/6 flex flex-col justify-start'>
          {
            reviews.map((review, id) => <ReviewItem key={review.id} review={review} />)
          }
        </div>
    </div>
  );
}

export default Reviews;
