import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    const { name, contact } = this.props;
    return (
      <div className="user-card">
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState((prev) => ({
              count: prev.count + 1,
            }));
          }}
        >
          Inc Count
        </button>
        <h2>Name: {name}</h2>
        <h3> Contact- {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
