import React, { Component } from 'react';
import UserClass from './UserClass';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div className="aboutUs-page">
          <h1>Welcome to About Us page</h1>
          <hr />
          <UserClass name={'Anish'} location={'Chennai, Tamil Nadu'} />
          <hr />
        </div>
      </>
    );
  }
}

export default About;
