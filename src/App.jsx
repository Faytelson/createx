import Icon from "./components/ui/Icon/Icon";

function App() {
  return (
    <div className="app">
      <div className="app__icons">
        <Icon name="alert"></Icon>
        <Icon name="attach"></Icon>
        <Icon name="back"></Icon>
        <Icon name="bottom-left"></Icon>
        <Icon name="calendar"></Icon>
        <Icon name="burger-menu"></Icon>
        <Icon name="block"></Icon>
        <Icon name="bell"></Icon>
        <Icon name="cart"></Icon>
        <Icon name="eye"></Icon>
        <Icon name="gitlab"></Icon>
      </div>
      <div className="app__icons">
        <Icon
          name="brain"
          size="lg"
          color="var(--color-primary)"
        ></Icon>
        <Icon
          name="budget"
          size="lg"
          color="var(--color-primary)"
        ></Icon>
        <Icon
          name="construction"
          size="lg"
          color="var(--color-primary)"
        ></Icon>
        <Icon
          name="contract"
          size="lg"
          color="var(--color-primary)"
        ></Icon>

        <Icon
          name="house"
          size="lg"
          color="var(--color-primary)"
        ></Icon>

        <Icon
          name="painting"
          size="lg"
          color="var(--color-primary)"
        ></Icon>
        <Icon
          name="pantone"
          size="lg"
          color="var(--color-primary)"
        ></Icon>
      </div>
    </div>
  );
}

export default App;
