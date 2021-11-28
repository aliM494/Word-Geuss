import React, { createRef, PureComponent } from "react";

class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
    };

    this.counter = 0;
    this.myInput = createRef();
  }

  handleSetName = () => {
    this.setState({ name: this.myInput.current.value });
  };

  componentDidMount() {
    this.myInput.current.focus();
  }

  render() {
    return (
      <div className="form-fa-group text-center mt-4 p-3">
        <h4 className="text-center text-dark">حدث کلمه</h4>
        <input
          className="form-control"
          ref={this.myInput}
          type="text"
          autoComplete="off"
        />

        <button className="btn btn-warning my-3" onClick={this.handleSetName}>
          ثبت
        </button>

        <button
          className="btn btn-secondary my-3 mx-2"
          onClick={() => {
            this.myInput.current.value = "";
          }}
        >
          مخفی
        </button>
        <br />

        <span>{this.counter++}</span>
      </div>
    );
  }
}

export default PureCompo;
