import React from 'react';
import { ImageCard } from '@/ImageCard';
import { Grid, GridItem } from './ImageGrid.styled';

class ImageGrid extends React.Component {
  openPicture = (src) => {
    this.props.getPicture(src);
    this.props.openModal();
  };
  render() {
    return (
      <>
        <Grid>
          {this.props.images.map((item, index) => {
            console.log(this.props.images);
            return (
              <GridItem key={index} onClick={() => this.openPicture(item.src.original)}>
                <ImageCard src={item.src?.tiny} alt={item.alt} />
              </GridItem>
            );
          })}
        </Grid>
        {this.props.isLoading && <h2>Loading...</h2>}
      </>
    );
  }
}

export default ImageGrid;
