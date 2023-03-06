import { Component } from "react";
import { Input } from "@/Input";

export class SearchForm extends Component {
  state = {
    value: "",
  };

  componentDidUpdate() {
    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      console.log(this.state.value);
    }, 200);
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.value);
  // };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChange} value={value} />
      </form>
    );
  }
}
