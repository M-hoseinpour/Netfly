import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Range, getTrackBackground  } from 'react-range';


function DiscoverYear() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const ref = useRef();

  return (
    <div ref={ref} className='w-full px-2 mt-5'>
      <div className="text-white w-full md:h-16 bg-glassy rounded text-sm p-1  text-center flex items-center">
        <div className="w-full px-2">
          <span className="block text-left text-xs mb-2">Year :</span>
          <div>
            <div className="flex justify-center flex-wrap mx-1">
              <Range values={[searchParams.get("FromYear") || 1900, searchParams.get("ToYear") || 2022]}
                step={1}
                min={1900}
                max={2022}
                onChange={(values) => setSearchParams({ ...params ,"FromYear": values[0], "ToYear" : values[1] })}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    className='h-0 flex w-full'
                  >
                    <div
                      ref={props.ref}
                      className='h-1 w-full rounded align-center'
                      style={{
                        background: getTrackBackground({
                        values:[searchParams.get("FromYear") || 1900, searchParams.get("ToYear") || 2022],
                          colors: ["#ccc", "#548BF4", "#ccc"],
                          min: 1900,
                          max: 2022,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    className="focus:outline-none"
                  >
                    <div
                    className="h-3 w-3 rounded-full bg-darkcyan"
                    />
                  </div>
                )}
              />
              <output className="mt-2 text-xs" id="output">
                {searchParams.get("FromYear") || 1900} - {searchParams.get("ToYear") || 2022}
              </output>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverYear;
