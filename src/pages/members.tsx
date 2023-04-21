import Header from "../components/Header";
import MemberCard from "../components/MemberCard";
import { getAllHosts, sortHosts } from "../data/hosts";

function MemberPage() {
  return (
    <div className="text-white">
      <Header />
      <div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold">Members</h1>
        </div>
        <div className="flex flex-wrap justify-center p-4 w-full">
          {sortHosts(getAllHosts()).map((host) => {
            return <MemberCard member={host} key={host.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MemberPage;
