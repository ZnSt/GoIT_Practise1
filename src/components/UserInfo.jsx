import styled from "styled-components";

const UserInfo = () => {
  return (
    <UserContainer>
      <UserName>Jane Doe</UserName>
      <Date>2h ago</Date>
    </UserContainer>
  );
};

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  color: darkgray;
`;

export default UserInfo;
