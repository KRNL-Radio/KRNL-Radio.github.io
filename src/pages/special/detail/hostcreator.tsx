import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import MemberCard from "../../../components/MemberCard";
import { Host, findHostByName } from "../../../data/hosts";
import { createLink } from "../../contact";
import mailtoLink from "mailto-link";
import { individualMemberExcerpt } from "../../member";

const BlankHost: Host = {
  name: "Name",
  pronouns: ["pronouns"],
  splash_text: "Splash Text",
  bio: "Bio!",
  image: "undefined",
  socials: [],
  badges: [],
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

function HostCreatorPage() {
  const [member, setMember] = useState<Host>(BlankHost);

  const [name, setName] = useState<string>("Name");
  const [pronouns, setPronouns] = useState<string[]>(["Pronouns"]);
  const [splashText, setSplashText] = useState<string>("Splash Text");
  const [bio, setBio] = useState<string>("Bio!");
  const [image, setImage] = useState<string>("https://placekitten.com/500/500");
  const [socials, setSocials] = useState<string[]>([]);
  const [badges, setBadges] = useState<string[]>([]);

  const [loadName, setLoadName] = useState<string>("");

  const loadFromName = () => {
    const member = findHostByName(loadName, true);
    if (!member) {
      throw new Error("Member not found");
    }
    setName(member.name);
    setPronouns(member.pronouns);
    setSplashText(member.splash_text);
    setBio(member.bio);
    setImage(member.image);
  };

  useEffect(() => {
    setMember({
      name: name,
      pronouns: pronouns,
      splash_text: splashText,
      bio: bio,
      image: image,
      // socials: socials.map(createLink),
      // badges: badges
      socials: [],
      badges: [],
    });
  }, [name, pronouns, splashText, bio, image, socials, badges]);

  const sendToMark = () => {
    const filteredMember = {
      name: member.name,
      pronouns: member.pronouns,
      splash_text: member.splash_text,
      bio: member.bio,
      socials: member.socials,
      badges: member.badges,
    };
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
              placeholder="Pronouns (separated by a space)"
              className="bg-slate-700 text-white rounded-md p-2 m-2"
              onChange={(e) => setPronouns(e.target.value.split(" "))}
              value={pronouns.join(" ")}
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
              onChange={(e) => setBio(e.target.value)}
              value={bio}
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
            <MemberCard member={member} should_nav={false} />
          </div>
          {individualMemberExcerpt(member)}
        </div>
      </div>
    </div>
  );
}

export default HostCreatorPage;
