import { House } from "../types/house";
import HouseCard from "./HouseCard";
import "../styles/HouseList.css";
import "../styles/SearchInput.css";

type HouseListProps = {
  houses: House[];
};

export default function HouseList({ houses }: HouseListProps) {
  return (
    <div className="container">
      <input type="text" placeholder="Search houses" className="search-input" />
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}
