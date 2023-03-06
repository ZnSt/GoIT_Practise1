import { SearchForm } from "@/SearchForm";
import { HeaderComponent } from "@/Header";
import { ImageGrid } from "@/ImageGrid";
const App = () => {
  return (
    <div>
      <HeaderComponent>
        <SearchForm />
      </HeaderComponent>
      <ImageGrid />
    </div>
  );
};

export default App;
