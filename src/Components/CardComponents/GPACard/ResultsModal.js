import React from "react";

// styles for Modal will go into a styled-component file
const backdropStyle = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.3)",
  padding: 50
};

const modalStyle = {
  backgroundColor: "#fff",
  borderRadius: 12,
  width: 512,
  height: 569,
  margin: "0 auto",
  padding: 30,
  position: "relative"
};

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      // Dont forget to remove 'style' from the div when the style component is created
      <div style={backdropStyle}>
        <div style={modalStyle}>
          {this.props.children}
          <div>
            <button
              onClick={e => {
                this.onClose(e);
              }}
            >
              Return to Dashbord
            </button>
            <h6>Goal</h6>
          </div>
        </div>
      </div>
    );
  }
}

/*(add this back under h6 Goal if the alternate does not work)<TodoForm saveTodo={console.warn} />*/
