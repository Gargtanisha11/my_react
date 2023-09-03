import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: "dummy",
      },
    };
    
  }
  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/Gargtanisha11");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //     user:json,
    // })
  }

  render() {
     const{ name,location,avatar_url}=this.state.user;
    return (
      <div>
        <h1> About us</h1>
        <h3> this is practice project for React</h3>
       
        <UserClass
          name={name}
          city={location}
          img={avatar_url}
          job={" software developer"}
        />
      </div>
    );
  }
}

export default About;
