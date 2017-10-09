import axios from 'axios';

export const getUsers = (n, callback) => {
  axios.get(`https://swapi.co/api/people/${n}`, users => {
    callback(users)
    console.log(users);
  })
}

import React, { Component } from 'react';

class MainComponent extends Component {
  constructor() {
    super()
    this.state={
      eventName: 'React Event',
      users: {}
    }
  }

  componentDidMount(){
    getUsers(6, users => {
      this.setState({
        users
      })
    })
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default MainComponent;