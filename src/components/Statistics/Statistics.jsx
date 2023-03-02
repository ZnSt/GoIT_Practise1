import styled from "styled-components";

const Statistics = () => {
  return (
    <Container backgroundColor="skyblue">I am Statistics component</Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.backgroundColor};
  margin: 0 auto;
  width: 20%;
`;

// const Input = styled.input.attrs(({ type }) => ({
//     type:  type || "password"
//   }))`
//     align-items: center;
//     display: flex;
//     margin: 1.5vh 0;
//   `

export default Statistics;
