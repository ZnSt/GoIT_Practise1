import { SearchForm } from "@/SearchForm";
import { HeaderComponent } from "@/Header";
import { ImageGrid } from "@/ImageGrid";
import { fetchPhotos } from "api/api";
import { Component, useEffect, useState } from "react";
import Modal from "@/Modal/Modal";

function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.searchfield.value);
    setIsLoading(true);
  };

  useEffect(() => {
    console.log(query, isLoading);
  }, [isLoading]);

  return (
    <div>
      <HeaderComponent>
        <SearchForm onSubmit={handleSubmit} />
      </HeaderComponent>
      {/* <ImageGrid
        images={photos}
        isLoading={isLoading}
        openModal={this.toggleModal}
        getPicture={this.openPicture}
      /> */}
      {/* {showModal && <Modal src={modalImage} />} */}
    </div>
  );
}

export default App;
