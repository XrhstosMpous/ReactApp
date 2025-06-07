"use client";

import { House } from "../types/house";
import "../styles/HouseCard.css";
import { useState } from "react";

type HouseCardProps = {
  house: House;
};

export default function HouseCard({ house }: HouseCardProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTraits = house.traits.filter((trait) =>
    trait.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="house-container">
      <h2 className="house-header">
        <span className="name">{house.name}</span>
        <span className="animal">{house.animal}</span>
      </h2>
      <div className="house-gradient"></div>
      <p className="founder-container">
        Founder: <span className="founder">{house.founder}</span>
      </p>
      <input
        type="text"
        placeholder="Search house traits"
        className="search-traits"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="traits-container">
        {filteredTraits.map((trait) => (
          <div className="trait" key={trait.id}>
            {trait.name}
          </div>
        ))}
      </div>
    </div>
  );
}
