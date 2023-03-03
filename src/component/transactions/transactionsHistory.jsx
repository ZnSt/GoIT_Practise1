import TableRow from '../TableRow/TableRow';

const TransactionHistory = props => {
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
        {props.items.map((item, index) => {
          return <TableRow key={item.id} number={index + 1} item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
