import styled from "styled-components";

const Thead = () => {
  return (
    <thead>
      <HeadBox>
        <ThBox>№</ThBox>
        <ThBox>PRICE</ThBox>
        <ThBox>AMOUNT</ThBox>
        <ThBox>DATE</ThBox>
      </HeadBox>
    </thead>
  );
};

const ThBox = styled.th`
  color: #fff;
  padding: 10px;
  width: 100px;
  border: 1px solid gray;

`

const HeadBox = styled.tr`
  background-color: blue;
`

export default Thead;

