import React, { Component } from "react";
import { Media } from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import "./list2.css";

// class List2 extends Component {
// state = {
//   data: {
//     active: null,
//     inactive: null,
//     total: null,
//     parents: [],
//     children: []
//   },
//   error: null,
//   loading: false
// };

// componentDidMount() {
//   this.fetch();
// }

// componentDidUpdate(prevState) {
//   const newId = this.props.match.params.id;
//   const oldId = prevState.match.params.id;
//   if (newId !== oldId) this.fetch();
// }

// fetch() {
//   this.setState({ error: null, loading: true });

//   const id = Number(this.props.match.params.id);

//   axios
//     .get(`https://polar-mesa-35819.herokuapp.com//${id}`)
//     .then(resp => this.setState({ data: resp.data.company }))
//     .catch(error => this.setState({ error: error.message }))
//     .finally(() => this.setState({ loading: false }));
// }

// // Fetch the list on first mount
// componentDidMount() {
//   this.getList();
// }

class List2 extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    console.log("function to send to back end");
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
          <div>
            <div>
              <ListGroup className="ListGroup">
                <ListGroupItem active>
                  <ListGroupItemHeading>Quests</ListGroupItemHeading>
                </ListGroupItem>
                <ListGroupItem>
                  <span className="ListItem">
                    <ListGroupItemHeading>Sac Hacks 2018</ListGroupItemHeading>
                    <ListGroupItemText tags="a" href="">
                      Design. Code. Launch. SacHacks is the first major
                      intercollegiate hackathon in the Sacramento, California
                      area. Our passion is to cultivate the untapped potential
                      of those in Sac by providing them with the opportunity to
                      launch their ideas in a public venue. We provide the
                      place, you bring your ideas, and we have a friendly
                      competition between all creative coders to launch their
                      ideas into action during a 24-hour hackathon.
                    </ListGroupItemText>
                  </span>
                  <hr />
                  <span className="ListItem">
                    <ListGroupItemHeading>
                      Sacramento Kings Basketball Game
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      The Sacramento Kings are an American professional
                      basketball team based in Sacramento, California. The Kings
                      compete in the National Basketball Association (NBA) as a
                      member of the Western Conference's Pacific Division. The
                      Kings are the only team in the major professional North
                      American sports leagues located in Sacramento. The team
                      plays its home games at the Golden 1 Center.
                    </ListGroupItemText>
                  </span>
                  <hr />
                  <span className="ListItem">
                    <ListGroupItemHeading>Burning Man</ListGroupItemHeading>
                    <ListGroupItemText>
                      Burning Man is an annual experiment in temporary community
                      dedicated to radical self-expression and radical
                      self-reliance. Our First-timers Guide is a good place to
                      start for an understanding of our annual event in Black
                      Rock City.
                    </ListGroupItemText>
                  </span>
                  <hr />
                  <span className="ListItem">
                    <ListGroupItemHeading>Grand Canyon</ListGroupItemHeading>
                    <ListGroupItemText>
                      Grand Canyon National Park. Carved out by the Colorado
                      River, the Grand Canyon (nearly 1,500 m deep) is the most
                      spectacular gorge in the world. Located in the state of
                      Arizona, it cuts across the Grand Canyon National Park.
                    </ListGroupItemText>
                  </span>
                  <hr />
                  <span className="ListItem">
                    <ListGroupItemHeading>
                      San Francisco Giants Baseball Game
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      The San Francisco Giants are an American professional
                      baseball team based in San Francisco, California. Founded
                      in 1883 as the New York Gothams, and renamed three years
                      later the New York Giants, the team eventually moved to
                      San Francisco in 1958.
                    </ListGroupItemText>
                  </span>
                  <hr />
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default List2;
