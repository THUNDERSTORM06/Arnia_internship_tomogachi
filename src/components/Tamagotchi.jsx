import React, {useState, useEffect} from 'react';

const Tamagotchi = () => {
  const [name, setName] = useState("Tamagotchi");
  const [age, setAge] = useState(0);
  const [health, setHealth] = useState(100);
  const [happiness, setHapiness] = useState(100);
  const [notdirty,setCleannese]=useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge((age) => age + 1);
      setHealth((health) => Math.max(0, health - 2));
      setHapiness((happiness) => Math.max(0, happiness - 2));
      setCleannese((notdirty) => Math.max(0, notdirty -1))
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const feed = () => {
    setHealth((health) => Math.min(100, health + 10));
  };

  const play = () => {
    setHealth((happiness) => Math.min(100, happiness + 10));
  };

  const clean = () => {
    setCleannese((notdirty) => Math.min(100,notdirty +10 ))
  }

  return;
  <div>
    <h1>{name}</h1>
    <p>Age:{age}</p>
    <p>Health:{health}</p>
    <p>Happiness:{happiness}</p>
    <p>Cleannes:{notdirty}</p>
    {health === 0 || happiness === 0 || notdirty === 0 ? (
      <p>Your tamagotchi has died.</p>
    ) : (
      <>
        <button onClick={feed}>Feed</button>
        <button onClick={play}>Play</button>
        <button onClick={clean}>Clean</button>
      </>
    )}
  </div>;
};

export default Tamagotchi;