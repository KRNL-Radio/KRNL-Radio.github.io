import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { AUTOMATED_HOST, Host, KRNL_HOST } from "../data/hosts";
import { slugify } from "../util/slug";
import Card from "./Card";

function Badge({
  icon,
  color,
  hover_text,
}: {
  icon: IconDefinition;
  color?: string;
  hover_text: string;
}) {
  if (color === undefined) {
    color = "from-purple-700 to-purple-900";
  }
  return (
    <div className="flex items-center">
      <div className={`${color} bg-gradient-to-b mask mask-hexagon-2 p-1`}>
        <a className="tooltip" data-tip={hover_text} key={slugify(hover_text)}>
          <FontAwesomeIcon icon={icon} size="1x" className="p-1" />
        </a>
      </div>
    </div>
  );
}

function renderBadges(member: Host) {
  if (member.badges === undefined) {
    return;
  }
  for (const badge of member.badges) {
    switch (badge) {
      case "Station Manager":
        return {
          icon: solid("headphones"),
          background: "from-purple-700 to-purple-900 bg-gradient-to-b",
          text: "Station Manager",
        };
      case "Technical Director":
        return {
          icon: solid("code"),
          background: "from-purple-700 to-purple-900 bg-gradient-to-b",
          text: "Technical Director",
        };
        break;
      case "Program Director":
        return {
          icon: solid("microphone"),
          background: "from-purple-700 to-purple-900 bg-gradient-to-b",
          text: "Program Director",
        };
        break;
      case "Financial Director":
        return {
          icon: solid("dollar-sign"),
          background: "from-purple-700 to-purple-900 bg-gradient-to-b",
          text: "Financial Director",
        };
      case "Event and Marketing Director":
        return {
          icon: solid("calendar"),
          background: "from-purple-700 to-purple-900 bg-gradient-to-b",
          text: "Events Director", // we have to abbreviate this because it's too long!
        };
        break;
      case "Music Director":
        return {
          icon: solid("music"),
          background: "from-purple-700 to-purple-900 bg-gradient-to-b",
          text: "Music Director",
        };
        break;
      case "Sports Director":
        return {
          icon: solid("medal"),
          background: "from-purple-700 to-purple-900 bg-gradient-to-b",
          text: "Sports Director",
        };
        break;
      case "Faculty Advisor":
        return {
          icon: solid("user-tie"),
          background: "from-purple-700 to-purple-900 bg-gradient-to-b",
          text: "Faculty Advisor",
        };
        break;
      default:
        break;
    }
  }
  return;
}

function MemberCard({ member }: { member: Host }) {
  const nav = useNavigate();
  let clickHandler = () => {
    if (member === KRNL_HOST || member === AUTOMATED_HOST) {
      nav(`/members`);
      return;
    }
    nav(`/members/${slugify(member.name)}`);
  };
  let badge = renderBadges(member);
  return (
    <Card
      title={member.name}
      subtitle={member.splash_text}
      background={member.image}
      badge={badge}
      onClick={clickHandler}
    />
  );
}

export default MemberCard;
