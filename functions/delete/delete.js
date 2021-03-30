// // delete  operation without gatbsy means no frontend hard coded only  
// const faunadb = require('faunadb')
// const q = faunadb.query
// require('dotenv').config()
// console.log(q)



// const handler = async (event,context) => {
//   try {
//     const adminClient = new faunadb.Client({ secret:process.env.ADMIN_KEY_SECRET})
//     const result= await adminClient.query(
//       q.Delete(
//         q.Ref(q.Collection('books'),'293797141100366337')
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