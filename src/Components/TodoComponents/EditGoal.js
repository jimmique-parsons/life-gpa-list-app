//import the necessary files
import React from "react";
import {
  Modal,
  ControlLabel,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

//create a class for displaying the modal for editing an existing recipe and export it
export class EditGoal extends React.Component {
  constructor(props) {
    //create a state to handle the recipe to be edited
    super(props);
    this.state = { name: "", ingredients: "" };
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
    this.handleRecipeIngredientsChange = this.handleRecipeIngredientsChange.bind(
      this
    );
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    //make the recipe prop a state
    const prevName = state.prevName;
    const prevIngredients = state.prevIngredients;
    const name =
      prevName !== props.recipe.name ? props.recipe.name : state.name;
    const ingredients =
      prevIngredients !== props.recipe.ingredients.join(",")
        ? props.recipe.ingredients.join(",")
        : state.ingredients;
    return {
      prevName: props.recipe.name,
      name,
      prevIngredients: props.recipe.ingredients.join(","),
      ingredients
    };
  }
  handleRecipeNameChange(e) {
    //change the name to reflect user input
    this.setState({ name: e.target.value });
  }
  handleRecipeIngredientsChange(e) {
    //change the ingredients to reflect user input
    this.setState({ ingredients: e.target.value });
  }
  handleEdit(e) {
    //get the recipe data, manipulate it and call the function for editing an existing recipe
    e.preventDefault();
    const onEdit = this.props.onEdit;
    const currentlyEditing = this.props.currentlyEditing;
    const regExp = /\s*,\s*/;
    var name = this.state.name;
    var ingredients = this.state.ingredients.split(regExp);
    onEdit(name, ingredients, currentlyEditing);
  }
  handleCancel() {
    const onEditModal = this.props.onEditModal;
    this.setState({
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients.join(",")
    });
    onEditModal();
  }
  render() {
    const onShow = this.props.onShow;
    var regex1 = /^\S/;
    var regex2 = /^[^,\s]/;
    var regex3 = /[^,\s]$/;
    const validRecipe =
      regex1.test(this.state.name) &&
      regex2.test(this.state.ingredients) &&
      regex3.test(this.state.ingredients);
    return (
      <Modal show={onShow} onHide={this.handleCancel}>
        <Modal.Header closeButton />
        <Modal.Body>
          <Modal.Title>Modify the goal</Modal.Title>
          <p>
            Update your goal by adjusting its associated life area and days
            you'd like to work towards it. We reccomend making a new goal for
            wording changes
          </p>
          <FormGroup controlId="formControlsIngredients">
            <FormGroup controlId="formControlsName">
              <FormControl
                componentClass="textarea"
                type="text"
                required
                onChange={this.handleRecipeNameChange}
                value={this.state.name}
                placeholder="Enter Name"
              />
            </FormGroup>
            <ControlLabel>Life Areas</ControlLabel>
            <select
              value={this.state.ingredients}
              onChange={this.handleRecipeIngredientsChange}
            >
              <option placeholder="Select a Category">Select a Category</option>
              <option value="Health">Health</option>
              <option value="Career">Career</option>
              <option value="Social">Social</option>
              <option value="Personal Development">Personal Development</option>
              <option value="Recreation">Recreation</option>
              <option value="Family">Family</option>
              <option value="Life Planning">Life Planning</option>
              <option value="Spirituality">Spirituality</option>
            </select>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={!validRecipe}
            bsStyle="success"
            onClick={this.handleEdit}
          >
            Edit Goal
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
