import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);
  
  const isAlive = () => {
    if ((character.status) === 'Alive') {
      return <span className=" status  p-2 bg-success border border-light rounded-circle"></span>
    } else if ((character.status) === 'Dead'){
      return <span className=" status  p-2 bg-danger border border-light rounded-circle"></span>
    }else {
      return <span className=" status  p-2 bg-secondary border border-light rounded-circle"></span>
    }
  }

  return (
    <li className="col-12 col-sm-6 col-md-4">
      <div className="card my-3 ">
        <div>
          
        </div>
        <img src={character.image} className="card-img-top" alt="..." />

        <div className="card-body position-relative">
          <h5 className="card-title">{character.name}</h5>
          <div className="card-text position-relative">
          <p className="card-text d-flex flex-column">
            <span> Status:</span> {character.status}
          </p>
          
          {isAlive()}
          </div>
          <p className="card-text d-flex flex-column">
            <span> Origin:</span> {character.origin?.name}
          </p>
          <p className="card-text d-flex flex-column">
            <span> Episodes:</span> {character.episode?.length}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ResidentInfo;
