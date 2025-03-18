import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ShowCard from "../components/ShowCard";
import {
  isScheduleSuppressed,
  isScheduleSuppressionVisible,
  scheduleSuppressedBy,
} from "../data/events";
import { getCurrentShows, getNearestShows } from "../data/shows";

function SchedulePage() {
  return (
    <div className="text-white">
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold">Schedule</h1>
          {isScheduleSuppressed() ? (
            <>
              {isScheduleSuppressionVisible() ? (
                <div className="bg-gradient-to-b to-blue-900 from-blue-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
                  <div className="flex flex-col items-center w-full">
                    <h1 className="text-2xl">On Break</h1>
                    <p>{scheduleSuppressedBy()[0].effects.schedule?.message}</p>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <React.Fragment>
              {getCurrentShows().map((show) => (
                <div className="bg-gradient-to-b to-red-900 from-red-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
                  <div className="flex flex-col items-center w-full">
                    <h1 className="text-2xl">Live Now</h1>
                    <ShowCard show={show} key={show.name} />
                  </div>
                </div>
              ))}
              <div className="bg-gradient-to-b to-yellow-700 from-yellow-500 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
                <div className="flex flex-col items-center w-full">
                  <h1 className="text-2xl">Up Next</h1>
                  {getNearestShows()
                    .slice(0, 5)
                    .map((show) => (
                      <ShowCard show={show} key={show.name} />
                    ))}
                </div>
              </div>
            </React.Fragment>
          )}

          <Link
            to="shows"
            className="cursor-pointer bg-gradient-to-b to-green-900 via-green-700 from-green-500 bg-size-200 transition-all bg-pos-0 hover:bg-pos-100 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4"
          >
            <div className="flex flex-col items-center w-full">
              <h1 className="text-2xl">View All Shows</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SchedulePage;
