import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] = useState("");
  const [distance, setDistance] = useState(null);

  const calculateDistance = () => {
    if (fuel && mileage) {
      setDistance(fuel * mileage);
    } else {
      setDistance(null);
    }
  };

  return (
    <div className="calculator">
      <h2>🚗 Vehicle Mileage Calculator</h2>
      <label>⛽ Fuel in Liters:</label>
      <input
        type="number"
        value={fuel}
        onChange={(e) => setFuel(e.target.value)}
        placeholder="Enter fuel in liters"
      />

      <label>📊 Mileage (KM/L):</label>
      <input
        type="number"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        placeholder="Enter mileage"
      />

      <button onClick={calculateDistance}>Calculate</button>

      {distance !== null && (
        <h3>✅ Your vehicle can run approximately <strong>{distance} KM</strong></h3>
      )}
    </div>
  );
};

export default Calculator;
