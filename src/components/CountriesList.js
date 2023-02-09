import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
    const {countries} = props
    const copiedListOfCountries=[...countries]
  return (
    <>
       {copiedListOfCountries.map((country) => {
            return (
              <div>
                <img
                  width={50}
                  src={`https://flagsapi.com/${country.alpha2Code}/flat/64.png`}
                  alt="country pic"
                />
                <Link
                  value={country.alpha3Code}
                  to={`/${country.alpha3Code}`}
                >
                  {country.name.common}
                </Link>
              </div>
            );
       })
       }
    </>
  )
}
