import { spawn } from "child_process";
import { SlobsClient } from "slobs-client";

const categories = [
  {
    name: "Herramientas",
    actions: [
      {
        name: "Streamlabs",
        image: "Apps/Streamlabs",
        action: (socket) => {
          spawn(`C:\\Program Files\\Streamlabs OBS\\Streamlabs OBS.exe`);
          socket.emit("success", `Se abrió la aplicación Streamlabs`);
        },
      },
      {
        name: "Visual Studio Code",
        image: "Apps/VSCode",
        action: (socket) => {
          spawn(
            `C:\\Users\\agust\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe`
          );
          socket.emit("success", `Se abrió la aplicación Visual Studio Code`);
        },
      },
    ],
  },
  {
    name: "Juegos",
    actions: [
      {
        name: "Steam",
        image: "Apps/Steam",
        action: (socket) => {
          spawn(`C:\\Program Files (x86)\\Steam\\Steam.exe`);
          socket.emit("success", `Se abrió Steam`);
        },
      },
      {
        name: "League of Legends",
        image: "Games/LeagueOfLegends",
        action: (socket) => {
          spawn(`C:\\Riot Games\\League of Legends\\LeagueClient.exe`);
          socket.emit("success", `Se abrió League of Legends`);
        },
      },
    ],
  },
  {
    name: "StreamLabs escenas",
    actions: [],
  },
];

try {
  const client = await SlobsClient.connect(
    "http://127.0.0.1:59650/api",
    "STREAMLABS-API-KEY"
  );

  const scenes = await client.request("ScenesService", "getScenes");

  scenes.map((scene) => {
    categories[2].actions.push({
      name: scene.name,
      image: "Streaming/Cam09-Bottom-White",
      action: async (socket) => {
        await client.request("ScenesService", "makeSceneActive", scene.id);
        socket.emit("success", `La escena cambió a ${scene.name}`);
      },
    });
  });
} catch (e) {
  console.error(e);
}

export default categories;
