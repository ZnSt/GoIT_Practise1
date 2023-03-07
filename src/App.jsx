import { SearchForm } from "@/SearchForm";
import { HeaderComponent } from "@/Header";
import { ImageGrid } from "@/ImageGrid";
import { fetchPhotos } from "api/api";
import { Component } from "react";

class App extends Component {
  state = {
    photos: []
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const photos = await fetchPhotos(event.target.elements.searchfield.value);
    this.setState((prev) => (
      {photos : prev.photos.concat(photos)}
    ))
  };
  render() {
    return (
      <div>
        <HeaderComponent>
          <SearchForm onSubmit={this.handleSubmit} />
        </HeaderComponent>
        <ImageGrid images={this.state.photos}/>
      </div>
    );
  }
}

export default App;
