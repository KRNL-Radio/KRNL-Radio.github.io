import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { PlayerCore } from "./player/core";
import { ErrorElem } from "./ErrorElem";
import consolePatch from "./consolePatch";
import { LargeLoading } from "./components/LoadingScreens";
const InfoDeskPlayerPage = lazy(async () => import("./pages/special/infodesk"));
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
      errorElement: <ErrorElem />,
    },
    {
      path: "/player/themes",
      element: <div>Work In Progress</div>,
      errorElement: <ErrorElem />,
    },
    {
      path: "/player/mini",
      element: <div>Work In Progress</div>,
      errorElement: <ErrorElem />,
    },
    {
      path: "/schedule",
      element: <SchedulePage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/schedule/shows",
      element: <ShowsPage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/schedule/shows/:name",
      element: <IndividualShowPage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/members",
      element: <MemberPage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/members/:name",
      element: <IndividualMemberPage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/changelog",
      element: <ChangelogPage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/api",
      element: <APIPage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/secret/schedule/generator",
      element: <ScheduleGeneratorPage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/secret/info-desk-player",
      element: <InfoDeskPlayerPage />,
      errorElement: <ErrorElem />,
    },
    {
      path: "/secret/scriptable",
      element: <div>Work In Progress</div>,
      errorElement: <ErrorElem />,
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
    <Suspense fallback={<LargeLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
