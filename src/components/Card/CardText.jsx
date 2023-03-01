import styled from "styled-components";

const CardText = (props) => {
  return <Text>{props.text}</Text>;
};

const Text = styled.p`
  text-align: center;
`;

export default CardText;
