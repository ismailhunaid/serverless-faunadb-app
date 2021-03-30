step 1
gatsby with netlify serverless functions
installation
npm install -g gatsby-cli
gatsby new [projectName] [url]
gatsby develop
then
signup to netlify
npm install -g yarn
npm install -g netlify-cli
then
netlify.toml file on the root we dont need toml file if we are using netlify dev only it works without toml file 
netlify login
netlify logout
netlify dev --live
netlify link
netlify unlink
netlify deploy --prod
netlify status
then CICD with github and netlify will do CICD for us . This is  automatic process of deploying
go to github ,
make a repo of you project connect this repo with netlfy dashboard then it will done CICD for us 
we can deploy react and gatsby both
but i am practicing here for gatsby only 
[build]
command="yarn build"
publish="build/"
publish="public/"
functions="functions/"

step 2 move forward to netlify serverless functions how we can add serverside code in single place 
1) create a folder and name it  as functions
2) in toml file type functions="functions/"
2) type command => netlify functions:create hello
3)  [build]
        command="yarn build"
        publish="build/"
        publish="public/"
        functions="functions/"
4) check this 
http://localhost:8888/.netlify/functions/hello

5) fetch data from client with useEffect to the server  

step 3 now add faunaDb to serverless functions
refer to project 12  for faunadb with serverless crud APP only no graphQL 
here is the installation guide only


1) serverless + faunaDB CRUD Application
2) npm install faunadb  fauna db driver installation
3) const faunadb = require("faunadb") 
4) q = faunadb.query
5) const adminClient = new faunadb.Client ({ secret: ""})>
6) const serverClient = new faunadb.Client({ secret: ""})
7) use full links
8) npm init inside functions directory 
9) crud app using serverless and faunadb and gatsby.js 
10) first i have done hard coded crud for testing then using gatsby client for crud 
11) hard coded server side done 
12) moving toward dynamic way from client side 
13) crud operation from gatbsy client 
14) read done
15) addCountries done
16) delete 
17) update is pending 

https://github.com/panacloud-modern-global-apps/jamstack-serverless
link https://docs.fauna.com/fauna/current/tutorials/crud?lang=javascript
https://www.netlify.com/docs/functions/#the-handler-method
https://docs.fauna.com/fauna/current/drivers/javascript

 step 4 now add GraphQl + faunaDB + serverless + Gatsby 
  sett panacloud repo step 23 and 23 for syntax of runtime query provider wrap root element
 step 4 is in project 13 
 
   





