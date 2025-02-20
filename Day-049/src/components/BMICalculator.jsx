import { useState } from "react";
import "../styles/BMICalculator.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
      determineCategory(bmiValue);
    }
  };

  const determineCategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setCategory("Underweight 🥦");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal Weight ✅");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight ⚠️");
    } else {
      setCategory("Obese ❌");
    }
  };

  return (
    <div className="bmi-container">
      <h1>⚖️ BMI Calculator</h1>
      <div className="bmi-inputs">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
      {bmi && (
        <div className="bmi-result">
          <h2>Your BMI: {bmi}</h2>
          <p className="bmi-category">{category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
