import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const liters = bottles * 0.33;
    const grams = liters * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - burning * time;
    let bloodAlcoholLevel = 0;
    if (gender === 'male') {
      bloodAlcoholLevel = gramsLeft / (weight * 0.7);
    } else {
      bloodAlcoholLevel = gramsLeft / (weight * 0.6);
    }

    if (bloodAlcoholLevel < 0 || isNaN(bloodAlcoholLevel)) {
      setResult(0);
    } else {
      setResult(bloodAlcoholLevel);
    }
  }
  return (
    <div>
      <h1>Calculating alcohol blood level</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Weight</label>
            <input name="weight" type="number" min="1" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Bottles</label>
            <select type="number" name="bottles" id="" value={bottles} onChange={(e) => setBottles(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div>
            <label>Time</label>
            <select type="number" name="time" id="" value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div>
            <label>Gender</label>
            <input type="radio" name="gender" value="male" defaultChecked onChange={(e) => setGender(e.target.value)} />
            <label>Male</label>
            <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
            <label>Female</label>
          </div>
          <div>
            <output>{result.toFixed(1)}</output>
          </div>
          <button>Calculate</button>
        </form>
      </div>
    </div>
  );
}

export default App;
