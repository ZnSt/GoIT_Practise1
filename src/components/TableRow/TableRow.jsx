export const TableRow = ({ item, index }) => {
  const { price, amount, date } = item;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{price}</td>
      <td>{amount}</td>
      <td>{date}</td>
    </tr>
  );
};
