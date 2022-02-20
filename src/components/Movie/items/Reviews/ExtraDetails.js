import React from "react";

function ExtraDetails({ item }) {
  return (
    <div className="text-white_ sm:mx-4 flex">
      <ul className="flex flex-col ">
        <li className="flex flex-wrap space-x-1 border-t border-glass py-3">
          Categories : &nbsp;
          {item.genres.map((category, index) => (
            <span key={index} className="text-whitish  break-all text-sm sm:text-base">
              {(index ? ", " : "") + category.name}
            </span>
          ))}
        </li>
        <li className="flex flex-wrap space-x-1 border-t border-glass py-3">
          Production countries : &nbsp;
          {item.production_countries.map((country, index) => (
            <span key={index} className="text-whitish  break-all text-sm sm:text-base">
              {(index ? ", " : "") + country.name}
            </span>
          ))}
        </li>
        <li className="flex flex-wrap space-x-1 border-t border-glass py-3">
          Spoken languages : &nbsp;
          {item.spoken_languages?.map((language, index) => (
            <span key={index} className="text-whitish  break-all text-sm sm:text-base">
              {(index ? ", " : "") + language.english_name}
            </span>
          ))}
        </li>
        <li className="border-y  border-glass py-3">
          Home page :{" "}
          {item.homepage ? (
            <a className="text-blue break-all" href={item.homepage}>
              {item.homepage ? item.homepage : "-"}
            </a>
          ) : (
            "-"
          )}
        </li>
      </ul>
    </div>
  );
}

export default ExtraDetails;
