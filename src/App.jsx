import styles from "./App.module.css";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  return (
    <div className={styles.green}>
      I am App component
      <Statistics />
    </div>
  );
};

export default App;
