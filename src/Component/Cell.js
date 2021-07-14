import React, { Component } from "react";

class Cell extends Component {
  render() {
    let background = (this.props.isClicked) ? 'silver' : 'transparent';
    let color = "";
    switch (this.props.value % 5) {
      case 1:
        color = "green";
        break;
      case 2:
        color = "blue";
        break;
      case 3:
        color = "orange";
        break;
        case 4:
        color = "red";
        break;
        case 0:
        color = "violet";
        break;
      default:
        color = "";
        break;
    }
    color = (this.props.flagged) ? '' : color;
    let styles = {
      width: "30px",
      height: "30px",
      background,
      border: "1px solid black",
      float: "left",
      display: "flex",
      justifyContent: "center",
      aligncontent: "center",
      flexDirection: "column",
      color
    };
    let toRender = '';
    if(this.props.isClicked) {
      toRender = (this.props.value === 0) ? '' : this.props.value;
    } else toRender = this.props.children;
    return (
      <div
        className="cell"
        style={styles}
        onContextMenu={this.props.right}
        onClick={this.props.left}
      >
        {toRender}
      </div>
    );
  }
}
export default Cell;
