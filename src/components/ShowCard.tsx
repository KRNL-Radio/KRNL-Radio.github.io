import { useNavigate } from "react-router-dom";
import { Show } from "../data/shows";
import { slugify } from "../util/slug";
import Card from "./Card";
import createScheduleString from "../data/localizer";

function ShowCard({ show }: { show: Show }) {
  const nav = useNavigate();
  let clickHandler = () => {
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
