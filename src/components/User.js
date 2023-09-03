import { useState } from "react";

const User = (props) => {
  const { name, city, job } = props;
  return (
    <div className="user-card">
      <h1>Name- {name}</h1>
      <h3> {city}</h3>
      <h3> {job}</h3>
    </div>
  );
};
export default User;
