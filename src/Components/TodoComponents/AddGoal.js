//import the necessary files
import React from "react";
import {
  Modal,
  ControlLabel,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

//create a class for displaying the modal for adding a new goal and export it
export class AddGoal extends React.Component {
  constructor(props) {
    //create a state to handle the new goal
    super(props);
    this.state = { name: "", categories: "" };
    this.handleGoalNameChange = this.handleGoalNameChange.bind(this);
    this.handleGoalCategoriesChange = this.handleGoalCategoriesChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleGoalNameChange(e) {
    //change the name to reflect user input
    this.setState({ name: e.target.value });
  }
  handleGoalCategoriesChange(e) {
    //change the category to reflect user input
    this.setState({ categories: e.target.value });
  }
  handleSubmit(e) {
    //get the goal data, manipulate it and call the function for creating a new goal
    e.preventDefault();
    const onAdd = this.props.onAdd;
    const regExp = /\s*,\s*/;
    var newName = this.state.name;
    var newCategories = this.state.categories.split(regExp);
    var newGoal = { name: newName, categories: newCategories };
    onAdd(newGoal);
    this.setState({ name: "", categories: "" });
  }
  handleCancel() {
    const onAddModal = this.props.onAddModal;
    this.setState({ name: "", categories: "" });
    onAddModal();
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    const onShow = this.props.onShow;
    var regex1 = /^\S/;
    var regex2 = /^[^,\s]/;
    var regex3 = /[^,\s]$/;
    const validGoal =
      regex1.test(this.state.name) &&
      regex2.test(this.state.categories) &&
      regex3.test(this.state.categories);
    if (!this.props.show) {
      return null;
    }
    return (
      <Modal show={onShow} onHide={this.handleCancel}>
        <Modal.Header>
          <button
            onClick={e => {
              this.onClose(e);
            }}
          >
            Return to Dashbord
          </button>
          <Modal.Title>Add a Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId="formControlsCategories">
            <ControlLabel>Life Areas</ControlLabel>
            <FormControl
              componentClass="textarea"
              type="text"
              required
              onChange={this.handleGoalCategoriesChange}
              value={this.state.catgories}
              placeholder="Select a Category"
            />
          </FormGroup>
          <FormGroup controlId="formControlsGoal">
            <ControlLabel>Goal</ControlLabel>
            <FormControl
              type="text"
              required
              onChange={this.handleGoalNameChange}
              value={this.state.name}
              placeholder="Create a habit or long term goal and choose what days you'd like to
              work towards it."
            />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={!validGoal}
            bsStyle="success"
            onClick={this.handleSubmit}
          >
            Add Goal
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddGoal;
