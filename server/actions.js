const { spawn } = require("child_process");

module.exports = [
  {
    name: "Herramientas",
    actions: [
      {
        name: "Streamlabs",
        image: "Apps/Streamlabs",
        action: () => {
          spawn(`C:\\Program Files\\Streamlabs OBS\\Streamlabs OBS.exe`);
        },
      },
      {
        name: "Visual Studio Code",
        image: "Apps/VSCode",
        action: () => {
          spawn(
            `C:\\Users\\agust\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe`
          );
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
        action: () => {
          spawn(`C:\\Program Files (x86)\\Steam\\Steam.exe`);
        },
      },
      {
        name: "League of Legends",
        image: "Games/LeagueOfLegends",
        action: () => {
          spawn(`C:\\Riot Games\\League of Legends\\LeagueClient.exe`);
        },
      },
    ],
  },
  {
    name: "Control de streaming",
    actions: [],
  },
];
