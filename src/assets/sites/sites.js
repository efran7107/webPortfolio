const sites = () => {
  return [
    {
      id: 0,
      name: "Simple js Tic Tac Toe",
      site: "https://tic-tac-toe-sandy-seven.vercel.app/",
      github: "https://github.com/efran7107/TicTacToe/tree/main",
      shortDescription:
        "continuous tic tac toe game with a win or a tie, simpele js",
      description:
        "A simple js tic tac toe game allowing ties and making it tough to win.",
      img: "./src/assets/site-screenshots/simpleJsTTT.png",
    },
    {
      id: 1,
      name: "Vite React TicTacToe app",
      site: "https://tic-tac-toe-vite-app-eight.vercel.app/",
      github: "https://github.com/efran7107/TicTacToeViteApp/tree/main",
      shortDescription: "continuous tic tac toe game with only one winner",
      description:
        "A continuous tic tac toe game that only ends with a winner. Developed with vite and react. Has the ability to be installed on android devices. Only available on the web for now read the README.md in github for more details.",
      img: "./src/assets/site-screenshots/reactAppTTT.png",
    },
    {
      id: 2,
      name: "EBYBBQ Static Prototype (WIP)",
      site: "WIP",
      github: "https://github.com/efran7107/ebybbq",
      shortDescription: "A static prototype for EBYBBQ",
      description:
        "A static prototype for EBYBBQ that is currently WIP. Will be updated.",
      img: "./src/assets/site-screenshots/ebybbqHTML-JS.png",
    }
  ];
};

export default sites;
