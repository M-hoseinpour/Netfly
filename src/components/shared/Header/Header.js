import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ReactComponent as NextButton } from "../icons/next-button.svg";
import { ReactComponent as PreviousButton } from "../icons/previous-button.svg";

export default function Header() {
  
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow custom-header" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <PreviousButton />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow custom-header" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <NextButton />
    </button>
  );
  const [loadedFirst, setloadedFirst] = useState(false)
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      lazyLoad: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      cssEase: "linear",
      slidesToScroll: 1,
      nextArrow: <SlickArrowRight /> ,
      prevArrow: <SlickArrowLeft />,
    }

    useEffect(() => setTimeout(() => setloadedFirst(true), 150), [])
    return (
      <div>
        <Slider {...settings}>
          {/* spider-man */}
          <div className="relative bg-black_ w-100 carousel_image_  object-fill">
            <picture>
              <div className="absolute hidden md:block top-3/4 left-1/3  z-10 flex space-x-3">
                {
                  loadedFirst && 
                  <>
                    <Link to='/Movie/634649' className="p-2 text-white_  rounded bg-glassButton hover:bg-hoverGlassButton">
                      Watch Now
                    </Link>
                    <button className="p-2 text-white_  rounded bg-glassButton hover:bg-hoverGlassButton">
                      Watch Later
                    </button>
                  </>
                }
              </div>
              <source
                media="(min-width:750px)"
                srcSet="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6988390473976963aefed9adcefe06acdf35a6f2c63403d449c0a6afcf2a0b41._UR1920,1080_RI_.jpg"
              />
              <img
                alt='spiderman'
                className="object-fill w-full carousel_image  h-fill"
                src={
                  "https://image.tmdb.org/t/p/original/5pVJ9SuuO72IgN6i9kMwQwnhGHG.jpg"
                }
              />
            </picture>
          </div>
          {/* Batman */}
          <div className=" bg-black_ w-100 carousel_image_  object-fill">
            <div className="absolute hidden md:block bottom-24 left-24  z-10  space-x-3">
              <div className="text-white_ mx-auto flex flex-col justify-center text-3xl ml-3 mb-5">
                  <span className="block text-4xl mx-auto">The Batman</span>
                </div>
              <Link to='/movie/414906' className="p-2 text-sm text-white_  rounded bg-glassButton hover:bg-hoverGlassButton">
                Watch Now
              </Link>
              <button className="p-2 text-sm text-white_  rounded bg-glassButton hover:bg-hoverGlassButton">
                Watch Later
              </button>
            </div>

            <picture>
              <source
                media="(min-width:650px)"
                srcSet="https://image.tmdb.org/t/p/original//b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
              />
              <img
                alt='F9'
                className="object-fill w-full carousel_image h-fill"
                src={
                  "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/10/FBs8-vLUUAIm94F.jpg"
                }
              />
            </picture>
          </div>

          {/* doctor strange */}
          <div className=" bg-black_ w-100 carousel_image_  object-fill">
            <picture>
              <div className="absolute hidden md:block bottom-5 right-5 bottom-36 z-10 flex justify-between">
                <Link to="/movie/453395" className="p-2 text-white_ mx-2 rounded bg-glassButton hover:bg-hoverGlassButton">
                  Watch Now
                </Link>
                <button className="p-2 text-white_ mx-2 rounded bg-glassButton hover:bg-hoverGlassButton">
                  Watch Later
                </button>
              </div>
              <source
                media="(min-width:750px)"
                srcSet="https://image.tmdb.org/t/p/original//xvIAeAyXakMHPOgU7URp1kqKQZI.jpg"
              />
              <img
                alt='eternals'
                className="object-fill w-full carousel_image  h-fill"
                src={
                  "https://image.tmdb.org/t/p/original//byYRjzd9epz1F9yG3hpDWn9zeIx.jpg"
                }
              />
            </picture>
          </div>

          {/* tick tick boom */}
          <div className=" bg-black_ w-100 carousel_image_  object-fill">
            <picture>
              <div className="absolute hidden md:block   absolute top-3/4 left-56  z-10  space-x-3">
                
                <Link to="/movie/537116" className="p-2 text-white_  rounded bg-glassButton hover:bg-hoverGlassButton">
                  Watch Now
                </Link>
                <button className="p-2 text-white_  rounded bg-glassButton hover:bg-hoverGlassButton">
                  Watch Later
                </button>
              </div>

              <source
                media="(min-width:750px)"
                srcSet="https://image.tmdb.org/t/p/original/t0BuUCkwoa3NrriHQdGOnCBSOdK.jpg"
              />
              <img
                alt='tick tick boom'
                className="object-fill w-full carousel_image h-fill"
                src={
                  "https://image.tmdb.org/t/p/original//DPmfcuR8fh8ROYXgdjrAjSGA0o.jpg"
                }
              />
            </picture>
          </div>

          {/* lighyear */}
          <div className=" bg-black_ w-100 carousel_image_  object-fill">
            <div className="absolute hidden md:block absolute bottom-5 left-24  z-10  space-x-3">
              <div className="text-white_ mx-auto flex flex-col justify-center text-3xl ml-3">
                <span className="block mx-auto">Lightyear</span>
              </div>
              <Link to="/movie/718789" className="p-2 text-white_  rounded bg-glassButton hover:bg-hoverGlassButton">
                Watch Now
              </Link>
              <button className="p-2 text-white_  rounded bg-glassButton hover:bg-hoverGlassButton">
                Watch Later
              </button>
            </div>

            <picture>
              <source
                media="(min-width:750px)"
                srcSet="https://image.tmdb.org/t/p/original//ce7o5nkpZD6Dp5luLnSKMSUjatl.jpg"
              />
              <img
                alt='LightYear'
                className="object-fill w-full carousel_image h-fill"
                src={
                  "https://i.kym-cdn.com/photos/images/newsfeed/002/306/807/ddc"
                }
              />
            </picture>
          </div>

          
        </Slider>
      </div>
    );
}
