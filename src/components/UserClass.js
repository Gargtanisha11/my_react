import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
   
  }
  componentDidMount() {
  }
  render() {
    const { name, job, city } = this.props;
    const { count } = this.state;
    console.log("Render  Child");
    return (
      <div className="user-card">
        <h1>Name- {name}</h1>
        <h3>{city}</h3>
        <h3> {job}</h3>
      </div>
    );
  }
}
export default UserClass;
