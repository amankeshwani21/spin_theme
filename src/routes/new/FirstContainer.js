import React, { Component } from "react";
import { RoutedComponent, connect } from "routes/routedComponent";
import {
  toggleNavbarExpanded,
  toggleRightSidebar,
  setDetails
} from "../../layouts/DefaultLayout/modules/layout.js";

class FirstContainer extends RoutedComponent {
  render() {
    return (
      <div>
        <h1>Hello world..!</h1>
        <button
          onClick={() =>
            this.props.toggleRightSidebar(!this.props.rightSidebarEnabled)
          }
        >
          Toggle
        </button>
        <button onClick={() => this.props.setDetails({ name: "aman" })}>
          submit state
        </button>
      </div>
    );
  }
}
//use select
const mapStateToProps = (state) => ({
  navbarExpanded: state.layout.navbarExpanded,
  rightSidebarEnabled: state.layout.rightSidebarEnabled,
});

//use dispatch
const mapActionCreators = {
  toggleNavbarExpanded,
  toggleRightSidebar,
  setDetails,
};

export default connect(mapStateToProps, mapActionCreators)(FirstContainer);
