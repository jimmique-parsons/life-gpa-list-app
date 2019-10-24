import React from "react";
import {
  PanelGroup,
  Panel,
  Button,
  ButtonToolbar,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import "./todostyles.css";

import { AddGoal } from "./AddGoal.js";

/*import './css/index.css';*/
//create the main class for displaying the recipes
class GoalSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [
        {
          name: "Complete today's Counch to 5k program.",
          categories: ["Life Planning"]
        },
        {
          name: "Meditate for 15 minutes.",
          categories: ["Health"]
        },
        {
          name: "Read for 30 minutes",
          categories: ["Personal Developement"]
        }
      ]
    };
  }
  render() {
    const goals = this.state.goals;
    return (
      <div className="jumbotron">
        <Button
          className="goal-button"
          bsStyle="primary"
          onClick={this.showAddModal}
        >
          + Add Goal
        </Button>
        <AddGoal
          onShow={this.state.showAdd}
          onAdd={this.addGoal}
          onAddModal={this.showAddModal}
        />
        <PanelGroup accordion id="goals">
          {goals.map((goal, index) => (
            <Panel eventKey={index} key={index}>
              <Panel.Heading>
                <Panel.Title className="title" toggle>
                  {goal.name}
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <ListGroup>
                  {goal.categories.map((category, index) => (
                    <ListGroupItem key={index}>{category}</ListGroupItem>
                  ))}
                </ListGroup>
                <ButtonToolbar>
                  <Button bsStyle="warning">Edit</Button>
                  <Button bsStyle="danger">Delete</Button>
                </ButtonToolbar>
              </Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </div>
    );
  }
}

export default GoalSection;

/*import React, { Component } from "react";
import Modal from "./TodoModal.js";

class GoalButton extends Component {
  state = {
    show: false
  };
  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        <input
          className="goal-button"
          type="button"
          onClick={this.showModal}
          value="+ Add Goal"
        />

        <Modal onClose={this.showModal} show={this.state.show}>
          Add A Goal!
        </Modal>
      </div>
    );
  }
}

export default GoalButton;*/
