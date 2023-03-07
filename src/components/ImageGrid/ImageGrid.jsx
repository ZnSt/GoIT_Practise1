import React from "react";
import { ImageCard } from "@/ImageCard";
import { Grid, GridItem } from "./ImageGrid.styled";
import { fetchPhotos } from "api/api";

class ImageGrid extends React.Component {
  state = {
    images: [],
    isLoading: true,
  };

  componentDidMount() {
    (async () => {
      const photos = await fetchPhotos("car");
      this.setState({ images: photos, isLoading: false });
    })();
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Grid>
            {this.state.images.map((item, index) => {
              return (
                <GridItem key={index}>
                  <ImageCard src={item.src?.original} alt={item.alt} />
                </GridItem>
              );
            })}
          </Grid>
        )}
      </>
    );
  }
}

export default ImageGrid;
