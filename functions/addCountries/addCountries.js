// create operation without gatbsy means no frontend hard coded 
const faunadb = require('faunadb')
const q = faunadb.query
require('dotenv').config()


const handler = async (event, context) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method not Alowed" }
    };
    
    let reqObj = JSON.parse(event.body)
    const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET })
    const result = await adminClient.query(
      q.Create(
        q.Collection('countries'),
        {
          data: {
            countryName: reqObj.countryName,
            capital: reqObj.capital,
            population: reqObj.population,
            speciality: reqObj.speciality
          }
        }
      )
    )


    return {
      statusCode: 200,
      body: JSON.stringify({ id: `${result.ref.id}` })



    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }