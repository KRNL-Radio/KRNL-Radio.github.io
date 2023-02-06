import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { PlayerCore } from "./player/core";
import { ErrorElem } from "./ErrorElem";
import consolePatch from "./consolePatch";
const MemberPage = lazy(async () => import("./pages/members"));
const HomePage = lazy(async () => import("./pages/home"));
const IndividualMemberPage = lazy(async () => import("./pages/member"));
const ShowsPage = lazy(async () => import("./pages/shows"));
const IndividualShowPage = lazy(async () => import("./pages/show"));
const FullPlayer = lazy(async () => import("./pages/fullplayer"));
const ContactPage = lazy(async () => import("./pages/contact"));
const ScheduleGeneratorPage = lazy(
  async () => import("./pages/special/schedulegen")
);
const SchedulePage = lazy(async () => import("./pages/schedule"));
const ChangelogPage = lazy(async () => import("./pages/changelog"));
const APIPage = lazy(async () => import("./api/api"));

consolePatch();

declare global {
  interface Window {
    player: PlayerCore;
    api: any;
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
      path: "/api",
      element: <APIPage />,
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
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
