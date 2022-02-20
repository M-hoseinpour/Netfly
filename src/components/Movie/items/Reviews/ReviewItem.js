import React from "react";
import ShowMoreText from "react-show-more-text";

function ReviewItem({ review }) {
  return (
    <>
    <div className="w-full flex space-x-2 my-2 px-1 items-center text-darkcyan">
      <div
        className={`w-12 h-12 rounded-full  ${
          (!review.author_details.avatar_path ||
            review.author_details.avatar_path.startsWith("/https")) &&
          "profile-background"
        } bg-center bg-cover`}
      >
        {review.author_details.avatar_path &&
          !review.author_details.avatar_path.startsWith("/https") && (
            <img
              className="w-full h-full rounded-full"
              alt=""
              src={`https://image.tmdb.org/t/p/w200/${review.author_details.avatar_path}`}
            />
          )}
      </div>
      <div className="flex flex-col">
        <div>
          <span className="text-white_">{review.author_details.username}&#160;&#160;</span>
          {new Date(review.updated_at).toISOString().slice(0, 10) ||
            new Date(review.created_at).toISOString().slice(0, 10)}
        </div>
      </div>
    </div>
    <ShowMoreText
                more="&#9660; Show more"
                less="&#9650; Show less"
                className="text-white_ mb-8 px-1"
                anchorClass="text-darkcyan block text-center"
            >
                {review.content}
    </ShowMoreText>
    </>
  );
}

export default ReviewItem;
