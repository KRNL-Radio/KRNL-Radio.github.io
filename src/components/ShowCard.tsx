import { useNavigate } from "react-router-dom";
import { Show } from "../data/shows";
import { slugify } from "../util/slug";
import Card from "./Card";

function ShowCard({ show }: { show: Show }) {
  const nav = useNavigate();
  let clickHandler = () => {
    nav(`/schedule/shows/${slugify(show.name)}`);
  };
  return (
    <Card title={show.name} subtitle={show.scheduleString} background={show.background} onClick={clickHandler} />
  );
}

export default ShowCard;
