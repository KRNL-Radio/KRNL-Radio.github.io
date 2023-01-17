import { Suspense, useCallback, useEffect } from "react";
// import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
// import {MoveDirection} from "tsparticles-engine/types/Enums/Directions/MoveDirection";
import Header from "../components/Header";
import React from "react";
import { FIRE_THEME } from "../player/themes";
import { LargeLoading } from "../components/LoadingScreens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
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
            <label htmlFor="volume-modal" className="text-4xl">
              <FontAwesomeIcon
                icon={solid("volume-up")}
                className="text-white"
              />
            </label>
            <input
              type="checkbox"
              id="volume-modal"
              className="modal-toggle"
              data-theme="luxury"
            />
            <div
              className="modal modal-bottom sm:modal-middle"
              data-theme="luxury"
            >
              <div className="modal-box">
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={solid("volume-down")}
                    className="text-white"
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
                    className="text-white"
                  />
                </div>
                <div className="modal-action">
                  <label htmlFor="volume-modal" className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default FullPlayer;
