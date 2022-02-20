import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SeriesContext } from "../Series_state/SeriesState";
import SeasonDetails from "./SeasonDetails";

function Season({ seasons }) {
  const [Season, setSeason] = useState(1);
  const [SeasonDetail, setSeasonDetail] = useState("");
  
  const { id } = useParams();
  const { Fetcher } = useContext(SeriesContext);

  useEffect(() => {
    Fetcher(
      setSeasonDetail,
      `tv/${id}/season/${Season}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
  }, [Fetcher, id, Season]);

  useEffect(() => setSeason(1), [id])

  return (
    <div className="mt-5  ">
      <div className="flex space-x-4 overflow-x-scroll">
        {seasons &&
          seasons.map((season, index) => (
            <button
              href=""
              onClick={() => setSeason(season.season_number)}
              key={index}
              className={`text-white_ hover:text-white whitespace-nowrap px-2 py-1 mb-1 text-sm font-medium ${
                season.season_number === Season && "border-b border-darkcyan"
              }`}
              aria-current="page"
            >
              {season.name}
            </button>
          ))}
      </div>
      <SeasonDetails Season={SeasonDetail} setSeason={setSeason}/>
    </div>
  );
}

export default Season;
