import styled from 'styled-components';
import Title from '../Title/Title';

const Statistics = () => {
  return (
    <Container>
      <Title title="Statistics" />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.backgroundColor};
  margin: 0 auto;
  width: 20%;
`;

export default Statistics;
