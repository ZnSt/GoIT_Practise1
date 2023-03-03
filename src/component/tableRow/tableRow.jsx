import styled from "styled-components";

function TableRow(props) {
  const { item, number } = props;
  const { price, amount, date } = item;
  return (
    <TrBox number={number}>
      <TdBox>{number}</TdBox>
      <TdBox>{price}</TdBox>
      <TdBox>{amount}</TdBox>
      <TdBox>{date}</TdBox>
    </TrBox>
  );
}

const TdBox = styled.td`
 text-align: center;
 border: 1px solid gray;
`
const TrBox = styled.tr`
background-color:${(props) => props.number%2 !== 0 ? "lightgray" : "white"  } ;
 `

export default TableRow;
