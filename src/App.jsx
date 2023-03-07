import { SearchForm } from "@/SearchForm";
import { HeaderComponent } from "@/Header";
import { ImageGrid } from "@/ImageGrid";
import { fetchPhotos } from "api/api";
import { Component } from "react";

class App extends Component {
  state = {
    photos: [],
    oldQuery: "",
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    const query = event.target.elements.searchfield.value;
    const photos = await fetchPhotos(query);
    if (query !== this.state.oldQuery) {
      this.setState({
        photos: photos,
      });
    } else {
      this.setState((prev) => ({ photos: prev.photos.concat(photos) }));
    }
  };
  render() {
    return (
      <div>
        <HeaderComponent>
          <SearchForm onSubmit={this.handleSubmit} />
        </HeaderComponent>
        <ImageGrid images={this.state.photos} />
      </div>
    );
  }
}

export default App;
