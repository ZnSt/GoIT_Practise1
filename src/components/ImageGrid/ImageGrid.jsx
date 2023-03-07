import React from 'react';
import { ImageCard } from '@/ImageCard';
import { Grid, GridItem } from './ImageGrid.styled';

class ImageGrid extends React.Component {
  state = {
    images: [],
    isLoading: true,
  };

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
