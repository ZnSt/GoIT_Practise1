import styled from "styled-components";

const Avatar = (props) => {
  return (
    <ImageContainer>
      <Image src={props.src} alt={props.alt} />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  padding-right: 10px;
`;
const Image = styled.img`
  border-radius: 25px;
`;

export default Avatar;
