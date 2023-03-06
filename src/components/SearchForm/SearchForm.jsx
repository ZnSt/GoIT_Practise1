import { Component } from "react";
import { Input } from "@/Input";

export class SearchForm extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    console.log("Я народився");
  }

  componentDidUpdate() {
    console.log("Я еволюціонував");
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value);
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input onChange={this.handleChange} value={value} />
      </form>
    );
  }
}
