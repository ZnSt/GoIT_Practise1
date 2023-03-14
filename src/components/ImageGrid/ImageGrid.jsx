import React, { useState } from 'react';
import { ImageCard } from '@/ImageCard';
import { Grid, GridItem } from './ImageGrid.styled';
import { useGalleryContext } from '../../context';
import Modal from '@/Modal/Modal';

const ImageGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const { images, isLoading } = useGalleryContext();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Grid>
        {images.map((item, index) => {
          return (
            <GridItem
              key={index}
              onClick={() => {
                setModalImage(item.src.original);
                toggleModal();
              }}
            >
              <ImageCard src={item.src?.tiny} alt={item.alt} />
            </GridItem>
          );
        })}
      </Grid>
      {isLoading && <h2>Loading...</h2>}
      {showModal && <Modal toggleModal={toggleModal} src={modalImage} />}
    </>
  );
};

export default ImageGrid;
