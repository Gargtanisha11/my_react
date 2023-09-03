import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    const data = await fetch();
  }
  render() {
    return (
      <div>
        <h1> About us</h1>
        <h3> this is practice project for React</h3>
        <User
          name={" Tanisha Garg"}
          city={"Ghaziabad "}
          job={" software developer"}
        />
        <UserClass
          name={" Tanisha Garg"}
          city={"Ghaziabad "}
          job={" software developer"}
        />
      </div>
    );
  }
}

export default About;
