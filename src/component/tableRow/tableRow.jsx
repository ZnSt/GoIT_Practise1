function TableRow(props) {
  const { item, number } = props;
  const { price, amount, date } = item;
  return (
    <tr>
      <td>{number}</td>
      <td>{price}</td>
      <td>{amount}</td>
      <td>{date}</td>
    </tr>
  );
}

export default TableRow;
