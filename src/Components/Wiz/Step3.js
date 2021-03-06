import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { updateDescrip, clear } from "../../reducer";
import './Wiz.css';

class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descrip: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.complete = this.complete.bind(this);
  }

  componentDidMount() {
    let { descrip } = this.props;
    this.setState({ descrip });
  }

  handleChange(value) {
    this.setState({ descrip: value });
  }

  complete() {
    let { name, number, price, img } = this.props; //destructuring off props
    let { descrip } = this.state; //destructuring off state
    let part = { name, number, price, img, descrip };
    Axios.post("/api/parts", part).then(res => {
      this.props.clear();
      this.props.history.push("/dashboard");
    });
  }
  render() {
    return (
      <div>
        <center>
            <h3 className="step1">ITEM DETAILS</h3>
            <br />
          <input 
            style={{ width: "400x", height: "80px" }}
            value={this.state.descrip}
            placeholder="Enter item description..."
            onChange={event => this.handleChange(event.target.value)}
          />
        </center>
        <center>
          <button
            className="myButton"
            onClick={() => {
              this.props.updateDescrip(this.state);
              this.props.history.push("/wiz/2");
            }}
          >
            Previous
          </button>
          <button className="myButton" onClick={this.complete}>
            Complete
          </button>
        </center>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { updateDescrip, clear }
)(Step3);
