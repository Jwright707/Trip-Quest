
import React, { Component } from "react";

import React, { Component } from 'react';


class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }
}
export default Dashboard;
// import React, { Component } from "react";
//
//
// class Dashboard extends React.Component {
//
//
//   //Call API with  Script Given to Send Script
//   componentDidMount = async (event) => {
//     const settings = {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'Mode': 'no-cors'
//       },
//     };
//     const response = await fetch("https://polar-mesa-35819.herokuapp.com/request", settings)
//     const json = await response
//     console.log(json);
//   }
//
//   render() {
//     return <div>Dash</div>;
//     return (
//       <div>
//         Dash
//         </div>
//
//     );
//   }
// }
// export default Dashboard;
// import React, { Component } from "react";
// import Cookies from "universal-cookie";

// class Dashboard extends React.Component {
//   // Initialize the state


//   componentDidMount() {
//     async event => {
//       // //will return with ID, With Settings For Post Request
//   DidMount = () => {

//     const funct = async (event) => {

//       // //will return with ID, With Settings For Post Request
//       // const settings = {
//       //   method: 'POST',
//       //   headers: {
//       //     Accept: 'application/json',
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify({
//       //     "script": this.script
//       //   }),
//       // };

//       //Sends Script To API and get Id
//       const response = await fetch("/callback");
//       const json = await response.json();
//       const response = await fetch('https://polar-mesa-35819.herokuapp.com/callback/')
//       const json = await response.json()
//       console.log(json);

//       return alert("Must Have Valid Input");
//     };
//   }

//   requireAuth = () => {
//     if (!localStorage.getItem("token")) {
//       // go to login route
//     }
//   };
//   // stay on this route since the user is authenticated

//   verifyAuth = () => {
//     if (localStorage.getItem("token")) {
//       // go to your dashboard or home route
//     }
//     // stay on this route since the user is not authenticated
//   };

//   render() {
//     return <div>Dash</div>;
//     return (
//       <div onClick={this.DidMount}>
//         Dash
//         </div>

export default Map
