import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LocationInfo from "./componenets/LocationInfo";
import ResidentInfo from "./componenets/ResidentInfo";
import getRandomLocation from "./utils/getRandomLocation";

function App() {
  const [location, setlocation] = useState();
  const [numberLocation, setnumberLocation] = useState(getRandomLocation());
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${numberLocation}`;
    axios
      .get(url)
      .then((res) => {
        setlocation(res.data);
        sethasError(false);
      })
      .catch((err) => {
        console.log(err);
        sethasError(true);
      });
  }, [numberLocation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setnumberLocation(e.target.inputLocation.value);
  };

  return (
    <div className="app">
      <h1 className="tittle">Rick and Morty</h1>
      <div className="container">
        <div className="img__container">
          <img src="./fondo.jpg" alt="" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input className="form-input" id="inputLocation" type="text" />
          <button className="form-btn">Search</button>
        </form>
      </div>
      {hasError ? (
        <>
        <h2 className="error">Hey! you must provide an is from 1 to 126</h2>
        <div className="img"></div>
        </>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="residents-container">
            {location?.residents.map((url) => (
              <ResidentInfo key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
