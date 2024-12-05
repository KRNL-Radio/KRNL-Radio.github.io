import { useState } from "react";
import { getStationHistory, type HistoryTrack } from "../util/radioco";
import { useInterval } from "../util/useInterval";

function getRelativeTime(start_time: string): import("react").ReactNode {
  const startTime = new Date(start_time);
  const now = new Date();
  const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);

  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
}

export default function HistoryComponent() {
    const [tracks, setTracks] = useState([] as HistoryTrack[]);

    // get tracks every 2 minutes
    // and, merge the lists!
    useInterval(async () => {
        const apiTracks = await getStationHistory()
        setTracks((prevTracks) => {
            const newTracks = apiTracks.filter(
            (track) => !prevTracks.some((prevTrack) => prevTrack.start_time === track.start_time)
            );
            const tracks = [...prevTracks, ...newTracks];
            // sort by start time (newest first)
            tracks.sort((a, b) => {
                return new Date(b.start_time).getTime() - new Date(a.start_time).getTime();
            })
            return tracks;
        });
    }, 120000, true);
    return (
      <div className="flex flex-col w-full">
        <div className="text-2xl text-white">History</div>
        <div className="overscroll-contain overflow-auto h-96">
            {tracks.map((track) => {
                return (
                    <div
                        className="flex flex-row items-center border-t first:border-t-0 p-2 w-full"
                        key={track.start_time}
                    >
                        <img
                            src={track.artwork_url!}
                            alt="album art"
                            className="w-16 h-16 rounded"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="flex flex-col px-4">
                            <div className="text-white">{track.title}</div>
                            <div className="text-white">{getRelativeTime(track.start_time)}</div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    );
}
