import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postapi";
import { Loader } from "../api/Loader";
import { CountryCard } from "../components/Layout/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
      setFiltered(res.data);
    });
  }, []);

  useEffect(() => {
    let data = [...countries];

    /* SEARCH */
    if (search) {
      data = data.filter(c =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    /* REGION FILTER */
    if (region !== "All") {
      data = data.filter(c => c.region === region);
    }

    /* SORT */
    data.sort((a, b) =>
      order === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );

    setFiltered(data);
  }, [search, region, order, countries]);

  if (isPending) return <Loader />;

  return (
    <section className="country-page">

      {/* 🔍 CONTROLS GRID */}
      <div className="country-controls">

        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="All">All Continents</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <div className="sort-buttons">
          <button onClick={() => setOrder("asc")}>A–Z</button>
          <button onClick={() => setOrder("desc")}>Z–A</button>
        </div>

      </div>

      {/* 🌍 COUNTRIES GRID */}
      <ul className="grid-four-cols mt-4">
        {filtered.map((country, index) => (
          <CountryCard country={country} key={index} />
        ))}
      </ul>

    </section>
  );
};
