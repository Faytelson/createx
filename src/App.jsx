import "@/App.scss";
import Checkbox from "./components/ui/Checkbox/Checkbox";
import RadioButton from "./components/ui/RadioButton/RadioButton";

function App() {
  return (
    <div className="app">
      <Checkbox label="Label for checkbox"></Checkbox>
      <Checkbox
        disabled
        label="Label for checkbox disabled"
      ></Checkbox>
      <Checkbox
        disabled
        checked
        label="Label for checkbox disabled"
      ></Checkbox>

      <RadioButton
        label="Hockey"
        name="sport"
        value="hockey"
        checked
        id={1}
      ></RadioButton>
      <RadioButton
        label="Football"
        name="sport"
        value="hockey"
        checked
        id={2}
      ></RadioButton>
      <RadioButton
        label="Tennis"
        name="sport"
        value="tennis"
        id={3}
        disabled
      ></RadioButton>
    </div>
  );
}

export default App;
