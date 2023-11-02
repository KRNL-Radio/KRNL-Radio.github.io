import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import MemberCard from "../../../components/MemberCard";
import { Host, findHostByName } from "../../../data/hosts";
import { createLink } from "../../contact";
import mailtoLink from "mailto-link";
import { individualMemberExcerpt } from "../../member";
import ShowCard from "../../../components/ShowCard";
import { Show, findShowByName } from "../../../data/shows";
import { ScheduleItem } from "../../../data/schedule";
import { individualShowExcerpt } from "../../show";

const BlankShow: Show = {
  name: "Name",
  splash_text: "Splash Text",
  description: "Description",
  // image: "undefined",
  hosts: [],
  schedule: new ScheduleItem("30 20 * * 3", 60),
};

function imgToBase64(img?: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (img === undefined) return resolve("https://placekitten.com/500/500");
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        console.log(reader.result);
        reject("Invalid image type!");
      }
    };
    reader.onerror = (error) => reject(error);
  });
}

function ShowCreatorPage() {
  const [show, setShow] = useState<Show>(BlankShow);

  const [name, setName] = useState<string>("Name");
  const [splashText, setSplashText] = useState<string>("Splash Text");
  const [description, setDescription] = useState<string>("Bio!");
  const [image, setImage] = useState<string>("https://placekitten.com/500/500");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [hosts, setHosts] = useState<string>("");

  const [loadName, setLoadName] = useState<string>("");

  const loadFromName = () => {
    const show = findShowByName(loadName, true);
    if (!show) {
      throw new Error("Show not found");
    }
    setName(show.name);
    setSplashText(show.splash_text);
    setDescription(show.description);
    setStartDate(show.schedule.start.toString());
    setEndDate(show.schedule.end.toString());
    setHosts(show.hosts.map((host) => host.name).join(", "));
  };

  useEffect(() => {
    setShow({
      name: name,
      splash_text: splashText,
      description: description,
      hosts: hosts
        .split(",")
        .map((host) => findHostByName(host.trim(), true))
        .filter((host) => host !== undefined) as Host[],
      schedule: new ScheduleItem(startDate, Number(endDate)),
    });
  }, [name, splashText, description, image, startDate, endDate, hosts]);

  const sendToMark = () => {
    const filteredMember = {};
    const link = mailtoLink({
      to: "krnl@cornellcollege.edu",
      subject: "Host Creator Submission",
      body: `***PLEASE ATTACH YOUR IMAGE MANUALLY!***
            
Form Data: ${btoa(JSON.stringify(filteredMember))}`,
    });
    console.log(link);
    window.open(link, "_blank");
  };

  return (
    <div>
      <Header />
      {/* two columns */}
      <div className="flex flex-row">
        <div className="flex flex-col w-1/4 bg-slate-800">
          <h1 className="text-4xl text-center">Creator</h1>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="bg-slate-700 text-white rounded-md p-2 m-2"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              placeholder="Splash Text"
              className="bg-slate-700 text-white rounded-md p-2 m-2"
              onChange={(e) => setSplashText(e.target.value)}
              value={splashText}
            />
            <textarea
              placeholder="Bio"
              className="bg-slate-700 text-white rounded-md p-2 m-2 resize-y h-32"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <input
              type="text"
              placeholder="Hosts"
              className="bg-slate-700 text-white rounded-md p-2 m-2"
              onChange={(e) => setHosts(e.target.value)}
              value={hosts}
            />
            {/* file picker for image */}
            <input
              type="file"
              className="bg-slate-700 text-white rounded-md p-2 m-2"
              onChange={(e) => {
                if (e.target.files === null) return;
                const img = e.target.files[0];
                imgToBase64(img).then(setImage);
              }}
            />
            <input
              type="text"
              placeholder="Start Date"
              className="bg-slate-700 text-white rounded-md p-2 m-2"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
            <input
              type="text"
              placeholder="End Date"
              className="bg-slate-700 text-white rounded-md p-2 m-2"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
            <button
              onClick={sendToMark}
              className="bg-purple-700 hover:bg-purple-500 transition-colors text-white rounded-md p-2 m-2"
            >
              Send to Mark!
            </button>
            <div className="border border-slate-500 m-2" />
            {/* load */}
            <input
              type="text"
              placeholder="Load from Name"
              className="bg-slate-700 text-white rounded-md p-2 m-2"
              onChange={(e) => setLoadName(e.target.value)}
            />
            <button
              onClick={loadFromName}
              className="bg-purple-700 hover:bg-purple-500 transition-colors text-white rounded-md p-2 m-2"
            >
              Load from Name
            </button>
            {/* save */}
          </div>
        </div>
        <div className="flex flex-col w-3/4">
          {/* center the card */}
          <h2 className="text-4xl text-center">Preview</h2>
          <div className="flex justify-center">
            <ShowCard show={show} should_nav={false} />
          </div>
          {individualShowExcerpt(show)}
        </div>
      </div>
    </div>
  );
}

export default ShowCreatorPage;
