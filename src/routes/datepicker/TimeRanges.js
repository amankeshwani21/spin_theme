import React, { Component } from "react";
import classes from "./timeRanges.scss";
import moment from "moment";

const relative_ranges = [
  "Last 5 minutes",
  "Last 15 minutes",
  "Last 30 minutes",
  "Last 1 hour",
  "Last 3 hours",
  "Last 6 hours",
  "Last 12 hours",
  "Last 24 hours",
  "Last 2 days",
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
  "Last 1 year",
  "Last 2 years",
  "Last 5 years",
];

const quick_ranges = [
  "Yesterday",
  "Day before yesterday",
  "This day last week",
  "Previous week",
  "Previous month",
  "Previous year",
  "Today",
  "Today so far",
  "This week",
  "This week so far",
  "This month",
  "This month so far",
  "This year",
  "This year so far",
];

export default class TimeRanges extends Component {
  constructor(props) {
    super(props);
  }

  // state = {
  //   selectedOption: null,
  // };
  handleChange = (selectedOption) => {
    // this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
    this.props.handleRanges(selectedOption);
  };
  render() {
    return (
      <div className={classes.timeRanges}>
        <p className={classes.items__heading}> Relative time ranges</p>
        {relative_ranges.map((relative_ranges, index) => (
          <p
            className={classes.items}
            onClick={() => this.handleChange(relative_ranges)}
          >
            {relative_ranges}
          </p>
        ))}
        <p className={classes.items__qheading}> Other quick ranges</p>
        {quick_ranges.map((quick_ranges, index) => (
          <p
            className={classes.items}
            onClick={() => this.handleChange(quick_ranges)}
          >
            {quick_ranges}
          </p>
        ))}
      </div>
    );
  }
}
