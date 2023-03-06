import Test from "@/Test";
import png_test from "media/png_test.png";

const App = () => {
  return (
    <div>
      <Test />
      <img src={png_test} />
    </div>
  );
};

export default App;
