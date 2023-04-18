import React from 'react';
import ScheduleList from './ScheduleList';
import ProduceSchedule from './ProduceSchedule';
import DailySchedule from './ScheduleList';


class ScheduleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      produceVisibleOnPage: false,
      weeklySchedule: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      produceVisibleOnPage: !prevState.produceVisibleOnPage
    }));
    window.scrollTo(0, 0);
  }

  handleSwitchPage = () => {
    if (this.state.weeklySchedule === 5) {
      this.setState(prevState => ({
        weeklySchedule: prevState.weeklySchedule - 5
      }));
    } else {
      this.setState(prevState => ({
        weeklySchedule: prevState.weeklySchedule + 1
      }));
    }
  }

  

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let thisDay = null;
    if (this.state.produceVisibleOnPage) {
      currentlyVisibleState = <ProduceSchedule />;
      buttonText = "Return to Weekly Schedule";
      } else {
        thisDay = DailySchedule(this.state.weeklySchedule);
        currentlyVisibleState = thisDay;
        buttonText = "View";
      } 

    return (
      <React.Fragment>
        {currentlyVisibleState}
        {!this.state.produceVisibleOnPage && <button onClick={this.handleSwitchPage}>Next Day</button>}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ScheduleControl;

// render() {
//   this.handleLoad();
//   return (
//       <React.Fragment>
//           {this.state.currentDay !== null && // Use conditional rendering with logical AND
//               DateControl.marketSchedule[this.state.currentDay].location}
//       </React.Fragment>
//   );
// }