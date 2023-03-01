import styled from "styled-components";

const CardBody = (props) => {
  return <CardBodyContainer>{props.children}</CardBodyContainer>;
};

const CardBodyContainer = styled.div`
  padding: 10px;
`;

export default CardBody;
