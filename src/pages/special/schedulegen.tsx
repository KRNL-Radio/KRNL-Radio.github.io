import { DateTime } from "luxon";
import React from "react";
import Header from "../../components/Header";
// import { DateTime } from "ts-luxon";
import { ScheduleItem } from "../../data/schedule";

function ScheduleGeneratorPage() {
  // create a state for the dates
  let [dates, setDates] = React.useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  // create a state for the start time
  let [startTime, setStartTime] = React.useState({
    hour: 0,
    minute: 0,
    string: "12:00 AM",
  });
  // create a state for the duration
  let [duration, setDuration] = React.useState({
    hour: 1,
    minute: 0,
    string: "1:00",
  });

  let [output, setOutput] = React.useState("");

  React.useEffect(() => {
    // get the duration
    let durationDT = DateTime.fromObject({
      hour: duration.hour,
      minute: duration.minute,
    });

    let fields = ScheduleItem.getParserFields();
    // convert startTime.hour to a number
    fields.hour = [Number(startTime.hour)];
    fields.minute = [Number(startTime.minute)];
    fields.dayOfWeek = [
      dates.sunday ? 0 : -1,
      dates.monday ? 1 : -1,
      dates.tuesday ? 2 : -1,
      dates.wednesday ? 3 : -1,
      dates.thursday ? 4 : -1,
      dates.friday ? 5 : -1,
      dates.saturday ? 6 : -1,
    ].filter((v) => v !== -1);
    let totalDuration = Number(duration.hour) * 60 + Number(duration.minute);
    if (fields.dayOfWeek.length === 0) {
      setOutput("No days selected");
    } else {
      let parser = ScheduleItem.getParser();
      let exp = parser.fieldsToExpression(fields);
      let nextDate = exp.next().toDate();
      let nextDateDT = DateTime.fromJSDate(nextDate);
      let endDT = nextDateDT.plus({
        hours: durationDT.hour,
        minutes: durationDT.minute,
      });
      setOutput(
        // exp.stringify() +
        //   "\n" +
        //   totalDuration +
        //   "\n" +
        //   nextDateDT.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY) +
        //   "\n" +
        //   endDT.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)
        `Cron: ${exp.stringify()}
Duration: ${totalDuration}
Start: ${nextDateDT.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
End: ${endDT.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}`
      );
    }
  }, [dates, startTime, duration]);

  function dateCheckboxCb(e: any) {
    // get the name of the checkbox
    let name = e.target.name;
    // get the value of the checkbox
    let value = e.target.checked;
    // set the state
    setDates({
      ...dates,
      [name]: value,
    });
  }

  function startDateCb(e: any) {
    // get the name of the input
    let name = e.target.name;
    // get the value of the input
    let value = e.target.value;
    let state = {
      ...startTime,
      [name]: value,
    };

    // create a new time string in the format HH:MM AM/PM
    let newTimeString = "";
    let dt = DateTime.fromObject({ hour: state.hour, minute: state.minute });
    newTimeString = dt.toFormat("hh:mm a");

    // set the state
    setStartTime({
      ...state,
      string: newTimeString,
    });

    let durationDT = DateTime.fromObject({
      hour: duration.hour,
      minute: duration.minute,
    });
    let endDT = dt.plus({ hours: durationDT.hour, minutes: durationDT.minute });
    setDuration({
      ...duration,
      string:
        durationDT.toFormat("H:mm") + " (" + endDT.toFormat("hh:mm a") + ")",
    });
  }

  function durationCb(e: any) {
    // get the name of the input
    let name = e.target.name;
    // get the value of the input
    let value = e.target.value;
    let state = {
      ...duration,
      [name]: value,
    };

    // create a new time string in the format HH:MM AM/PM
    let newTimeString = "";
    let dt = DateTime.fromObject({ hour: state.hour, minute: state.minute });
    let startDT = DateTime.fromObject({
      hour: startTime.hour,
      minute: startTime.minute,
    });
    let endDT = startDT.plus({ hours: state.hour, minutes: state.minute });

    newTimeString =
      dt.toFormat("H:mm") + " (" + endDT.toFormat("hh:mm a") + ")";

    // set the state
    setDuration({
      ...state,
      string: newTimeString,
    });
  }

  return (
    <div className="text-white">
      <Header />
      {/* 0 - sunday 1 - monday... */}
      {/* seconds = 0 */}
      {/* minutes = 0..55 by 5 */}
      {/* hours = 0..23 */}
      {/* duration same thing as mins/hours */}
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold">Schedule Generator</h1>
        <div className="form-control">
          <h2 className="text-2xl font-bold">Weekday</h2>
          <div>
            <label className="label cursor-pointer">
              <span className="label-text text-white">Sunday</span>
              <input
                type="checkbox"
                name="sunday"
                checked={dates.sunday}
                onChange={dateCheckboxCb}
                className="checkbox checkbox-primary"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text text-white">Monday</span>
              <input
                type="checkbox"
                name="monday"
                checked={dates.monday}
                onChange={dateCheckboxCb}
                className="checkbox checkbox-primary"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text text-white">Tuesday</span>
              <input
                type="checkbox"
                name="tuesday"
                checked={dates.tuesday}
                onChange={dateCheckboxCb}
                className="checkbox checkbox-primary"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text text-white">Wednesday</span>
              <input
                type="checkbox"
                name="wednesday"
                checked={dates.wednesday}
                onChange={dateCheckboxCb}
                className="checkbox checkbox-primary"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text text-white">Thursday</span>
              <input
                type="checkbox"
                name="thursday"
                checked={dates.thursday}
                onChange={dateCheckboxCb}
                className="checkbox checkbox-primary"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text text-white">Friday</span>
              <input
                type="checkbox"
                name="friday"
                checked={dates.friday}
                onChange={dateCheckboxCb}
                className="checkbox checkbox-primary"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text text-white">Saturday</span>
              <input
                type="checkbox"
                name="saturday"
                checked={dates.saturday}
                onChange={dateCheckboxCb}
                className="checkbox checkbox-primary"
              />
            </label>
          </div>
          <h2 className="text-2xl font-bold">Start Time</h2>
          <div>
            <input
              type="range"
              min="0"
              max="23"
              name="hour"
              value={startTime.hour}
              onChange={startDateCb}
              className="range border-cyan-600 border"
            />
            <input
              type="range"
              min="0"
              max="55"
              step="5"
              name="minute"
              value={startTime.minute}
              onChange={startDateCb}
              className="range border-cyan-600 border"
            />
            <div>{startTime.string}</div>
          </div>
          <h2 className="text-2xl font-bold">Duration</h2>
          <div>
            <input
              type="range"
              min="0"
              max="23"
              name="hour"
              value={duration.hour}
              onChange={durationCb}
              className="range border-cyan-600 border"
            />
            <input
              type="range"
              min="0"
              max="55"
              step="5"
              name="minute"
              value={duration.minute}
              onChange={durationCb}
              className="range border-cyan-600 border"
            />
            <div>{duration.string}</div>
          </div>
          <h2 className="text-2xl font-bold">Output</h2>
          <div>
            <textarea
              className="textarea w-96 h-64 textarea-bordered textarea-primary bg-slate-800"
              value={output}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleGeneratorPage;
