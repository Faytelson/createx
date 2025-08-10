import "@/App.scss";
import Icon from "@ui/Icon/Icon";
import Button from "@ui/Button/Button";

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

      <div className="app__buttons">
        <div className="app__button">
          <Button>Primary Button</Button>
        </div>

        <div className="app__button">
          <Button withIcon>Primary Button</Button>
        </div>

        <div className="app__button">
          <Button disabled>Primary Disabled Button</Button>
        </div>

        <div className="app__button">
          <Button size="sm">Primary Small Button</Button>
        </div>

        <div className="app__button">
          <Button size="lg">Primary Large Button</Button>
        </div>

        <div className="app__button">
          <Button type="primary-white">Primary White Button</Button>
        </div>

        <div className="app__button">
          <Button
            type="primary-white"
            withIcon
          >
            Primary Icon Button
          </Button>
        </div>

        <div className="app__button">
          <Button
            type="primary-white"
            disabled
          >
            Primary Disabled White Button
          </Button>
        </div>

        <div className="app__button">
          <Button type="secondary">Secondary Button</Button>
        </div>

        <div className="app__button">
          <Button
            type="secondary"
            withIcon
          >
            Secondary Button
          </Button>
        </div>

        <div className="app__button">
          <Button
            type="secondary"
            disabled
          >
            Secondary Button
          </Button>
        </div>

        <div className="app__button">
          <Button type="secondary-dark">Secondary Button</Button>
        </div>

        <div className="app__button">
          <Button
            type="secondary-dark"
            disabled
          >
            Secondary Button
          </Button>
        </div>

        <div className="app__button">
          <Button
            type="secondary-dark"
            withIcon
          >
            Secondary Button
          </Button>
        </div>

        <div className="app__white-buttons">
          <div className="app__button">
            <Button type="secondary-white">Secondary Button</Button>
          </div>

          <div className="app__button">
            <Button
              type="secondary-white"
              withIcon
            >
              Secondary Button
            </Button>
          </div>

          <div className="app__button">
            <Button
              type="secondary-white"
              disabled
            >
              Secondary Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
