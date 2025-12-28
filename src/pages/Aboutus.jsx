import countryfacts from "../api/countryData.json";

export const About = () =>
{
    return <section className="section-about container">
        <h1 className="container-title">
            Here are the interesting facts
            <br/>
            we are pround of 

        </h1>
        <div className="gradient-cards">

            {
                countryfacts.map((country) => {
  const { id, name, capital, population, interestingFacts } = country;
  return (
    <div className="card" key={id}>
      <div className="container-card bg-blue-box">
        <p className="card-title">{name}</p>

        <p>
          <span className="card-description">Capital:</span>
          {capital}
        </p>

        <p>
          <span className="card-description">Population:</span>
          {population}
        </p>

        <p>
          <span className="card-description">Interesting Facts:</span>
          {interestingFacts}
        </p>
      </div>
    </div>
  );
})
} </div> </section>
};