import React from 'react';
import { ImageCard } from '@/ImageCard';
import { Grid, GridItem } from './ImageGrid.styled';

const KEY = 'FUF46zmaymVZvGw1wx0nala6QHuqbE1w0kI9oWyzHnobGgsDvb6qlK4J';
class ImageGrid extends React.Component {
  state = {
    images: [],
    isLoading: true,
  };

  componentDidMount() {
    (async () => {
      const result = await fetch('https://api.pexels.com/v1/search?query=cats', {
        headers: {
          Authorization: KEY,
        },
      });
      const { photos } = await result.json();

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
