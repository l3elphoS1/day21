import React from 'react';
import { useState } from 'react';

function Water({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [weight, setWeight] = useState<number>(0);
  const [water, setWater] = useState<number>(0);

  const handleWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setWeight(parseFloat(e.target.value));
    console.log('weight:', e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const water = weight * 2.2 * (30 / 2);
    setWater(water);
    console.log('water:', water);
  };

  return (
    <div
    className={theme}    >
      <header>
        <button onClick={toggleTheme} style={{ backgroundColor: 'lightblue' }}>
          Change mode
        </button>
      </header>
      <h1>ควรดื่มน้ำวันละเท่าไหร่?</h1>
      <h2>{water} มล.</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="weight">weight:</label>
        <input
          type="float"
          id="weight"
          name="weight"
          value={weight}
          onChange={handleWeight}
          required
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Water;