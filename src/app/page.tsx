"use client";

import { useState, useEffect } from "react";
import { House } from "./types/house";
import ClipLoader from "react-spinners/ClipLoader";
import HouseList from "./components/HouseList";
import "./styles/Page.css";

export default function Home() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function fetchHouses() {
      try {
        const res = await fetch(`${apiUrl}/houses`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setHouses(data);
      } catch (error) {
        console.error("Failed to fetch houses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHouses();
  }, []);

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <ClipLoader
          className="spinner"
          color="#123abc"
          loading={true}
          size={100}
        />
      </div>
    );
  }

  return (
    <div>
      <HouseList houses={houses} />
    </div>
  );
}
