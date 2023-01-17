import "./card.css"; // i wanna convert this to tailwind eventually!

function Card({
  title,
  subtitle,
  background,
  onClick,
}: {
  title: string;
  subtitle: string;
  background?: string;
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
      className="card m-1"
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
        <div className="card-image"></div>
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
