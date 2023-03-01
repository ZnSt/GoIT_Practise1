import styled from "styled-components";

const CardHeader = (props) => {
  return <HeaderContainer>{props.children}</HeaderContainer>;
};

const HeaderContainer = styled.div`
  overflow: hidden;
`;

export default CardHeader;
