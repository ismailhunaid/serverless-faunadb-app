// // update operation without gatbsy means no frontend hard coded only  
// const faunadb = require('faunadb')
// const q = faunadb.query
// require('dotenv').config()
// console.log(q)


// const handler = async (event,context) => {
//   try {
//     const adminClient = new faunadb.Client({ secret:process.env.ADMIN_KEY_SECRET})
//     const result= await adminClient.query(
//       q.Update(
//         q.Ref(q.Collection('books'),'293839832361206273'),
//         { data: { tags: ['updated', 'cute'] } },

//       )
//     )


//     return {
//       statusCode: 200,
//       body: JSON.stringify({mesage:`${result.ref.id}`})
    


//     }
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }