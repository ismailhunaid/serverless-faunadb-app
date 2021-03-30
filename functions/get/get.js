// // read operation without gatbsy 
// // hard coded here 
// const faunadb = require('faunadb')
// const q = faunadb.query
// require('dotenv').config()

// const handler = async (event) => {
//   try {
//     const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET })
//     // one document query example here
//     //const result = await adminClient.query(q.Get(q.Ref(q.Collection('books'), '293797141100366337')))
//     // return {
//     //   statusCode: 200,
//     //   body: JSON.stringify(
//     //     {
//     //       bookTitle: `${result.data.book_title}`,
//     //       author: `${result.data.book_author}`,
//     //       description: `${result.data.book_desc}`
//     //     }
//     //   ),
//     // }
    
//     // getting all documents inside a collection  example 

//     const result = await adminClient.query(
//       q.Map(
//         q.Paginate(q.Documents(q.Collection("books"))),
//         q.Lambda(x => q.Get(x))
//       )

//     )
//     return {
//         statusCode: 200,
//         body: JSON.stringify(result.data)
//       }



//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }
