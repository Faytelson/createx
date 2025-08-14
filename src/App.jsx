import "@/App.scss";
import Input from "./components/ui/Input/Input";
import Checkbox from "./components/ui/Checkbox/Checkbox";
import RadioButton from "./components/ui/RadioButton/RadioButton";
import SelectComponent from "./components/ui/SelectComponent/SelectComponent";

function App() {
  const options = [
    { id: "apple", value: "apple", label: "Apple", group: "Fruits" },
    { id: "banana", value: "banana", label: "Banana", group: "Fruits" },
    { id: "blueberry", value: "blueberry", label: "Blueberry", group: "Fruits" },
    { id: "grapes", value: "grapes", label: "Grapes", group: "Fruits" },
    { id: "pineapple", value: "pineapple", label: "Pineapple", group: "Fruits" },
  ];

  return (
    <div className="app">
      {/* <Checkbox label="Label for checkbox"></Checkbox>
      <Checkbox
        disabled
        label="Label for checkbox disabled"
      ></Checkbox>
      <Checkbox
        disabled
        checked
        label="Label for checkbox disabled"
      ></Checkbox>

      <Checkbox
        label="Label for checkbox"
        type="switch"
      ></Checkbox>
      <Checkbox
        disabled
        checked
        label="Label for checkbox disabled"
        type="switch"
      ></Checkbox>
      <Checkbox
        disabled
        label="Label for checkbox disabled"
        type="switch"
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

      <Input
        value=""
        placeholder="name"
        name="name"
        id={0}
        label="Enter name:"
        size="md"
      ></Input>

      <Input
        value="Darya"
        placeholder="name"
        name="name"
        id={0}
        label="Enter name:"
        size="md"
        disabled
      ></Input>

      <Input
        value="Faytelson"
        placeholder="lastname"
        name="lastname"
        id={1}
        label="Enter lastname:"
        size="md"
        error="Error!"
      ></Input>

      <div className="app__dark-theme">
        <Input
          value=""
          placeholder="name"
          name="name"
          id={0}
          label="Enter name:"
          size="md"
          theme="dark"
        ></Input>

        <Input
          value="Darya"
          placeholder="name"
          name="name"
          id={0}
          label="Enter name:"
          size="md"
          disabled
          theme="dark"
        ></Input>

        <Input
          value="Faytelson"
          placeholder="lastname"
          name="lastname"
          id={1}
          label="Enter lastname:"
          size="md"
          error="Error!"
          theme="dark"
        ></Input>
      </div> */}

      <SelectComponent
        options={options}
        name="fruits"
        label="Выберите фрукт из списка"
        ariaLabel="fruits"
        placeholder="No option chosen"
        size="md"
      ></SelectComponent>

      <SelectComponent
        options={options}
        name="fruits"
        label="Выберите фрукт из списка"
        ariaLabel="fruits"
        placeholder="No option chosen"
        size="md"
        error="Ужасная ошибка"
      ></SelectComponent>

      <div className="app__dark-theme">
        <SelectComponent
          options={options}
          name="fruits"
          label="Выберите фрукт из списка"
          ariaLabel="fruits"
          placeholder="No option chosen"
          size="sm"
          theme="dark"
        ></SelectComponent>

        <SelectComponent
          options={options}
          name="fruits"
          label="Выберите фрукт из списка"
          ariaLabel="fruits"
          placeholder="No option chosen"
          size="lg"
          theme="dark"
        ></SelectComponent>
      </div>
    </div>
  );
}

export default App;
