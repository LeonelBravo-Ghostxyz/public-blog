const express = require('express')
const server = express();
 
function keepAlive() {
   server.listen(3000, () => { console.log("Tamo bien" + Date.now()) });
}

module.exports = keepAlive;