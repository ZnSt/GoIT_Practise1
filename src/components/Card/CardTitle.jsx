import styled from "styled-components";

const CardTitle = (props) => {
  return <Title>{props.title}</Title>;
};

const Title = styled.h2`
  margin: 0;
  padding-top: 10px;
`;

export default CardTitle;
