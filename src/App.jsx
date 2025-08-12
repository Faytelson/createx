import "@/App.scss";
import Checkbox from "./components/ui/Checkbox/Checkbox";

function App() {
  return (
    <div className="app">
      <Checkbox label="Label for checkbox"></Checkbox>
      <Checkbox disabled label="Label for checkbox disabled"></Checkbox>
    </div>
  );
}

export default App;
