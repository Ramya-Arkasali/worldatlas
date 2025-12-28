

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountryIndData } from "../../api/postapi";
import { Loader } from "../../api/Loader";

export const CountryDetails = () => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCountry = async () => {
      try {
        const res = await getCountryIndData(id);
        setCountry(res.data);
      } catch (error) {
        console.error("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) return <Loader />;
  if (!country) return <p>No country found</p>;

  const currencies = country.currencies
    ? Object.values(country.currencies).map(c => c.name).join(", ")
    : "N/A";

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <section className="country-details-section">
      <div className="country-card-details">

        {/* FLAG (TOP CENTER) */}
        <div className="flag-wrapper">
          <img src={country.flags.svg} alt={country.name.common} />
        </div>

        {/* INFO BELOW FLAG */}
        <div className="details-content">
          <h1>{country.name.common}</h1>

          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion || "N/A"}</p>
          <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
          <p><strong>Currencies:</strong> {currencies}</p>
          <p><strong>Languages:</strong> {languages}</p>
          <p>
            <strong>Borders:</strong>{" "}
            {country.borders?.length ? country.borders.join(", ") : "None"}
          </p>
        </div>

      </div>
    </section>
  );
};

