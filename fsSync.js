const {readFileSync , writeFileSync} = require('fs')
const first =readFileSync('./content/first.txt','utf8')
const second =readFileSync('./content/secound.txt','base64')

console.log(first,second)

writeFileSync('./content/result-test.txt',`HELLO Im ${first} ${second} `)