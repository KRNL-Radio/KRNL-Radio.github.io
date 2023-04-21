import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Markdown from "../components/Markdown";
import ShowCard from "../components/ShowCard";
import SocialButtons from "../components/SocialButtons";
import { findHostByName } from "../data/hosts";
import { getShowsByHost } from "../data/shows";

function IndividualMemberPage() {
  const { name } = useParams();
  const member = findHostByName(name || "", true);
  if (!member) {
    throw new Error("Member not found");
  }
  let color = "from-purple-700 to-purple-900"; // current members

  if (member.badges?.includes("Honorary")) {
    color = "from-red-500 to-red-700";
  } else if (member.badges?.includes("Executive Board")) {
    color = "from-teal-500 to-teal-700";
  } else if (
    member.badges?.includes("Alumni") &&
    member.badges?.includes("Past Executive Board")
  ) {
    color = "from-teal-500 to-yellow-600";
  } else if (member.badges?.includes("Alumni")) {
    color = "from-yellow-500 to-yellow-600";
  } else if (member.badges?.includes("Past Executive Board")) {
    color = "from-gray-500 to-teal-700";
  } else if (member.badges?.includes("Past")) {
    color = "from-gray-500 to-gray-700";
  }
  return (
    <div className="text-white">
      <Header />
      <div>
        <div
          className={`bg-gradient-to-b ${color} flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4`}
        >
          <div className="flex flex-col items-center w-full">
            <img
              src={
                member.image ? member.image : "https://via.placeholder.com/150"
              }
              alt={member.name}
              className="rounded-3xl w-96 object-cover drop-shadow-md"
            />
            <h1 className="text-2xl">{member.name}</h1>
            <h2 className="text-l">({member.pronouns.join(" / ")})</h2>
            <h2 className="text-xl">{member.splash_text}</h2>
            <Markdown className="p-4 bg-violet-700 rounded-xl my-8 text-center">
              {member.bio}
            </Markdown>
            {/* add a list of their badges! */}
            {member.badges && (
              <div className="flex flex-wrap justify-center pb-8 w-full">
                {member.badges.map((badge) => {
                  return (
                    <p className="bg-red-700 rounded-xl p-2 m-2">{badge}</p>
                  );
                })}
              </div>
            )}
            {/* add a list of the shows that they made */}
            {member.badges?.includes("DJ") && (
              <div className="w-full p-2">
                <h2 className="text-xl text-center">Hosts</h2>
                <div className="flex flex-wrap justify-center p-4 w-full">
                  {/* add a list of the hosts that are on the show */}
                  {getShowsByHost(member).map((show) => {
                    return <ShowCard show={show} key={show.name} />;
                  })}
                </div>
              </div>
            )}
            <SocialButtons member={member} />
          </div>
        </div>
      </div>
      <div>
        {/* center a back link */}
        <div className="flex justify-center">
          <Link to="/members" className="text-white">
            Back to Members
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndividualMemberPage;
