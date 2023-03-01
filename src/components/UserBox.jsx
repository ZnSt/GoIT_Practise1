import styled from "styled-components";

const UserBox = (props) => {
  return <Box>{props.children}</Box>;
};

const Box = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

export default UserBox;
