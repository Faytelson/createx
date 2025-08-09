import "./App.scss";
import Icon from "./components/ui/Icon/Icon";

function App() {
  return (
    <div className="app">
      <div className="app__icons">
        <Icon
          name="alert"
          ariaLabel="Оповещение"
        />
        <Icon
          name="attach"
          ariaLabel="Прикрепить файл"
        />
        <Icon
          name="back"
          ariaLabel="Назад"
        />
        <Icon
          name="bottomLeft"
          ariaLabel="Нижний левый угол"
        />
        <Icon
          name="calendar"
          ariaLabel="Календарь"
        />
        <Icon
          name="burgerMenu"
          ariaLabel="Меню"
        />
        <Icon
          name="block"
          ariaLabel="Заблокировать"
        />
        <Icon
          name="bell"
          ariaLabel="Уведомления"
        />
        <Icon
          name="cart"
          ariaLabel="Корзина"
        />
        <Icon
          name="eye"
          ariaLabel="Просмотр"
        />
        <Icon
          name="gitlab"
          ariaLabel="GitLab"
        />
      </div>
      <div className="app__icons">
        <Icon
          name="brain"
          size="lg"
          color="var(--color-primary)"
          ariaLabel="Мозг (интеллект)"
        />
        <Icon
          name="budget"
          size="lg"
          color="var(--color-primary)"
          ariaLabel="Бюджет"
        />
        <Icon
          name="construction"
          size="lg"
          color="var(--color-primary)"
          ariaLabel="Строительство"
        />
        <Icon
          name="contract"
          size="lg"
          color="var(--color-primary)"
          ariaLabel="Договор"
        />
        <Icon
          name="house"
          size="lg"
          color="var(--color-primary)"
          ariaLabel="Дом"
        />
        <Icon
          name="painting"
          size="lg"
          color="var(--color-primary)"
          ariaLabel="Живопись"
        />
        <Icon
          name="pantone"
          size="lg"
          color="var(--color-primary)"
          ariaLabel="Цветовая палитра"
        />
      </div>
    </div>
  );
}

export default App;
