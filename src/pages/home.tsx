import React from "react";
import Header from "../components/Header";
import Markdown from "../components/Markdown";
import ShowCard from "../components/ShowCard";
import { KRNLSocialButtons } from "../components/SocialButtons";
import {
  getHomeBanner,
  hasHomeBanner,
  isScheduleSuppressed,
  isScheduleSuppressionVisible,
  scheduleSuppressedBy,
} from "../data/events";
import { getCurrentShows } from "../data/shows";
import { toTailwind } from "../themes/core";
import getMotto from "../egg/motto";

function HomePage() {
  return (
    <div className="text-white">
      <Header />
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold">Home</h1>
        {hasHomeBanner() && HomeBanner()}
        {isScheduleSuppressed() ? (
          <>
            {isScheduleSuppressionVisible() ? (
              <div className="bg-gradient-to-b to-blue-900 from-blue-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
                <div className="flex flex-col items-center w-full">
                  <h1 className="text-2xl">On Break</h1>
                  <p>{scheduleSuppressedBy()[0].effects.schedule?.message}</p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <React.Fragment>
            {getCurrentShows().map((show) => (
              <div className="bg-gradient-to-b to-red-900 from-red-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
                <div className="flex flex-col items-center w-full">
                  <h1 className="text-2xl">Live Now</h1>
                  <ShowCard show={show} key={show.name} />
                </div>
              </div>
            ))}
          </React.Fragment>
        )}
        <div className="p-8">
          <p className="text-xl">
            Welcome! KRNL is a student-run college radio station that was
            broadcasting at 89.7 FM.
          </p>
          <p>{getMotto()}</p>

          <p className="text-xl">
            We seek to provide a personal, alternative source of entertainment
            to the outlying community.
          </p>

          {/* Our Objectives (header than list) */}
          <h1 className="text-4xl font-bold pt-4">Our Objectives</h1>
          <ul className="list-disc list-inside">
            <li>Encourage and broadcast a diverse selection of music</li>
            <li>Provide a platform for students to learn about radio</li>
            <li>
              Promote personal experimentation and growth of broadcasting and
              managerial techniques within all persons associated with KRNL
            </li>
            <li>Be a valuable resource for people within the community</li>
          </ul>

          {/* What we Do */}
          <h1 className="text-4xl font-bold pt-4">What We Do</h1>
          <p className="text-xl">
            In no particular order, we broadcast a variety of music, host live
            events (including sponsoring the Big Event), and provide a platform
            for students to learn about radio, and to be themselves!
          </p>

          <p>
            We have meetings every Thursday from 4:30 - 5:30 in our studio, come
            say hi!
          </p>
        </div>
        <KRNLSocialButtons />
      </div>
    </div>
  );
}

export default HomePage;
function HomeBanner(): React.ReactNode {
  const banner = getHomeBanner()!;
  const home_text = banner.effects.banner!.home_banner_text!;
  const theme = banner.effects.banner!.background_theme || {
    type: "tailwind",
  };

  if (theme.type === "tailwind") {
    const compiled = (
      theme.tailwind_options || ["to-purple-900", "from-purple-700"]
    ).join(" ");
    const direction = toTailwind(theme.tw_small_direction || "b");
    return (
      <div
        className={`flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4 ${direction} ${compiled}`}
      >
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl">{banner.name}</h1>
          <Markdown className="text-center text-lg">{home_text}</Markdown>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl">{banner.name}</h1>
          <Markdown className="text-center text-lg">{home_text}</Markdown>
        </div>
      </div>
    );
  }
}
