import { useEffect, useState } from "react";

export default function RequestsComponent() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchText === "") {
      setSearchResults(tracks);
      return;
    }
    setSearchResults(
      tracks.filter(
        (track) =>
          track.title.toLowerCase().includes(searchText.toLowerCase()) ||
          track.artist.toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  }, [searchText, tracks]);

  return (
    <div className="flex flex-col w-full">
      <div className="text-2xl text-white">Request a Song</div>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full my-4"
        onChange={(event) => setSearchText(event.target.value)}
      />
      <div className="overscroll-contain overflow-auto h-96">
        {loading ? (
          <p>Loading!</p>
        ) : (
          searchResults.map((track) => {
            return (
              <div
                className="flex flex-row items-center border-t p-2 w-full"
                key={track.id}
              >
                <img
                  src={track.artwork.url}
                  alt="album art"
                  className="w-16 h-16"
                  loading="lazy"
                />
                <div className="flex flex-col px-4">
                  <div className="text-white">{track.title}</div>
                  <div className="text-white">{track.artist}</div>
                </div>
                <div className="flex flex-row items-center justify-end flex-grow"></div>
              </div>
            );
          })
        )}
        {searchResults.length === 0 && tracks.length !== 0 ? (
          <div className="text-gray-200 text-lg">No results found</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
