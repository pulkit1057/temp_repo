const { log } = require('console');
const os = require('os');

// info about current users
const user = os.userInfo()
console.log(user);


// system up-time in seconds
console.log(`the up-time is : ${os.uptime}`);

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOs);
