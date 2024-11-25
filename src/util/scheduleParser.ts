import type { CronExpression, ParserOptions } from "cron-parser";
import { parseExpression } from "cron-parser";

const PARSER_OPTIONS: ParserOptions = {
  tz: "America/Chicago",
};

export type ScheduleType = {
  start: string;
  duration: number;
  parseType: "cron" | "block";
  invalidBefore?: Date;
  invalidAfter?: Date;
  invalidBetween?: Date[]; // length 2
};

export class Schedule {
  parsed: CronExpression;
  constructor(public schedule: ScheduleType) {
    this.schedule = schedule;
    this.parsed = parseSchedule(schedule);
  }

  getStartOfNextOccurance() {
    // gets the next start time
    // will return a date object, or null if the next occurance is invalid (like if the show hits invalidAfter)
    // if the next date is before invalidBefore, or inbetween invalidBetween, it will skip to the next valid date
    let next = this.parsed.next().toDate();
    while (true) {
      if (this.schedule.invalidAfter && next >= this.schedule.invalidAfter) {
        return null;
      }
      if (this.schedule.invalidBefore && next < this.schedule.invalidBefore) {
        next = this.parsed.next().toDate();
        continue;
      }
      if (
        this.schedule.invalidBetween &&
        next >= this.schedule.invalidBetween[0] &&
        next < this.schedule.invalidBetween[1]
      ) {
        next = this.parsed.next().toDate();
        continue;
      }
      return next;
    }
  }

  getEndOfNextOccurance() {
    const start = this.getStartOfNextOccurance();
    if (start === null) {
      return null;
    }
    return new Date(start.getTime() + this.schedule.duration * 60000);
  }

  isCurrentlyOccuring() {
    let now = new Date();
    if (this.schedule.invalidAfter && now >= this.schedule.invalidAfter) {
      return false;
    }
    let next = this.parsed.next().toDate();
    let prev = this.parsed.prev().toDate();
    // we gotta work
    let endA = new Date(next.getTime() + this.schedule.duration * 60000);
    let endB = new Date(prev.getTime() + this.schedule.duration * 60000);
    // which one is closer?
    let start = prev;
    let end = endB;
    if (
      Math.abs(now.getTime() - next.getTime()) <
      Math.abs(now.getTime() - prev.getTime())
    ) {
      start = next;
      end = endA;
    }

    return now >= start && now <= end;
  }

  getStartOfCurrentOccurance() {
    // return null if no occurance is currently happening
    if (!this.isCurrentlyOccuring()) {
      return null;
    }
    let now = new Date();
    let next = this.parsed.next().toDate();
    let prev = this.parsed.prev().toDate();
    // we gotta work
    let endA = new Date(next.getTime() + this.schedule.duration * 60000);
    let endB = new Date(prev.getTime() + this.schedule.duration * 60000);
    // which one is closer?
    let start = prev;
    if (
      Math.abs(now.getTime() - next.getTime()) <
      Math.abs(now.getTime() - prev.getTime())
    ) {
      start = next;
    }
    return start;
  }

  getEndOfCurrentOccurance() {
    let start = this.getStartOfCurrentOccurance();
    if (start === null) {
      return null;
    }
    return new Date(start.getTime() + this.schedule.duration * 60000);
  }

  toLongString() {
    // FIXME: this will break and break horribly once shows happen more than once a week
    // or every other week
    const time_formatter = getTimeFormatter();
    const day_formatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
    });
    if (this.getStartOfNextOccurance() === null) {
      return "No upcoming shows";
    }
    const start = this.getStartOfNextOccurance()!;
    const end = this.getEndOfNextOccurance()!;
    // something like Every Tuesday from 6:00 PM to 8:00 PM
    return `Every ${day_formatter.format(start)} from ${time_formatter.format(
        start,
    )} to ${time_formatter.format(end)}`;
  }
}

function parseSchedule(schedule: ScheduleType) {
  if (schedule.parseType === "cron") {
    return parseCronSchedule(schedule.start);
  } else {
    return parseBlockSchedule(schedule.start);
  }
}

function parseCronSchedule(cron: string) {
  return parseExpression(cron, PARSER_OPTIONS);
}

function parseBlockSchedule(cron: string) {
  throw new Error("Not implemented yet!");
  return parseExpression(cron, PARSER_OPTIONS);
}

// LOCALIZATION

export function getTimezoneOffset() {
  return -new Date().getTimezoneOffset();
}

export function getTimeFormatter() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export function convertToKRNLDate(date: Date) {
  // convert to central time
  throw new Error(
    "Not implemented! Well i mean it is but i dont know where its used per se",
  );
  const offset = getTimezoneOffset();
  const new_date = new Date(date);
  new_date.setMinutes(new_date.getMinutes() + offset);
  return new_date;
}
