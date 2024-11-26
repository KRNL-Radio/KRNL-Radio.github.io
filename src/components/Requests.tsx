import { Suspense, useEffect, useState } from "react";
import {
  getRequestableTracks,
  requestTrack,
  type RequestableTrack,
} from "../util/radioco";
import { AiOutlineLoading } from "react-icons/ai";

export default function RequestsComponent() {
  const [tracks, setTracks] = useState([] as RequestableTrack[]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([] as RequestableTrack[]);

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

  useEffect(() => {
    getRequestableTracks().then((tracks) => {
      setTracks(tracks);
    });
  }, []);

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
        <Suspense fallback={<p>Loading!</p>}>
          {searchResults.map((track) => {
            return (
              <div
                className="flex flex-row items-center border-t p-2 w-full"
                key={track.id}
              >
                <img
                  src={track.artwork.url!}
                  alt="album art"
                  className="w-16 h-16 rounded"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col px-4">
                  <div className="text-white">{track.title}</div>
                  <div className="text-white">{track.artist}</div>
                </div>
                <div className="flex flex-row items-center justify-end flex-grow">
                  <RequestTrackButton track={track} />
                </div>
              </div>
            );
          })}
        </Suspense>
        {searchResults.length === 0 && tracks.length !== 0 ? (
          <div className="text-gray-200 text-lg">No results found</div>
        ) : (
          <></>
        )}
        <div className="text-gray-300 text-sm mt-4">
          {`Showing ${searchResults.length} of ${tracks.length} tracks`}
        </div>
      </div>
    </div>
  );
}
function RequestTrackButton({ track }: { track: RequestableTrack }) {
  const [message, setMessage] = useState("Request");
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState("btn-primary");
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setDisabled(true);
    setLoading(true);
    setMessage("Requesting...");
    setButtonColor("btn-warning");
    try {
      await requestTrack(track.id);
      setMessage("Requested!");
      setButtonColor("btn-success");
    } catch (e: any) {
      setMessage(`Error: ${e.message}`);
      setButtonColor("btn-error");
    }
    setLoading(false);

    setTimeout(() => {
      setMessage("Request");
      setButtonColor("btn-primary");
      setDisabled(false);
    }, 60000);
  }

  return (
    <button
      className={`btn btn-sm transition ${buttonColor}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {loading ? (
      <div className="flex items-center">
        <AiOutlineLoading className="animate-spin mr-2" />
        {message}
      </div>
      ) : (
      message
      )}
    </button>
  );
}
