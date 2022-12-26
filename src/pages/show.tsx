import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import MemberCard from "../components/MemberCard";
import { findShowByName } from "../data/shows";

function IndividualShowPage() {
  const { name } = useParams();
  const show = findShowByName(name || "", true);
  if (!show) {
    return <div>Show not found</div>;
  }
  return (
    <div className="text-white">
      <Header />
      <div>
        <div className="bg-gradient-to-b to-purple-900 from-purple-700 flex justify-center p-4 w-4/5 mx-auto rounded-lg m-4">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-2xl">{show.name}</h1>
            <h2 className="text-xl">{show.splash_text}</h2>
            <ReactMarkdown className="p-4 bg-violet-700 rounded-xl my-8 text-center">{show.description || "*No description!*"}</ReactMarkdown>
            <div className="w-full">
              <h2 className="text-xl text-center">Hosts</h2>
              <div className="flex flex-wrap justify-center p-4 w-full">
                {/* add a list of the hosts that are on the show */}
                {show.hosts.map((host) => {
                  return <MemberCard member={host} key={host.name} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* center a back link */}
        <div className="flex justify-center">
          <Link to="/schedule/shows" className="text-white">
            Back to Shows
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndividualShowPage;
