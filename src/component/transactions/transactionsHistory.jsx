const TransactionHistory = (props) => {
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
        {props.items.map(({ id, price, amount, date }, index) => {
          return (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{price}</td>
              <td>{amount}</td>
              <td>{date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
