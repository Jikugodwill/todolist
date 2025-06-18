import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import TodoContainer from "./components/TodoContainer";

function App() {
  //All state will go here
  //state syntax:
  /*
  const [value, setValue] = useState(initialValue);
  * value: current state value (variable)
  * setValue: function to update the state
  * initialValue: initial value of the state
  * useState is a React Hook that allows you to add state to functional components
  * useState is imported from React
  */
  const appTitle = "Todo App";
  return (
    <div>
      <Header title={appTitle} />
      {/* <Main title={appTitle} /> */}
      <TodoContainer />
      <Footer footerTitle={appTitle} />
    </div>
  );
}

export default App;
