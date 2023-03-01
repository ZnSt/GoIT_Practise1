import styled from "styled-components";

const Tag = (props) => {
  return <TagContainer>{props.tag}</TagContainer>;
};

const TagContainer = styled.div`
  background-color: orange;
  display: inline-block;
  color: white;
  padding: 5px;
  border-radius: 15px;
  font-weight: bold;
`;

export default Tag;
