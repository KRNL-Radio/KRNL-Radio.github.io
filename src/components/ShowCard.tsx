import { useNavigate } from "react-router-dom";
import { Show } from "../data/shows";
import { slugify } from "../util/slug";
import Card from "./Card";
import createScheduleString from "../data/localizer";

function ShowCard({ show, should_nav }: { show: Show; should_nav?: boolean }) {
  if (should_nav === undefined) {
    should_nav = true;
  }
  const nav = useNavigate();
  let clickHandler = () => {
    if (!should_nav) {
      return;
    }
    nav(`/schedule/shows/${slugify(show.name)}`);
  };
  let bg = show.logo?.opaque || show.background;
  return (
    <Card
      title={show.name}
      subtitle={createScheduleString(show.schedule)}
      background={bg}
      onClick={clickHandler}
    />
  );
}

export default ShowCard;
