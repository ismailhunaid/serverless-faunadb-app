const faunadb = require('faunadb')
const q = faunadb.query;
require('dotenv').config()
console.log(q)

const handler = async (event) => {
  try {
    const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET });
    // get one country query example
    // const result = await adminClient.query(
    //   q.Get(
    //     q.Ref(q.Collection('countries'),'293927066326270471')
    //   )
    // )

    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(
        
    //     {
    //       countryName: `${result.data.countryName}`,
    //       capital: `${result.data.capital}`,
    //       population: `${result.data.population}`,
    //       speciality: `${result.data.specialty}`

    //     }),

    // }
    const result = await adminClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("countries"))),
        q.Lambda(x => q.Get(x))
        
      )
    
    )
    console.log(result)
    return {
        statusCode: 200,
        body: JSON.stringify(result.data)
      }



  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
