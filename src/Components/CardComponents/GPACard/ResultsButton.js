import React, { Component } from "react";
import Modal from "./ResultsModal.js";

class ResultsButton extends Component {
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
          className="card-results-button"
          type="button"
          onClick={this.showModal}
          value="View Results"
        />

        <Modal onClose={this.showModal} show={this.state.show}>
          This message is from the Modal!
        </Modal>
      </div>
    );
  }
}

export default ResultsButton;
