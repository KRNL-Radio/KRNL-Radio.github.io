import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MemberPage from "./pages/members";
import HomePage from "./pages/home";
import IndividualMemberPage from "./pages/member";
import ShowsPage from "./pages/shows";
import IndividualShowPage from "./pages/show";
import FullPlayer from "./pages/fullplayer";
import { PlayerCore } from "./player/core";
import ContactPage from "./pages/contact";
import { ErrorElem } from "./ErrorElem";
import ScheduleGeneratorPage from "./pages/special/schedulegen";
import SchedulePage from "./pages/schedule";
import consolePatch from "./consolePatch";
import ChangelogPage from "./pages/changelog";

consolePatch();

declare global {
  interface Window {
    player: PlayerCore;
  }
}
// init player
window.player = new PlayerCore("s209f09ff1");
// window.schedule = ScheduleItem;

// oh to use createBrowserRouter
// but alas, we need a proper server and what not
// i mean, we can use gh pages, but i can't get it to work reliably, so it goes away!
const router = createHashRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/player",
      element: <FullPlayer />,
    },
    {
      path: "/player/themes",
      element: <div>Work In Progress</div>,
    },
    {
      path: "/player/mini",
      element: <div>Work In Progress</div>,
    },
    {
      path: "/schedule",
      element: <SchedulePage />,
    },
    {
      path: "/schedule/shows",
      element: <ShowsPage />,
    },
    {
      path: "/schedule/shows/:name",
      element: <IndividualShowPage />,
    },
    {
      path: "/members",
      element: <MemberPage />,
    },
    {
      path: "/members/:name",
      element: <IndividualMemberPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/changelog",
      element: <ChangelogPage />,
    },
    {
      path: "/secret/schedule/generator",
      element: <ScheduleGeneratorPage />,
    },
    {
      path: "/secret/scriptable",
      element: <div>Work In Progress</div>,
    },
  ],
  {
    // basename: '/',
  }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
