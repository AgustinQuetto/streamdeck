import "./App.css";
import categories from "./actions.json";

interface IAction {
  name: string;
  image: string;
  action: string;
}

interface ICategoryConfiguration {
  name: string;
  actions: IAction[];
}

function App() {
  const setBackground = (imgPath: string): object => {
    return {
      backgroundImage: `url("img/${imgPath}.png")`,
      backgroundSize: "cover",
    };
  };

  return (
    <>
      {categories.map(({ name, actions }: ICategoryConfiguration) => (
        <section>
          <h3>{name}</h3>
          <div className="wrapper">
            {actions.map((action) => (
              <div className="action" style={setBackground(action.image)}></div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default App;
