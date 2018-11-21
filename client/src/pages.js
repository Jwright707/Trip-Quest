import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import "./pages.css";
import CarRequest from "./authFlow";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="sub-header">
          <CarRequest />
        </h1>
        <Breadcrumb>
          <Row>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Col xs="6">
                <Card body>
                  <CardBody>
                    <CardImg
                      top
                      width="100%"
                      src={require("./business.jpg")}
                      alt="Card image cap"
                    />

                    <CardTitle className="CardTitle">Create a Quest</CardTitle>
                    <CardSubtitle />
                    <CardText>
                      Get more people to attend your event today and create a
                      Quest!
                    </CardText>
                  </CardBody>
                  <Link to={"./list"}>
                    <BreadcrumbItem>
                      <Button color="primary" size="lg" className="Button">
                        Create
                      </Button>
                    </BreadcrumbItem>
                  </Link>
                </Card>
              </Col>

              <Col xs="6">
                <Card body>
                  <CardBody>
                    <CardImg
                      top
                      width="100%"
                      src={require("./vacation.jpg")}
                      alt="Card image cap"
                    />
                    <CardTitle className="CardTitle">
                      Search for a Quest
                    </CardTitle>
                    <CardSubtitle />
                    <CardText>
                      Get rewarded to expereiencing life- search for a quest
                      near you!
                    </CardText>
                  </CardBody>
                  <Link to={"./list2"}>
                    <BreadcrumbItem>
                      <Button color="primary" size="lg" className="Button">
                        Explore
                      </Button>
                    </BreadcrumbItem>
                  </Link>
                </Card>
              </Col>
            </div>
          </Row>
        </Breadcrumb>
      </div>
    );
  }
}
export default Home;
