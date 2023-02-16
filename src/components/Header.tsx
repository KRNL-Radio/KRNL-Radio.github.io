import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getSiteBanner, hasSiteBanner } from "../data/events";
import { TinyThemeWrapper } from "../player/themes/tinywrapper";

function SiteBanner() {
  if (hasSiteBanner()) {
    const banner = getSiteBanner()!;
    const theme = banner.effects.banner!.background_theme;
    const icon = banner.effects.banner!.site_banner_icon;
    const text = banner.effects.banner!.site_banner_text;
    const link_url = banner.effects.banner!.site_banner_link;
    const link_text = banner.effects.banner!.site_banner_link_text;
    return (
      <TinyThemeWrapper theme={banner.effects.banner!.background_theme}>
        <div className="border-white border-solid border-b text-l m-0 p-2 text-center text-white">
          {/* right, all we need to do now is make the banner!~ */}
          {/* it goes: icon, text: link */}
          <div className="flex flex-row justify-center h-full">
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                className="mx-2 self-center text-2xl"
              />
              // <></>
            )}
            <p className="mx-2">{text}</p>
            {link_url && link_text && (
              <a className="mx-2 font-bold underline" href={link_url}>
                {link_text}
              </a>
            )}
          </div>
        </div>
      </TinyThemeWrapper>
    );
  } else {
    return <></>;
  }
}

function Header() {
  const [title, setTitle] = React.useState("");
  const [host, setHost] = React.useState("");

  useEffect(() => {
    if (hasSiteBanner()) {
      // ABORT ABORT
      return;
    }
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
      <SiteBanner />
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
