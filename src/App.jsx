import { SearchForm } from "@/SearchForm";
import { HeaderComponent } from "@/Header";
import { ImageGrid } from "@/ImageGrid";
import { fetchPhotos } from "api/api";
import { Component } from "react";

class App extends Component {
  state = {
    photos: [],
    oldQuery: "",
    isLoading: false,
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true,
    });
    console.log(event.target.elements);
    const query = event.target.elements.searchfield.value;
    const photos = await fetchPhotos(query);
    if (query !== this.state.oldQuery) {
      this.setState({
        photos: photos,
        isLoading: false,
        oldQuery: query,
      });
    } else {
      this.setState((prev) => ({
        ...prev,
        photos: prev.photos.concat(photos),
        isLoading: false,
        oldQuery: query,
      }));
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
