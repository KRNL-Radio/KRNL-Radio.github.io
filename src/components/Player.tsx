import { useState } from "react";
import { FaList, FaPause, FaPlay, FaVolumeHigh, FaGear } from "react-icons/fa6";
import RequestsComponent from "./Requests";

const AUTOMATED_HOST_NAME = "Max Jr.";

export default function PlayerComponent() {
  // Metadata
  const [title, setTitle] = useState("Buddy Holly - Weezer");
  const [host, setHost] = useState("Luna");
  const [albumArt, setAlbumArt] = useState("https://picsum.photos/512");

  // Controls
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100); // ?

  return (
    <div className="flex flex-col text-center bg-indigo-800 bg-opacity-40 w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4 backdrop-blur-sm">
      <img
        src={albumArt}
        alt="Album Art"
        className="rounded-lg object-cover place-self-center max-w-[75%] max-h-[75%] min-h-[25%] min-w-[25%] select-none pointer-events-none"
      />
      <div className="text-xl text-white">{title}</div>
      <div className="text-xl text-white">{host}</div>
      {/* <!-- buttons --> */}
      <label className="swap text-4xl text-white">
        <input type="checkbox" />
        <FaPause className="swap-on" />
        <FaPlay className="swap-off" />
      </label>
      <div className="flex place-self-center">
        <label
          className="text-4xl p-2 cursor-pointer"
          id="requests-modal-icon"
          // @ts-ignore
          onClick={() => document.getElementById("requests-modal").showModal()}
        >
          <FaList />
        </label>
        <label
          className="text-4xl p-2 cursor-pointer"
          id="volume-modal-icon"
          // @ts-ignore
          onClick={() => document.getElementById("volume-modal").showModal()}
        >
          <FaVolumeHigh />
        </label>
        <label
          className="text-4xl p-2 cursor-pointer"
          id="settings-modal-icon"
          // @ts-ignore
          onClick={() => document.getElementById("settings-modal").showModal()}
        >
          <FaGear />
        </label>
      </div>
      <dialog id="requests-modal" className="modal">
        <div className="modal-box">
          <RequestsComponent />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="volume-modal" className="modal">
        <div className="modal-box">
          <p>uwu</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog id="settings-modal" className="modal">
        <div className="modal-box">
          <p>owo</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
