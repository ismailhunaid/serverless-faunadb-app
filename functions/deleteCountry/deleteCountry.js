// delete country with gatsby 
const faunadb = require('faunadb')
const q = faunadb.query
require('dotenv').config()




const handler = async (event) => {
  try {
    if (event.httpMethod !== "DELETE") {
      return { statusCode: 405, body: "Method not Alowed" }
    };
    let id = JSON.parse(event.body)
    const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET })
    const result = await adminClient.query(
      q.Delete(
        q.Ref(q.Collection('countries'), id)
      )
    )


    return {
      statusCode: 200,
      body: JSON.stringify({ mesage: `Delete ${result.ref.id}` })


    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }