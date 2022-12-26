import React from "react";
import Header from "../components/Header";
import ShowCard from "../components/ShowCard";
import { isScheduleSuppressed, scheduleSuppressedBy } from "../data/events";
import { getCurrentShows } from "../data/shows";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold">Home</h1>


        {
          isScheduleSuppressed() ? (
            <div className="bg-gradient-to-b to-blue-900 from-blue-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
              <div className="flex flex-col items-center w-full">
                <h1 className="text-2xl">On Break</h1>
                <p>{scheduleSuppressedBy()[0].effects.schedule?.message}</p>
              </div>
            </div>
          ) : (
            <React.Fragment>
              {getCurrentShows()
                .map((show) => (
                  <div className="bg-gradient-to-b to-red-900 from-red-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
                    <div className="flex flex-col items-center w-full">
                      <h1 className="text-2xl">Live Now</h1>
                      <ShowCard show={show} key={show.name} />
                    </div>
                  </div>
                ))
              }
            </React.Fragment>
          )
        }

        <p className="text-xl">
          Welcome to the home page! This is where you can find all the latest
          news about the station.
        </p>

        <p className="text-xl">
          This is a work in progress, so please excuse the mess!
        </p>

        <p className="text-xl">
          If you have any questions, please contact us at email.
        </p>

        <p className="text-xl">
          If you would like to contribute to the station, please visit our Thing.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
