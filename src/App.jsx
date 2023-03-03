import transactions from './data/transaction.json';
import TransactionHistory from './component/transactions/transactionsHistory';

const App = () => {
  return (
    <div>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
