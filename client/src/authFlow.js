import React, { Component } from "react";
import axios from "axios";
// import smartcar from 'smartcar';

class CarRequest extends React.Component {
  constructor() {
    super()

    this.data = {};
  }

  state = {
    url: null
  };

  handleCar = async () => {

    //Sends Script To API and get 
    // Performing a GET request
    const response = await axios.get(
      "https://polar-mesa-35819.herokuapp.com/car",
      {
        headers: {
          "Access-Control-Allow-Origin":
            "https://polar-mesa-35819.herokuapp.com" //the token is a variable which holds the token
        }
      }
    );
    const json = await response;
    console.log(json); // ex.: { user: 'Your User'}
    // ex.: 200
    console.log(json.data[0]);
    this.setState({
      url: json.data[0].authUrl
    });

    window.location.href = this.state.url;
  }


  render() {
    return (
      <div className="startQuest">
        <button onClick={this.handleCar}>
          {this.state.url === null ? "Start Quest" : "Log Out"}
        </button>
      </div>
    );
  }
}

export default CarRequest;
