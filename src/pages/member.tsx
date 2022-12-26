import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import ShowCard from "../components/ShowCard";
import SocialButtons from "../components/SocialButtons";
import { findHostByName } from "../data/hosts";
import { getShowsByHost } from "../data/shows";

function IndividualMemberPage() {
  const { name } = useParams();
  const member = findHostByName(name || "", true);
  if (!member) {
    return <div>Member not found</div>;
  }
  return (
    <div className="text-white">
      <Header />
      <div>
        <div className="bg-gradient-to-b to-purple-900 from-purple-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
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
            <ReactMarkdown className="p-4 bg-violet-700 rounded-xl my-8 text-center">{member.bio}</ReactMarkdown>
            {/* add a list of the shows that they made */}
            <div className="w-full">
              <h2 className="text-xl text-center">Hosts</h2>
              <div className="flex flex-wrap justify-center p-4 w-full">
                {/* add a list of the hosts that are on the show */}
                {getShowsByHost(member).map((show) => {
                  return <ShowCard show={show} key={show.name} />;
                })}
              </div>
            </div>
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
