import styled from '@emotion/styled';
import { SearchForm } from '@/SearchForm';
import { Header } from '@/Header';
const App = () => {
  return (
    <div>
      <Header>
        <SearchForm />
      </Header>
    </div>
  );
};

export default App;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: ${({ theme }) => theme.spacing(5)};
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
