import './App.css'
const boardwalkData = {
  region: "blue",
  propertyName: "Boardwalk",
  price: 400,
};

const parkPlaceData = {
  region: "blue",
  propertyName: "Park Place",
  price: 350,
}

interface SpaceProps {
  region: string;
  propertyName: string;
  price: number;
}

function Space({ region, propertyName, price }: SpaceProps) {
  return (
    <div className="property-space">
<div className="region" style={{ backgroundColor: region }}></div>
      <h3 className="property-name">{propertyName}</h3>
      <span className="price">Price: ${price}</span>
    </div>
  );
}
function Board() {
  const spaces = [parkPlaceData, boardwalkData];
  return <> {spaces.map((space) => Space(space))}</>;
}

export default Board;
