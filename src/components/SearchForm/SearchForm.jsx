import { Component } from 'react';
import { Input } from '@/Input';

export class SearchForm extends Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form>
        <Input onChange={this.handleChange} value={value} />
      </form>
    );
  }
}
