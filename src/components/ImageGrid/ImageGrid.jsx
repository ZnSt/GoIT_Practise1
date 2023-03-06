import { ImageCard } from "@/ImageCard";
import React from "react";
import { Grid, GridItem } from "./ImageGrid.styled";

const URL =
  "https://www.purina.co.uk/sites/default/files/2021-02/CAT%20HERO_0026_Sphynx.jpg";

class ImageGrid extends React.Component {
  render() {
    return (
      <Grid>
        <GridItem>
          <ImageCard src={URL} alt={"Cat"} />
        </GridItem>
      </Grid>
    );
  }
}

export default ImageGrid;
