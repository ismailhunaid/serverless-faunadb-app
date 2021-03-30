import React, { useState, useEffect } from "react";
import AddCountries from "../components/AddCountries";
import DeleteCountries from '../components/DeleteCountries'
//import './index.css'

const Home = () => {
  const [countries, setCountries] = useState({})
  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch('/.netlify/functions/getCountries')
      const data = await response.json()
      //console.log(JSON.stringify(data))
      console.log(data)
      
      setCountries(data)
      return data



    };
    getCountries()


  }, [])
  return (
    <div>
      <h1> Get all Countries </h1>
      {Object.keys(countries).map((value,i) => {
        return (
          <div key={i}>
            <ol>
              <li>CountryName:{countries[value].data.countryName}  </li>
              <li>Capital:{countries[value].data.capital}</li>
              <li>Population:{countries[value].data.population}</li>
              <li>Speciality:{countries[value].data.speciality}</li>
              <li>id:{countries[value].ref['@ref'].id}</li>
              <br />
    
              <DeleteCountries countries={countries} value={value}/>
            </ol>
          </div>
        )
      })}



      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <div>
        <h2>ADD COUNTRIES FORM</h2>
        <AddCountries />

      </div>





    </div >
  )
}


export default Home

{/* {Object.keys(countries).map((keys, i) => {
        return (
          <div>
            <tr>
              <td>{keys}</td>
              <td>{countries[keys]}</td>
            </tr>
          </div>



        )

      })} */}
