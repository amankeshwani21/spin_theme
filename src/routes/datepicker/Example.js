import { RoutedComponent, connect } from "routes/routedComponent";
import React from "react";
import DatePicker from "react-simple-datepicker";
import "react-simple-datepicker/dist/index.css";
import TimeZone from "./TimeZone";
import moment from "moment-timezone";
import classes from "./datepicker.scss";
import TimeRanges from "./TimeRanges";

class Example extends RoutedComponent {
  constructor() {
    super();
    this.state = {
      startDate: moment().toString(),
      endDate: moment().toString(),
      status: false,
      toggle: false,
      timeRanges: "Relative time ranges",
      timeZone: {
        value: "Asia/Kolkata",
        place: "Kolkata",
      },
    };
  }

  handleTimeZone = (time) => {
    this.setState({ status: false });
    // console.log(id);
    this.setState({ timeZone: time });
    this.changeTimeZone();
  };
  handleRanges = (ranges) => {
    // console.log(id);
    const now = moment(this.state.startDate);
    var res = ranges.split(" ");
    const subtract = now.subtract(res[1], res[2]);
    //with moment keys can be appriviated
    console.log(subtract.format("dddd Do MMMM, YYYY"));
    console.log(subtract.format("MM/DD/YYYY, h:mm:ss"));
    this.setState({ timeRanges: ranges });
  };

  changeTimeZone = () => {
    var start = moment.tz(this.state.startDate, this.state.timeZone.value);
    var end = moment.tz(this.state.endDate, this.state.timeZone.value);
    this.setState({ startDate: start.format() });
    this.setState({ endDate: end.format() });

    // console.log
    console.log("updated time zones");
    console.log(start.format());
    console.log(end.format());
    console.log("---------------");
  };

  handleStarDate = (date) => {
    var start = moment.tz(date._d, this.state.timeZone.value);
    this.setState({ startDate: start.format() });

    var end = moment.tz(this.state.endDate, this.state.timeZone.value);
    this.setState({ endDate: end.format() });
  };

  handleEndDate = (date) => {
    var end = moment.tz(date._d, this.state.timeZone.value);
    this.setState({ endDate: end.format() });

    var start = moment.tz(this.state.startDate, this.state.timeZone.value);
    this.setState({ startDate: start.format() });
  };

  submitDetails = () => {
    if (this.state.startDate > this.state.endDate) {
      alert("please select valid date");
    } else {
      alert("valid date");
    }
  };
  render() {
    // console.log(`start date-${this.state.startDate.toLocaleString()}`);
    // console.log(`end date-${this.state.endDate.toLocaleString()}`);
    // console.log(this.state.timeZone.value);

    // console.log(this.state.endDate);
    // console.log(
    //   moment.tz(`${this.state.timeZone.value}`).format("YYYY-MM-DD h:mm:ss")
    // );

    return (
      // <button onClick={()=>this.setState({toggle:!this.state.toggle})}>toggle</button>
      <div>
        <button
          className={classes.tooglebutton}
          onClick={() =>
            this.setState({ toggle: !this.state.toggle, status: false })
          }
        >
          <div className={classes.tooglebtntext}>
            <span className={classes.togglebtntext_inside}>
              {this.state.timeRanges}
            </span>
          </div>
          {this.state.timeRanges}
        </button>
        {this.state.toggle ? (
          <div className={classes.main}>
            <div className={classes.main_box}>
              <div className={classes.mainbox_left}>
                <div className={classes.mainboxleft_upper}>
                  <div className={classes.mainbleftup_f}>
                    Absolute time range
                  </div>
                  <div className={classes.mainbox_input}>
                    <div className={classes.mainbinput_label}>From</div>
                    <button className={classes.mainbinput_box}>
                      <DatePicker
                        calendarClassName={classes.calendar}
                        inputClassName={classes.datepicker__input}
                        date={this.state.startDate}
                        clickOnDate={this.handleStarDate}
                      />
                    </button>
                  </div>
                  <div className={classes.mainbox_input}>
                    <div className={classes.mainbinput_label}>To</div>
                    <button className={classes.mainbinput_box}>
                      <DatePicker
                        calendarClassName={classes.calendar}
                        inputClassName={classes.datepicker__input}
                        date={this.state.endDate}
                        clickOnDate={this.handleEndDate}
                      />
                    </button>
                  </div>
                  <button
                    onClick={this.submitDetails}
                    className={classes.applychanges}
                  >
                    <span className={classes.applychanges_inside}>
                      Apply time range
                    </span>
                  </button>
                </div>
                <div className={classes.mainboxleft_lower}>
                  <div className={classes.mainbllower_head}>
                    Recently used absolute ranges
                  </div>
                  <div className={classes.mainbllower_content}>
                    2021-03-20 00:00:00 to 2021-04-01 23:59:59
                    {/* <h1>{this.state.startDate}</h1> */}
                  </div>
                </div>
              </div>
              <div className={classes.mainbox_right}>
                <TimeRanges handleRanges={this.handleRanges} />
              </div>
            </div>
            {this.state.status ? (
              <TimeZone handle={this.handleTimeZone} />
            ) : (
              <div className={classes.main_bottom}>
                <div className={classes.mainbottom_time}>
                  <div className={classes.mainbottomtime_left}>
                    <div className={classes.mainbleft}>
                      {this.state.timeZone.value}
                    </div>
                    <div className={classes.mainbmiddle}></div>
                    <div className={classes.mainbright}>
                      {this.state.timeZone.place}
                      {`, ${moment.tz(this.state.timeZone.value).zoneAbbr()}`}
                    </div>
                  </div>
                  <span className={classes.mainbottom_utc}>UTC+05:30</span>
                </div>
                <button
                  className={classes.mainbtn}
                  onClick={() => this.setState({ status: !this.state.status })}
                >
                  <span className={classes.mainbtn_inside}>
                    Change time zone
                  </span>
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect()(Example);
