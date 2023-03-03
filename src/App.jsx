import { TransactionHistory } from './components/TransactionsHystory/TransactionsHystory';
import data from './json/data';
const App = () => {
  return (
    <div>
      <TransactionHistory items={data} />
    </div>
  );
};

export default App;
