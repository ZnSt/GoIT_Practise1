import Table from '../table/table';
import Thead from '../thead/thead';
import Tbody from '../tbody/Tbody';

const TransactionHistory = (props) => {
  return (
    <Table>
      <Thead />
      <Tbody items={props.items} />
    </Table>
  );
};

export default TransactionHistory;
