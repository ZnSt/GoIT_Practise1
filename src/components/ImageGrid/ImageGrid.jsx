import React from "react";
import { ImageCard } from "@/ImageCard";
import { Grid, GridItem } from "./ImageGrid.styled";

class ImageGrid extends React.Component {
  state = {
    images: [],
    isLoading: true,
  };

  componentDidMount() {
    (async () => {
      const result = await fetch("src/data/imageUrls.json");
      const { images } = await result.json();
      this.setState({ images: images, isLoading: false });
    })();
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Grid>
            {this.state.images.map((item, index) => (
              <GridItem key={index}>
                <ImageCard src={item.url} alt={item.alt} />
              </GridItem>
            ))}
          </Grid>
        )}
      </>
    );
  }
}

export default ImageGrid;
