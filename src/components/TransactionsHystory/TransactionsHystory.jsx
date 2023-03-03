import { TableRow } from '../TableRow/TableRow';
export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>PRICE</th>
          <th>AMOUNT</th>
          <th>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <TableRow key={item.id} index={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};
