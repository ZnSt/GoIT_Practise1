import { SearchForm } from '@/SearchForm';
import { HeaderComponent } from '@/Header';
import { ImageGrid } from '@/ImageGrid';
import { fetchPhotos } from 'api/api';
import { Component, useEffect, useState } from 'react';
import Modal from '@/Modal/Modal';

function App() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [prevQuery, setPrevQuery] = useState('');
  const [curPage, setCurPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.searchfield.value);
    setIsLoading(true);
  };

  useEffect(() => {
    // componentDidUpdate check isLoading
    const getPhotos = async (page) => {
      const photos = await fetchPhotos(query, page);
      setIsLoading(false);
      setPhotos(photos);
    };
    if (isLoading) {
      if (query !== prevQuery) {
        getPhotos(curPage);
        setPrevQuery(query);

        console.log('if ');
      } else {
        getPhotos(curPage);
        console.log('else, ');
      }
    }
  }, [isLoading]);

  return (
    <div>
      <HeaderComponent>
        <SearchForm onSubmit={handleSubmit} />
      </HeaderComponent>
      <ImageGrid
        images={photos}
        isLoading={isLoading}
        // openModal={this.toggleModal}
        // getPicture={this.openPicture}
      />
      {/* {showModal && <Modal src={modalImage} />} */}
    </div>
  );
}

export default App;
