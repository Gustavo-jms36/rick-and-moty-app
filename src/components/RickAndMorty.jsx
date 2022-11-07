import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";
import Pagination from "./Pagination";

const RickAndMorty = () => {
  const [location, setLocation] = useState([]);

  const [locationId, setLocationId] = useState("");

  const [info, setInfo] = useState({});

  useEffect(() => {
    const randomLocation = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then((res) => setLocation(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => setInfo(res.data.info));
  }, []);

  // console.log(location);

  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then((res) => setLocation(res.data));
  };

  const locationNull = () => {
    if (location.residents?.length === 0) {
      return "No residents in this location";
    } else {
      return "Residents";
    }
  };

  const onPrevious = () => {
    axios.get(info.prev);
  };

  const onNext = () => {
    axios.get(info.next);
  };

  console.log(info);

  return (
    <>
      <img
        src="https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1400x.jpg?v=1590095280"
        className="img-fluid"
        alt="rick and morty"
      />

      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6">
            <div className="input-group input-group-sm">
              <input
                type="text"
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
                className="form-control"
                placeholder="Location"
              />
              <button
                className="btn btn-secondary"
                type="button"
                onClick={searchLocation}
              >
                <i className="bi bi-search px-1"></i>Search location
              </button>
            </div>
          </div>
        </div>

        <div className="row justify-content-center py-3">
          <div className="col-md-10">
            <div className="info-location rounded-2">
              <h2 className="text-center py-3">{location.name}</h2>
              <div className="row text-center py-3">
                <p className="col-sm-12 col-md-4">Type: {location.type}</p>
                <p className="col-sm-12 col-md-4">
                  Dimension: {location.dimension}
                </p>
                <p className="col-sm-12 col-md-4">
                  Population: {location.residents?.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="no-residents fs-1 text-center rounded-2">
              <p> {locationNull()} </p>
            </div>
          </div>
        </div>
        <ul className="row p-0">
          {location.residents?.map((resident) => (
            <ResidentInfo key={resident} url={resident} />
          ))}
        </ul>
        <div className="row">
          <Pagination
            prev={info?.prev}
            next={info?.next}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </div>
      </div>
    </>
  );
};

export default RickAndMorty;
