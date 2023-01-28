import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [userInput, setUserInput] = useState('');

  function updatePlants(item){
    setPlants(item);
  } 

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(updatePlants)
  }, [])

  const newPlantList = plants.filter(plant => (plant.name.toLowerCase().includes(userInput.toLowerCase())))
  return (
    <main>
      <NewPlantForm plants={plants} onSubmit={updatePlants}/>
      <Search userInput={userInput} setUserInput={setUserInput}/>
      <PlantList newPlantList={newPlantList}/>
    </main>
  );
}

export default PlantPage;
