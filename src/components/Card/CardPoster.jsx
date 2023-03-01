import styled from "styled-components";

const CardPoster = (props) => {
  console.log(props.vasya);
  return <Image src={props.src} alt={props.alt} />;
};

const Image = styled.img`
  height: 200px;
  width: 100%;
`;

export default CardPoster;
