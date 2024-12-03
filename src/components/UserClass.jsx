import React, { Component } from 'react';

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log('timer updates once every 1 sec');
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // If that particular state updates then re-render
    if (this.state.count !== prevState.count) {
      //updates
      console.log('updated');
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('willunmount');
  }

  render() {
    // const { name, location } = this.props;
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <>
        <div className="user-card">
          <h2>Count: {count}</h2>
          <div>
            <button
              className="increment-btn"
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                });
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                this.setState({
                  count: this.state.count - 1,
                });
              }}
            >
              -
            </button>
          </div>
          <br />
          <img src={avatar_url} />
          <h2>Name: {name}</h2>
          <h2>Location: {location}</h2>
          <h2>Contact: +91 7732848728</h2>
        </div>
      </>
    );
  }
}

export default UserClass;
