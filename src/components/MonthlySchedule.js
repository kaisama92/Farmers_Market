import React from "react";
// import PropTypes from "prop-types";

function MonthlySchedule(props){
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <p>{props.selection}</p>
    </React.Fragment>
  );
}

// MonthlySchedule.propTypes = {
//   month: PropTypes.string,
//   selection: PropTypes.array
// };

export default MonthlySchedule;