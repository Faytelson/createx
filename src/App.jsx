import "./App.scss";
import Icon from "./components/ui/Icon/Icon";

function App() {
  return (
    <div className="app">
      <div className="app__icons">
        <Icon
          name="alert"
          ariaLabel="Оповещение"
          size={24}
        />
        <Icon
          name="attach"
          ariaLabel="Прикрепить файл"
          size={48}
          color="var(--color-info)"
        />
        <Icon
          name="brain"
          color="var(--color-primary)"
          ariaLabel="Мозг (интеллект)"
          size={16}
        />
        <Icon
          name="budget"
          color="var(--color-success)"
          ariaLabel="Бюджет"
          size={48}
        />
      </div>
    </div>
  );
}

export default App;
