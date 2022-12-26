import { useNavigate } from "react-router-dom";
import { AUTOMATED_HOST, Host, KRNL_HOST } from "../data/hosts";
import { slugify } from "../util/slug";
import Card from "./Card";

function MemberCard({ member }: { member: Host }) {
  const nav = useNavigate();
  let clickHandler = () => {
    if (member === KRNL_HOST || member === AUTOMATED_HOST) {
      nav(`/members`);
      return;
    }
    nav(`/members/${slugify(member.name)}`);
  };
  return (
    // <div className="member-card">
    //     <div className="member-card__image"></div>
    //     <div className="member-card__info">
    //         <div>
    //             <div className="member-card__name">{member.name}</div>
    //             {/* TODO: add badges */}
    //         </div>
    //         <div className="member-card__splash_text">{member.splash_text}</div>
    //     </div>
    // </div>
    <Card
      title={member.name}
      subtitle={member.splash_text}
      background={member.image}
      onClick={clickHandler}
    />
  );
}

export default MemberCard;
