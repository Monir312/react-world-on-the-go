import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlags}) => {
  // console.log(country)
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // console.log("Button Clicked")
    if (visited) {
      setVisited(false)
    }
    else {
      setVisited(true)
    };
    // setVisited(visited ? false : true);
    handleVisitedCountries(country);
  }
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      {/* <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}> */}
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area} {
        country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
      <button onClick={handleVisited}
      >
        {visited ? 'Visited' : 'Not Visited'}</button>
        <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}}>Add visited Flag</button>
    </div>
  );
};

export default Country;