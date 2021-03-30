// // create operation without gatbsy means no frontend hard coded 
// const faunadb = require('faunadb')
// const q = faunadb.query
// require('dotenv').config()
// console.log(q)




// const handler = async (event,context) => {
//   try {
//     const adminClient = new faunadb.Client({ secret:process.env.ADMIN_KEY_SECRET })
//     const result= await adminClient.query(
//       q.Create(
//         q.Collection('books'),
//         {
//           data:{
//             id:"101",
//             book_title:"a monk who sold his ferrari",
//             book_author:"not know ",
//             book_des:"wonderfull book"
//           }
//         }
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