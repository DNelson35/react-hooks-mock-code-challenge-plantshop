import React from "react";
import PlantCard from "./PlantCard";


function PlantList({newPlantList}) {

  const plantList = newPlantList.map(plant => <PlantCard key={plant.id} plant={plant}/>)

  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
