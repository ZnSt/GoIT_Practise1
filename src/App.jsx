import { SearchForm } from '@/SearchForm';
import { HeaderComponent } from '@/Header';
import { ImageGrid } from '@/ImageGrid';
import { fetchPhotos } from 'api/api';

const App = () => {
  const handleSubmit = async event => {
    event.preventDefault();
    console.log(event.target.elements.searchfield.value);
    const photos = await fetchPhotos(event.target.elements.value);
  };
  return (
    <div>
      <HeaderComponent>
        <SearchForm onSubmit={handleSubmit} />
      </HeaderComponent>
      <ImageGrid />
    </div>
  );
};

export default App;
