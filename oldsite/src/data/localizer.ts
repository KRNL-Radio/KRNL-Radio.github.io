import { DateTime } from "luxon";
import { ScheduleItem } from "./schedule";

function getTimezoneOffset() {
  const date = new Date();
  return -date.getTimezoneOffset();
}

function getTimeFormatter() {
  return new Intl.DateTimeFormat("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
}

export default function createScheduleString(schedule: ScheduleItem) {
  // TODO: this will break and break horribly once shows happen more than once a week
  // or every other week
  const time_formatter = getTimeFormatter();
  const day_formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  });
  if (schedule.getNextOccurance() === undefined) {
    return "No upcoming shows";
  }
  const start = dateToKRNLDate(schedule.getNextOccurance()!);
  const end = dateToKRNLDate(schedule.endToDate());
  console.log(start, end);
  // something like Every Tuesday from 6:00 PM to 8:00 PM
  return `Every ${day_formatter.format(start)} from ${time_formatter.format(
    start,
  )} to ${time_formatter.format(end)}`;
}

export function dateToKRNLDate(date: Date) {
  // TODO: convert date (which is in any timezone) to central time!
  return DateTime.fromJSDate(date)
    .setZone("America/Chicago", {
      keepLocalTime: false,
    })
    .toJSDate();
}
