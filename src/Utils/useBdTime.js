// import { useState, useEffect } from "react";
// import moment from "moment-timezone";

// const useBdTime = (utcDate) => {
//   const [btcYear, setBtcYear] = useState("");
//   const [btcTime, setBtcTime] = useState("");

//   useEffect(() => {
//     if (utcDate) {
//       const btcYearConverted = moment
//         .utc(utcDate)
//         .tz("Asia/Dhaka")
//         .format("YYYY-MM-DD");
//       const btcTimeConverted = moment
//         .utc(utcDate)
//         .tz("Asia/Dhaka")
//         .format("h:mm A");

//       setBtcYear(btcYearConverted);
//       setBtcTime(btcTimeConverted);
//     }
//   }, [utcDate]);

//   return { btcYear, btcTime };
// };

// export default useBdTime;
