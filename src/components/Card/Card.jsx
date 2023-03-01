import styled from "styled-components";

const Card = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

const CardContainer = styled.div`
  width: 300px;
  box-shadow: 0px 0px 12px -1px rgba(0, 0, 0, 0.75);
  border-radius: 40px;
  overflow: hidden;
`;

export default Card;
