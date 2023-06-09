import React from "react";
import Schedule from "./Schedule";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
  },
];

function DailySchedule(number) {
  const currentDay = marketSchedule[number]
  return (
    <React.Fragment>
      <hr />
        <Schedule
          day={currentDay.day}
          location={currentDay.location}
          hours={currentDay.hours}
          booth={currentDay.booth}
        />
    </React.Fragment>
  )
}



// function DailySchedule(index) {
//   let Key = index;
//   return (
//     <React.Fragment>
//       <hr />
//       {marketSchedule.map((Day, Key) => (
//         <Schedule
//           day={Day.day}
//           location={Day.location}
//           hours={Day.hours}
//           booth={Day.booth}
//           key={index}
//         />
//       ))}
//     </React.Fragment>
//   );
// }

export default DailySchedule;
