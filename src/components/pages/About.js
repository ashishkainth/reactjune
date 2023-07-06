import React from "react";
import UserClass from "../Cards/UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About User details</h1>
        <UserClass
          name="Ashish Kainth Class"
          username="Kainthashish"
          city="Patiala"
        />
      </div>
    );
  }
}

export default About;
