import styled from "styled-components";

const CardFooter = (props) => {
  return <FooterContainer>{props.children}</FooterContainer>;
};

const FooterContainer = styled.div`
  padding: 10px;
`;

export default CardFooter;
