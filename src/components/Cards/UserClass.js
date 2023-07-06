import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count2: 1, userInfo: {} };
    console.log("Child Constructor ");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ashishkainth");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log("Child componentDidMount ");
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate ");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount ");
  }

  render() {
    const { name, city, username } = this.props;
    console.log("Child render");
    return (
      <div>
        <h1>Name: {this.state.userInfo.name}</h1>
        <img alt="user-logo" src={this.state.userInfo.avatar_url}></img>
        <h2>City: {city}</h2>
        <h4>Username: {username}</h4>
        <h4>Location: {this.state.userInfo.location}</h4>
        <h4>Count Info: {this.state.count}</h4>
        <h4>Count2 Info: {this.state.count2}</h4>
        <button
          style={{ margin: 10 }}
          onClick={() => {
            this.setState({ count2: this.state.count2 + 1 });
          }}
        >
          Update Count
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update Count 2
        </button>
      </div>
    );
  }
}

export default UserClass;
