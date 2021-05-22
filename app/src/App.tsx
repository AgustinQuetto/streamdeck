import "./App.css";
import { useState, useEffect } from "react"
import { io } from "socket.io-client";

const socket = io("http://192.168.1.49:80");

interface IAction {
  name: string;
  image: string;
}

interface ICategoryConfiguration {
  name: string;
  actions: IAction[];
}

function App() {
  const [categories, setCategories] = useState<ICategoryConfiguration[]>([])

  useEffect(() => {
    socket.on("set-categories", (categories) => { console.log("lol"); setCategories(categories) })
    socket.emit("get-categories")
  }, [])

  const setBackground = (imgPath: string): object => {
    return {
      backgroundImage: `url("img/${imgPath}.png")`,
      backgroundSize: "cover",
    };
  };

  const execute = (path: string) => {
    socket.emit("execute-action", path);
  }

  return (
    <>
      {categories.map(({ name, actions }: ICategoryConfiguration, i: number) => (
        <section key={name}>
          <h3>{name}</h3>
          <div className="wrapper">
            {actions.length ? actions.map((action, j: number) => (
              <div key={action.name} className="action" style={setBackground(action.image)} onClick={() => execute(`${i}.actions.${j}`)}></div>
            )): <h4>Sin acciones</h4>}
          </div>
        </section>
      ))}
    </>
  );
}

export default App;
