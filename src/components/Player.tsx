import { useEffect, useRef, useState } from "react";
import { FaList, FaPause, FaPlay, FaVolumeHigh, FaGear } from "react-icons/fa6";
import { AiOutlineLoading } from "react-icons/ai";
import { useInterval } from "../util/useInterval";
import { getStationMetadata } from "../util/radioco";

const AUTOMATED_HOST_NAME = "Max Jr.";

export default function PlayerComponent() {
  // Metadata
  const [title, setTitle] = useState("Buddy Holly - Weezer");
  const [host, setHost] = useState("Luna");
  const [albumArt, setAlbumArt] = useState("https://picsum.photos/512");
  const stream_url = "https://streaming.radio.co/s209f09ff1/listen";

  // Controls
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100); // ?

  // Ref
  const playCheckboxRef = useRef<HTMLInputElement | null>(null);

  // Logic

  // Refresh title, host, albumArt from API every 30 seconds
  useInterval(
    async () => {
      const data = await getStationMetadata();
      setTitle(data.current_track.title);
      setHost(
        data.source.type === "automated"
          ? AUTOMATED_HOST_NAME
          : data.source.collaborator!.name,
      ); // krnl's not gonna be using the relays
      setAlbumArt(
        data.current_track.artwork_url_large ??
          data.current_track.artwork_url ??
          data.logo_url,
      );

      // also set browser metadata
      if (audioRef.current && navigator.mediaSession) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: data.current_track.title,
          artist:
            data.source.type === "automated"
              ? AUTOMATED_HOST_NAME
              : data.source.collaborator!.name,
          artwork: [
            {
              src:
                data.current_track.artwork_url_large ??
                data.current_track.artwork_url ??
                data.logo_url,
            },
          ],
        });
      }
    },
    30000,
    true,
  );

  // Play / Pause
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // set indeterminate state if the audio is loading
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onwaiting = () => {
        if (playCheckboxRef.current) {
          playCheckboxRef.current.indeterminate = true;
        }
      };
      audioRef.current.onplaying = () => {
        if (playCheckboxRef.current) {
          playCheckboxRef.current.indeterminate = false;
        }
      };

      // also set browser metadata
      if (navigator.mediaSession) {
        navigator.mediaSession.setActionHandler("play", () => {
          setIsPlaying(true);
        });
        navigator.mediaSession.setActionHandler("pause", () => {
          setIsPlaying(false);
        });
      }
    }
  }, [audioRef.current]);

  return (
    <div className="flex flex-col text-center bg-indigo-800 bg-opacity-40 w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4 backdrop-blur-sm">
      <audio ref={audioRef} src={stream_url} />
      <img
        src={albumArt}
        alt="Album Art"
        className="rounded-lg object-cover place-self-center max-w-[75%] max-h-[75%] min-h-[25%] min-w-[25%] select-none pointer-events-none"
      />
      <div className="text-xl text-white">{title}</div>
      <div className="text-xl text-white">{host}</div>
      {/* <!-- buttons --> */}
      <label className="swap text-4xl text-white">
        <input
          type="checkbox"
          checked={isPlaying}
          onChange={() => setIsPlaying(!isPlaying)}
          ref={playCheckboxRef}
        />
        <FaPause className="swap-on" />
        <FaPlay className="swap-off" />
        <AiOutlineLoading className="swap-indeterminate animate-spin" />
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
    </div>
  );
}
