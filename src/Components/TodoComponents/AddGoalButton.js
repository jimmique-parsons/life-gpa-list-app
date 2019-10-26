import React from "react";
import {
  PanelGroup,
  Panel,
  Button,
  ButtonToolbar,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

import { AddGoal } from "./AddGoal.js";
import { EditGoal } from "./EditGoal.js";

import "./todostyles.css";
import "./AddGoalButton.css";

//create the main class for displaying the goals
class Goal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      showAdd: false,
      showEdit: false,
      currentlyEditing: 0
    };
    this.showAddModal = this.showAddModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  componentDidMount() {
    //load the local storage data after the component renders
    var recipes =
      typeof localStorage["recipes"] !== "undefined"
        ? JSON.parse(localStorage.getItem("recipes"))
        : [
            {
              name: "Complete today's Counch to 5k program.",
              ingredients: ["Life Planning"]
            },
            {
              name: "Meditate for 15 minutes.",
              ingredients: ["Health"]
            },
            {
              name: "Read for 30 minutes",
              ingredients: ["Personal Developement"]
            }
          ];
    this.setState({ recipes: recipes });
  }
  showAddModal() {
    //show the new goal modal
    this.setState({ showAdd: !this.state.showAdd });
  }
  showEditModal(index) {
    //show the edit goal modal
    this.setState({ currentlyEditing: index, showEdit: !this.state.showEdit });
  }
  addRecipe(recipe) {
    //create a new goal
    let recipes = this.state.recipes;
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes: recipes });
    this.showAddModal();
  }
  editRecipe(newName, newIngredients, currentlyEditing) {
    //edit an existing goal
    let recipes = this.state.recipes;
    recipes[currentlyEditing] = { name: newName, ingredients: newIngredients };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes: recipes });
    this.showEditModal(currentlyEditing);
  }
  deleteRecipe(index) {
    //delete an existing goal
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    this.setState({ recipes: recipes, currentlyEditing: 0 });
  }
  render() {
    const recipes = this.state.recipes;
    var currentlyEditing = this.state.currentlyEditing;
    return (
      <div>
        <Button
          className="goal-button"
          bsStyle="primary"
          onClick={this.showAddModal}
        >
          + Add Goal
        </Button>
        <AddGoal
          onShow={this.state.showAdd}
          onAdd={this.addRecipe}
          onAddModal={this.showAddModal}
        />
        <PanelGroup accordion id="goals">
          {recipes.map((recipe, index) => (
            <Panel eventKey={index} key={index}>
              <Panel.Heading>
                <Panel.Title className="title" toggle>
                  {recipe.name}
                  <div />
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <ListGroup>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListGroupItem key={index}>{ingredient}</ListGroupItem>
                  ))}
                </ListGroup>
                <ButtonToolbar>
                  <Button
                    bsStyle="warning"
                    onClick={() => {
                      this.showEditModal(index);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    bsStyle="danger"
                    onClick={() => {
                      this.deleteRecipe(index);
                    }}
                  >
                    Delete
                  </Button>
                </ButtonToolbar>
              </Panel.Body>
              <EditGoal
                onShow={this.state.showEdit}
                onEdit={this.editRecipe}
                onEditModal={() => {
                  this.showEditModal(currentlyEditing);
                }}
                currentlyEditing={currentlyEditing}
                recipe={recipes[currentlyEditing]}
              />
            </Panel>
          ))}
        </PanelGroup>
      </div>
    );
  }
}

export default Goal;
