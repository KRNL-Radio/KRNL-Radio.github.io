import Header from "../components/Header";
import ShowCard from "../components/ShowCard";
import { getAllShows, sortShowsByName } from "../data/shows";

function ShowsPage() {
  return (
    <div className="text-white">
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold">Shows</h1>
          <div className="text-lg">
            {getAllShows().length} shows (and counting!)
          </div>
        </div>
        <div className="flex flex-wrap justify-center p-4 w-full">
          {sortShowsByName(getAllShows()).map((show) => {
            return <ShowCard show={show} key={show.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowsPage;
