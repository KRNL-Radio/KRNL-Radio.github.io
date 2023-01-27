import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./card.css"; // i wanna convert this to tailwind eventually!

export type CardBadge = {
  icon?: IconDefinition;
  text?: string;
  background?: string;
};

function Card({
  title,
  subtitle,
  background,
  badge,
  onClick,
}: {
  title: string;
  subtitle: string;
  background?: string;
  badge?: CardBadge;
  onClick?: () => void;
}) {
  if (onClick === undefined) {
    onClick = () => {};
  }

  // if (background !== undefined) {
  //   background = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), url(${background})`;
  // }

  if (background === undefined) {
    background =
      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%)";
  } else {
    if (background.startsWith("http") || background.startsWith("/")) {
      background = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), url(${background})`;
    } else if (background.startsWith("#")) {
      background = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), ${background}`;
    } else {
      console.error("Invalid background type!");
      background = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%), url(${background})`;
      // background = "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 100%)";
    }
  }

  return (
    <div
      className="card m-1 overflow-hidden"
      onMouseMove={(e) => {
        for (const card of Array.from(
          document.getElementsByClassName(
            "card"
          ) as HTMLCollectionOf<HTMLElement>
        )) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }}
      onClick={onClick}
    >
      <div
        className="card-content"
        style={{
          background: background,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="card-badge-wrapper h-[140px]">
          {badge !== undefined && (
            <div
              className={`origin-top p-2 float-right mt-9 mr-9 w-72 text-center translate-x-[50%] rotate-45 z-4 ${
                badge.background || "bg-purple-500"
              }`}
            >
              {badge.icon !== undefined && (
                <FontAwesomeIcon
                  icon={badge.icon}
                  className="text-white text-lg"
                />
              )}
              <p className="text-white text-md font-bold">{badge.text}</p>
            </div>
          )}
        </div>
        {/* <div className="card-image"></div> */}
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="card-info-title">
              <h3>{title}</h3>
              <h4>{subtitle}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
