
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital, cca3 } = country;
  const [showFlag, setShowFlag] = useState(true);

 

  return (
    <li className="country-card">
      <div className="container-card">

        
        {showFlag && flags && (flags.svg || flags.png) && (
          <img
            src={flags.svg || flags.png}
            alt={flags.alt || name.common}
            loading="lazy"
            onError={() => setShowFlag(false)}
            className="country-flag"
          />
        )} 

        <h1 className="country-name">{name.common}</h1>

        <p><span>Population:</span> {population.toLocaleString()}</p>
        <p><span>Region:</span> {region}</p>
        <p><span>Capital:</span> {capital?.[0] || "N/A"}</p>

        <NavLink to={`/country/${cca3}`}>
          <button className="read-more-btn">
            Read More →
          </button>
        </NavLink>

      </div>
    </li>
  );
};
