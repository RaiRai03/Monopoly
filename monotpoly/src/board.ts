import { PropertySpaceData, SpaceData } from "./common/types";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

export const gameboard: (SpaceData | PropertySpaceData) [] = [
  { name: "start", image: viteLogo },
  {
    region: "brown",
    name: "Carthage",
    price: 60,
    rent: 20,
  },
  {
    region: "brown",
    name: "Galesburg",
    price: 80,
    rent: 25,
  },
  {
    name: "Chance",
    image: reactLogo,
  },
  {
    name: "hamster wheel",
    image:
    "https://thumbs.dreamstime.com/b/businessman-hamster-wheel-chasing-dollars-businessman-hamster-wheel-chasing-dollars-100300768.jpg?w=768",
  },
  {
    region: "green",
    name: "Manchaster",
    price: 0, //solo campuses must be auctioned
  },
  {
    region: "Lightgreen",
    name: "Colombia",
    price: 0, //solo campuses must be auctioned
  },
  {
    name: "The Boring Company",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/The_Boring_Company_Logo.svg",
  },
  {
    region: "pink",
    name: "Jackson",
    price: 0, //solo campuses must be auctioned
  },
  {
    name: "Chance",
    image: reactLogo,
  },
  {
    region: "orange",
    name: "Monroville",
    price: 110,
  },
  {
    region: "orange",
    name: "Pittsburg",
    price: 120,
  },
  {
    name: "Tesla",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    region: "red",
    name: "Ames",
    price: 100,
  },
  {
    region: "red",
    name: "Ankeny",
    price: 110,
  },
  {
    region: "red",
    name: "Des Moines",
    price: 130,
  },
  {
    name: "Chance",
    image: reactLogo,
  },
  {
    region: "yellow",
    name: "Reno",
    price: 150,
  },
  {
    region: "yellow",
    name: "Lake Tahoe",
    price: 160,
  },
  {
    name: "Space X",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/SpaceX-Logo-Xonly.svg",
  },
  {
    name: "Chance",
    image: reactLogo,
  },
  {
    region: "blue",
    name: "Dobbs Ferry",
    price: 200,
  },
  {
    region: "blue",
    name: "The Bronx",
    price: 220,
  },
  {
    region: "blue",
    name: "Manhattan",
    price: 300,
  },
];