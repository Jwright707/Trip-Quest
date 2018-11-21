import React, { Component } from "react";
import axios from "axios";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import "./list2.css";

class List extends Component {
  //    // Initialize the state
  //     constructor(props){
  //       super(props);
  //       this.state = {
  //         list:[]
  //       }
  //       this.handleSubmit = this.handleSubmit.bind(this);
  //      };

  //      handleSubmit(event){
  //       event.preventDefault();
  //       fetch("https://polar-mesa-35819.herokuapp.com/api/quest", {
  //        method: 'POST',
  //        headers: {
  //          Accept: "application/json",
  //          'Content-Type':'application/json'
  //       },
  //       body: JSON.stringify({
  //         "name": this.Name.value

  //       })
  //       });
  //   // Fetch the list on first mount
  //   componentDidMount() {
  //     this.getList();
  //   }

  //   // Retrieves the list of items from the Express app
  //   getList = () => {
  //     console.log("function to send to back end");
  //   };

  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      formFields: { name: "" }
    };
  }

  initAutocomplete = () => {
    const google = window.google;
    console.log(this.refs["pac-input"]);
    var map = new google.maps.Map(this.refs["google-map"], {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap"
    });

    // Create the search box and link it to the UI element.
    var input = this.refs["pac-input"];
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    console.log(searchBox);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  };

  // Fetch the list on first mount
  componentDidMount() {
    // this.getList();
    // this.initAutocomplete();
  }

  // Retrieves the list of items from the Express app
  // getList = () => {
  //   console.log("function to send to back end");
  // };

  inputChangeHandler(e) {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.state.formFields = formFields;
  }

  formSubmit = formFields => {
    console.log(this.state.formFields);
    axios({
      method: "post",
      url: "http://localhost:5000/api/quests",
      params: {
        ...this.state.formFields
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map(item => {
              return <div>{item}</div>;
            })}
          </div>
        ) : (
          <ListGroup className="ListGroup">
            <Form>
              <ListGroupItem active>
                <ListGroupItemHeading>Create A Quests</ListGroupItemHeading>
              </ListGroupItem>
              <br />
              <Col md={{ size: 8, offset: 2 }}>
                <FormGroup>
                  <Label for="Quest Name">Quest Name</Label>
                  <Input
                    type="text"
                    name="questName"
                    id="questName"
                    placeholder="Quest Name"
                    onChange={e => this.inputChangeHandler.call(this, e)}
                    value={this.state.formFields.questName}
                  />
                </FormGroup>
              </Col>
              <Row form>
                <Col md={8}>
                  <FormGroup>
                    <Label for="Address">Quest Location Info</Label>
                    <Input
                      type="text"
                      name="questAddress"
                      id="questAddress"
                      placeholder="Address"
                      onChange={e => this.inputChangeHandler.call(this, e)}
                      value={this.state.formFields.questAddress}
                    />
                  </FormGroup>
                  {/* <FormGroup id="map-container">
                    <Label for="map">Location</Label>
                    <Input id="pac-input" ref="pac-input" className="controls" type="text" placeholder="Search Box"/>
                    <div id="map" ref="google-map"></div>
                  </FormGroup> */}
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="Rewards">Rewards</Label>
                    <Input
                      type="text"
                      name="rewards"
                      id="rewards"
                      placeholder="Reward's Title"
                      onChange={e => this.inputChangeHandler.call(this, e)}
                      value={this.state.formFields.rewards}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={2}>
                  <FormGroup>
                    <Label for="City" />
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      onChange={e => this.inputChangeHandler.call(this, e)}
                      value={this.state.formFields.city}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="Zip Code" />
                    <Input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      placeholder="Zip Code"
                      onChange={e => this.inputChangeHandler.call(this, e)}
                      value={this.state.formFields.zipCode}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="State" />
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                      onChange={e => this.inputChangeHandler.call(this, e)}
                      value={this.state.formFields.state}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="Country" />
                    <Input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Country"
                      onChange={e => this.inputChangeHandler.call(this, e)}
                      value={this.state.formFields.country}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="RewardValue" />
                    <Input
                      type="text"
                      name="rewardValue"
                      id="rewardValue"
                      placeholder="Reward Value"
                      onChange={e => this.inputChangeHandler.call(this, e)}
                      value={this.state.formFields.rewardValue}
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="RewardQuantity" />
                    <Input
                      type="text"
                      name="rewardQuantity"
                      id="rewardQuantity"
                      placeholder="Reward Quantity"
                      onChange={e => this.inputChangeHandler.call(this, e)}
                      value={this.state.formFields.rewardQuantity}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="Description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  onChange={e => this.inputChangeHandler.call(this, e)}
                  value={this.state.formFields.description}
                />
              </FormGroup>
              <Button href="#" onClick={this.formSubmit} color="primary">
                Submit
              </Button>
            </Form>
          </ListGroup>
        )}
      </div>
    );
  }
}

export default List;
