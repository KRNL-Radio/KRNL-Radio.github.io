import Header from "../components/Header";
import ShowCard from "../components/ShowCard";
import { getAllShows } from "../data/shows";

function ShowsPage() {
  return (
    <div className="text-white">
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold">Shows</h1>
        </div>
        <div className="flex flex-wrap justify-center p-4 w-full">
          {getAllShows().map((show) => {
            return <ShowCard show={show} key={show.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ShowsPage;
