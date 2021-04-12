import React, { Component } from "react";
import { timeZone } from "./time";
import moment from "moment-timezone";
import Select from "react-select";
// import classes from "./timezone.scss";
import "react-select/dist/react-select.css";
import "./timezone.css"

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "2px dotted green",
    color: state.isSelected ? "yellow" : "black",
    backgroundColor: state.isSelected ? "green" : "white",
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "5%",
  }),
};

export default class TimeZone extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
    this.props.handle(selectedOption);
  };
  componentDidMount() {
    timeZone.map((item) => {
      if (item.place == "Browser") {
        item.label = "Browser";
      } else {
        item.label =
          "(UTC" +
          moment(moment.tz(item.value)).format("Z") +
          ") " +
          item.place;
      }
    });
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={timeZone}
          placeholder="Type to search (country, city, abbreviation)"
          
        />
      </div>
    );
  }
}
