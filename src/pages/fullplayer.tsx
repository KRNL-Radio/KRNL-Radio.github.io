import { Suspense, useCallback, useEffect } from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
// import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
// import {MoveDirection} from "tsparticles-engine/types/Enums/Directions/MoveDirection";
import Header from "../components/Header";
import React from "react";
import { FIRE_THEME } from "../player/themes";
import {
  IconLoading,
  LargeLoading,
  SmallLoading,
} from "../components/LoadingScreens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { RequestTrack } from "../requests/core";
import Countdown from "../components/Countdown";
// import Stats from "stats.js";

const Particles = React.lazy(() => import("react-particles"));

function FullPlayer() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    const tsp = await import("tsparticles");
    await tsp.loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // do something ig
    },
    []
  );

  const [title, setTitle] = React.useState("Loading...");
  const [host, setHost] = React.useState("Loading...");
  const [albumArt, setAlbumArt] = React.useState(
    "https://placekitten.com/512/512"
  );
  // const [fpsCounter, setFpsCounter] = React.useState(false);

  // useEffect(() => {
  //     if (fpsCounter) {
  //         let stats = new Stats();
  //         stats.showPanel(0);
  //         document.body.appendChild(stats.dom);
  //         requestAnimationFrame(function loop() {
  //             if (!fpsCounter) {
  //                 return;
  //             }
  //             stats.begin();
  //             stats.end();
  //             requestAnimationFrame(loop);
  //         })
  //     } else {
  //         let stats = document.getElementById("stats");
  //         if (stats != null) {
  //             stats.remove();
  //         }
  //     }
  //     return function cleanup() {
  //         let stats = document.getElementById("stats");
  //         if (stats != null) {
  //             stats.remove();
  //         }
  //     }
  // }, [fpsCounter])

  const hostRef = React.useRef(null);

  useEffect(() => {
    window.player.start_fast_refresh();
    let metadataCb = (data: any) => {
      setHost(data.host_string);
    };
    window.player.on("metadata", metadataCb);
    let trackCb = (data: any) => {
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
    if (window.player.player_data != null) {
      setTitle(window.player.player_data.current_track.title);
      setHost(window.player.player_data.host_string);
      setAlbumArt(window.player.player_data.current_track.album_art);
    }
    return function cleanup() {
      window.player.unload();
    };
  }, []);

  let isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf("Apple") > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf("CriOS") === -1 &&
    navigator.userAgent.indexOf("FxiOS") === -1;
  if (isSafari) {
    console.log("Safari detected, disabling particles");
  }

  let playPauseClick = () => {
    console.log("Play/pause clicked");
    console.log(window.player.is_playing);
    if (window.player.is_playing) {
      console.log("Pausing");
      // this doesn't work on safari, and we shouldn't use this on mobile
      if (!isSafari && window.player.get_platform() !== "mobile") {
        window.player.pause();
      } else {
        window.player.unload();
      }
    } else {
      window.player.play();
      // setFpsCounter(true)
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex flex-grow w-full">
        <Suspense fallback={LargeLoading()}>
          {isSafari ? (
            <div className="w-full h-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></div>
          ) : (
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={FIRE_THEME}
            ></Particles>
          )}
          <div className="flex flex-col text-center bg-indigo-800 bg-opacity-40 w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4 backdrop-blur-sm">
            {/* <img src={albumArt} className="rounded-lg object-scale-down" /> */}
            {/* ensure centered image fits in parent div */}
            <img
              src={albumArt}
              alt="Album Art"
              className="rounded-lg object-cover place-self-center max-w-[75%] max-h-[75%] min-h-[25%] min-w-[25%] select-none pointer-events-none"
              // style={{ maxHeight: '75%', maxWidth: '75%' }}
            />
            <div className="text-xl text-white">{title}</div>
            <div className="text-xl text-white" ref={hostRef}>
              {host}
            </div>
            {/* <button onClick={() => {
                                window.player.volume(.05)
                                window.player.play()
                            }}>Play!</button> */}
            <label className="swap text-4xl text-white">
              <input type="checkbox" onClick={playPauseClick} />
              <FontAwesomeIcon icon={solid("pause")} className="swap-on" />
              <FontAwesomeIcon icon={solid("play")} className="swap-off" />
            </label>
            <div>
              <label
                htmlFor="requests-modal"
                className="text-4xl p-2 cursor-pointer"
                id="requests-modal-icon"
              >
                <FontAwesomeIcon icon={solid("list")} className="text-white" />
              </label>
              <label
                htmlFor="volume-modal"
                className="text-4xl p-2 cursor-pointer"
                id="volume-modal-icon"
              >
                <FontAwesomeIcon
                  icon={solid("volume-up")}
                  className="text-white"
                />
              </label>
            </div>
          </div>
        </Suspense>
      </div>
      <div>
        {/* modals */}
        <input
          type="checkbox"
          id="volume-modal"
          className="modal-toggle"
          data-theme="luxury"
        />
        <div className="modal modal-middle" data-theme="luxury">
          <div className="modal-box">
            <div className="flex flex-row items-center">
              <FontAwesomeIcon
                icon={solid("volume-down")}
                className="text-white p-2"
              />
              <input
                className="range p-2"
                type="range"
                min="0"
                max="1"
                step="0.01"
                defaultValue={window.player.get_volume}
                onChange={(e) => {
                  window.player.volume(parseFloat(e.target.value));
                }}
              />
              <FontAwesomeIcon
                icon={solid("volume-up")}
                className="text-white p-2"
              />
            </div>
            <div className="modal-action">
              <label htmlFor="volume-modal" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
        <input
          type="checkbox"
          id="requests-modal"
          className="modal-toggle"
          data-theme="luxury"
        />
        <div className="modal modal-middle" data-theme="luxury">
          <div className="modal-box">
            <div className="flex flex-row items-center">
              <LazyLoadComponent>
                <RequestsModal />
              </LazyLoadComponent>
            </div>
            <div className="modal-action">
              <label htmlFor="requests-modal" className="btn">
                Close
              </label>
            </div>
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
    window.player.requests_core.status
  );
  const [pnr, setPnr] = React.useState(
    window.player.requests_core.probable_next_request
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
            track.artist.toLowerCase().includes(searchText.toLowerCase())
        )
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
    <div className="flex flex-col">
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
      <div className="overscroll-contain overflow-scroll h-96">
        {loading
          ? SmallLoading()
          : searchResults.map((track) => {
              return (
                <div
                  className="flex flex-row items-center border-t p-2 w-full"
                  key={track.id}
                >
                  <LazyLoadImage
                    src={track.artwork.url ?? "https://placekitten.com/128"}
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
                          window.player.requests_core.probable_next_request
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

export default FullPlayer;
