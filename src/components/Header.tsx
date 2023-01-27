import React from "react";
import { useEffect } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [title, setTitle] = React.useState("");
  const [host, setHost] = React.useState("");

  useEffect(() => {
    let trackCb = (data: any) => {
      setTitle(data.title);
    };
    window.player.on("current_track", trackCb);
    let metadataCb = (data: any) => {
      setHost(data.host_string);
    };
    window.player.on("metadata", metadataCb);
    window.player.start_slow_refresh();
    return function cleanup() {
      window.player.stop_refreshing();
      window.player.unbind("current_track", trackCb);
      window.player.unbind("metadata", metadataCb);
    };
  });

  useEffect(() => {
    window.player.refresh();
  }, []);

  return (
    <div>
      <ScrollRestoration />
      <nav className="border-white border-solid border-b text-xl m-0 p-3 text-center text-white bg-slate-900">
        <ul className="m-0 p-0">
          <Link to="/" className="inline-block my-0 mx-4">
            Home
          </Link>
          <Link to="/player" className="inline-block my-0 mx-4">
            Player
          </Link>
          <Link to="/schedule" className="inline-block my-0 mx-4">
            Schedule
          </Link>
          <Link to="/members" className="inline-block my-0 mx-4">
            Members
          </Link>
          <Link to="/contact" className="inline-block my-0 mx-4">
            Contact
          </Link>
        </ul>
      </nav>
      {/* text to the very right of the screen */}
      <div className="absolute top-0 right-0 m-2 text-white text-right hidden lg:block truncate">
        <p className="text-sm">{title}</p>
        <p className="text-sm">{host}</p>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default Header;
