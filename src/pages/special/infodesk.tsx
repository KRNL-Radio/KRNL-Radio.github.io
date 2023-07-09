import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Countdown from "../../components/Countdown";
import Header from "../../components/Header";
import { SmallLoading, IconLoading } from "../../components/LoadingScreens";
import PlaceholderImage from "../../assets/placeholder.jpg";
import Silence from "../../assets/silence.mp3";
import { RequestTrack } from "../../requests/core";
import { getCurrentShows, getNearestShows, Show } from "../../data/shows";
import Countup from "../../components/Countup";
import { toast } from "react-toastify";

function InfoDeskPlayerPage() {
  const [isPrimed, setIsPrimed] = React.useState(false);
  const [isRunning, setIsRunning] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [title, setTitle] = React.useState("Loading...");
  const [host, setHost] = React.useState("Loading...");
  const [albumArt, setAlbumArt] = React.useState(PlaceholderImage);
  const [nextShow, setNextShow] = React.useState<Show | null>(null);
  const [startedAt, setStartedAt] = React.useState(new Date());
  const [hasCurrentShow, setHasCurrentShow] = React.useState(false);

  useEffect(() => {
    window.player.start_fast_refresh();
    let metadataCb = (data: any) => {
      if (host !== data.host_string) {
        setHost(data.host_string);
        if (
          data.host_string !== "Loading..." &&
          data.host_string !== "Max Jr."
        ) {
          if (isRunning) {
            setIsPlaying(true);
          }
        } else {
          if (isRunning) {
            setIsPlaying(false);
          }
        }
      }
    };
    window.player.on("metadata", metadataCb);
    let trackCb = (data: any) => {
      setNextShow(getCurrentShows()[0] || getNearestShows()[0]);
      setHasCurrentShow(getCurrentShows().length > 0);
      setTitle(data.title);
      setAlbumArt(data.album_art);
    };
    window.player.on("current_track", trackCb);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.player.stop_refreshing();
      window.player.unbind("metadata", metadataCb);
      window.player.unbind("current_track", trackCb);
    };
  });

  useEffect(() => {
    setStartedAt(new Date());
    window.player.volume(1);
    if (isPlaying) {
      window.player.play();
    } else {
      window.player.unload();
    }
  }, [isPlaying]);

  return (
    <div>
      <Header />
      <h1 className="text-4xl text-center">KRNL Dev Player</h1>
      <h2 className="text-2xl text-center">
        For the info desk and/or totallynotmark6!
      </h2>
      <div className="flex flex-wrap justify-center p-4 w-full">
        {isPrimed ? (
          <div className="btn btn-disabled btn-primary mx-2" data-theme="dark">
            Primed
          </div>
        ) : (
          <button
            className="btn btn-primary mx-2"
            onClick={async () => {
              setIsPrimed(true);
              let audio = new Audio(Silence);
              await audio.play();
            }}
          >
            Prime
          </button>
        )}

        <label
          htmlFor="requests-modal"
          className="btn btn-secondary mx-2 cursor-pointer"
          id="requests-modal-icon"
        >
          Open Request Menu
        </label>
      </div>
      {isPrimed ? (
        <div className="flex flex-wrap justify-center p-4 w-full">
          {isRunning ? (
            <button
              className="btn btn-primary mx-2"
              onClick={() => setIsRunning(false)}
            >
              Stop Monitoring
            </button>
          ) : (
            <button
              className="btn btn-primary mx-2"
              onClick={() => setIsRunning(true)}
            >
              Start Monitoring
            </button>
          )}
          {isPlaying ? (
            <button
              className="btn btn-secondary mx-2"
              onClick={() => setIsPlaying(false)}
            >
              Pause
            </button>
          ) : (
            <button
              className="btn btn-accent mx-2"
              onClick={() => setIsPlaying(true)}
            >
              Play
            </button>
          )}
        </div>
      ) : (
        <></>
      )}
      <div className="text-xl text-center">
        <Countup from={startedAt} forceZero={!isPlaying} />
      </div>
      <div className="flex flex-wrap justify-center p-4 w-full">
        <img
          src={albumArt}
          alt="Album Art"
          className={
            "rounded-lg object-cover place-self-center w-1/12 h-1/12 select-none pointer-events-none transition duration-500 " +
            (isPlaying ? "" : " filter grayscale")
          }
        />
        <div className="flex flex-col justify-center mx-4">
          <div className="text-2xl text-center">{title}</div>
          <div className="text-xl text-center">{host}</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-4 w-full">
        <div className="flex flex-col justify-center mx-4">
          <div className="text-3xl text-center">Next Scheduled Show</div>
          {nextShow ? (
            <>
              <div className="text-2xl text-center">{nextShow.name}</div>
              <div className="text-xl text-center">
                {nextShow.hosts.map((h) => h.name).join(" & ")}
              </div>
              <div className="text-xl text-center">
                {hasCurrentShow ? (
                  <div className="text-red-400">
                    <div>Ends in:</div>
                    <Countdown
                      to={nextShow.schedule.endToDate() || new Date()}
                      hideDays={false}
                    />
                  </div>
                ) : (
                  <Countdown
                    to={nextShow.schedule.getNextOccurance() || new Date()}
                    hideDays={false}
                  />
                )}
              </div>
            </>
          ) : (
            <div className="text-xl text-center">No shows scheduled</div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-4 w-full">
        <button
          className="btn btn-error mx-2"
          onClick={async () => {
            await toast.promise(
              new Promise((resolve, reject) => {
                setTimeout(reject, 2760);
              }),
              {
                pending: "Running func setupNotifs()",
                success: "it worked",
                error: "it failed!!!!!1!1",
              },
            );
          }}
        >
          Run Dev Func (DO NOT PRESS)
        </button>
      </div>
      {/* modal */}
      <input
        type="checkbox"
        id="requests-modal"
        className="modal-toggle"
        data-theme="luxury"
      />
      <div className="modal modal-middle" data-theme="luxury">
        <div className="modal-box">
          <div className="flex flex-row items-center">
            <RequestsModal />
          </div>
          <div className="modal-action">
            <label htmlFor="requests-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

function RequestsModal() {
  const [tracks, setTracks] = React.useState<RequestTrack[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<RequestTrack[]>([]);
  const [status, setStatus] = React.useState(
    window.player.requests_core.status,
  );
  const [pnr, setPnr] = React.useState(
    window.player.requests_core.probable_next_request,
  );
  useEffect(() => {
    window.player.requests_core.get_tracks().then((res_tracks) => {
      setTracks(res_tracks);
      setSearchResults(res_tracks);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (searchText === "") {
      setSearchResults(tracks);
    } else {
      setSearchResults(
        tracks.filter(
          (track) =>
            track.title.toLowerCase().includes(searchText.toLowerCase()) ||
            track.artist.toLowerCase().includes(searchText.toLowerCase()),
        ),
      );
    }
  }, [searchText, tracks]);

  useEffect(() => {
    let interv = setInterval(() => {
      window.player.requests_core.update_throttle_status();
      setStatus(window.player.requests_core.status);
      setPnr(window.player.requests_core.probable_next_request);
    }, 1000);
    return function cleanup() {
      clearInterval(interv);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="text-2xl text-white">Request a Song</div>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered w-full"
        onChange={(e) => setSearchText(e.target.value)}
      />
      {status === "temporary_throttled" || status === "daily_throttled" ? (
        <div className="text-xl text-white">
          You've been throttled! Try again in about{" "}
          <Countdown to={pnr} hideDays={true}></Countdown>
        </div>
      ) : (
        <></>
      )}
      <div className="overscroll-contain overflow-auto h-96">
        {loading
          ? SmallLoading()
          : searchResults.map((track) => {
              return (
                <div
                  className="flex flex-row items-center border-t p-2 w-full"
                  key={track.id}
                >
                  <LazyLoadImage
                    src={track.artwork.url ?? PlaceholderImage}
                    className="w-16 h-16 rounded-lg"
                    alt=""
                    effect="opacity"
                    placeholder={<IconLoading />}
                  />
                  {/* <img
                      loading="lazy"
                      src={track.artwork.url ?? "https://placekitten.com/128"}
                      className="w-16 h-16 rounded-lg"
                      alt=""
                    /> */}
                  <div className="flex flex-col px-4">
                    <div className="text-white">{track.title}</div>
                    <div className="text-white">{track.artist}</div>
                  </div>
                  <div className="flex flex-row items-center justify-end flex-grow">
                    <FontAwesomeIcon
                      onClick={async () => {
                        try {
                          await window.player.requests_core.request(track.id);
                        } catch (_) {}
                        setStatus(window.player.requests_core.status);
                        setPnr(
                          window.player.requests_core.probable_next_request,
                        );
                      }}
                      icon={solid("add")}
                      className="text-white text-xl p-2 cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
        {searchResults.length === 0 && tracks.length !== 0 ? (
          <div className="text-white text-xl">No results found</div>
        ) : (
          <></>
        )}
        {tracks.length === 0 ? (
          <div className="text-white text-xl">Requests disabled!</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default InfoDeskPlayerPage;
