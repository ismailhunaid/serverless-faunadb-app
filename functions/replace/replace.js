// // replace  operation without gatbsy means no frontend hard coded only  
// // The Replace function replaces the document’s data with the fields provided in params. 
// // Old fields not mentioned in params are removed. 


// const faunadb = require('faunadb')
// const q = faunadb.query
// require('dotenv').config()
// console.log(q)


// const handler = async (event,context) => {
//   try {
//     const adminClient = new faunadb.Client({ secret:process.env.ADMIN_KEY_SECRET})
//     const result= await adminClient.query(
//       q.Replace(
//         q.Ref(q.Collection('books'),'293839903767134727'),
//         {data:{breed:'arabian horse is best'}}
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