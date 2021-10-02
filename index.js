const path = require('path')
var colors = require('colors');
var SteamTotp = require('steam-totp');
const {
    spawn,
    exec,
    execFile
} = require('child_process');
var robot = require('robot-cmd')
var accs = require('./accs.json')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let files = [
    '1.cmd',
    '2.cmd'
]

console.log('Steam acc changer, by: b0limh4'.bgMagenta) // no copyright btw
process.title = "Steam acc changer, by: b0limh4";
console.log(`_______ _________ _______  _______  _______ `.red)
console.log(`(  ____ \\\\__   __/(  ____ \\(  ___  )(       )`.red)
console.log(`| (    \\/   ) (   | (    \\/| (   ) || () () |`.red)
console.log(`| (_____    | |   | (__    | (___) || || || |`.red)
console.log(`(_____  )   | |   |  __)   |  ___  || |(_)| |`.red)
console.log(`      ) |   | |   | (      | (   ) || |   | |`.red)
console.log(`/\\____) |   | |   | (____/\\| )   ( || )   ( |`.red)
console.log(`\\_______)   )_(   (_______/|/     \\||/     \\|`.red)
var string = ''
var accs = require('./accs.json')
const names = Object.keys(accs["accounts"])
names.forEach(x => {
    string += `${accs["accounts"][x].number}) ${x}\n`
})

function start(number) {
    var spawner = spawn(files[number])
    spawner.stdout.on('data', (data) => {});
    spawner.stderr.on('data', (data) => {});
    spawner.on('close', (code) => {})
}


readline.question(string, result => {
    number = Number(result)
    if (number) {
        var username = names[number - 1]
        var password = accs["accounts"][username].password
        var shared_secret = accs["accounts"][username].shared_secret
        var authcode = ''
        if (!shared_secret) {
            authcode = undefined
        } else if (shared_secret) {
            authcode = SteamTotp.generateAuthCode(shared_secret).toString()
        }
        start(0)
        if (!authcode) {
            var login = spawn('cmd', ['/c', 'start', 'steam.lnk', '-login', username, password])
            login.stdout.on('data', (data) => {});
            login.stderr.on('data', (data) => {});
            login.on('close', (code) => {})
            console.log(`Welcome! Enjoy gaming.`.bgGreen)
            setTimeout(function() {
                process.exit();
            }, 3000);
        }
        if (authcode) {
            console.log(`Automatic steam guard code: `.yellow + `${authcode}`.magenta)
            var loginauth = spawn('cmd', ['/c', 'start', 'steam.lnk', '-login', username, password])
            loginauth.stdout.on('data', (data) => {});
            loginauth.stderr.on('data', (data) => {});
            loginauth.on('close', (code) => {})
            setTimeout(function() {
                robot.sendKeys(`${authcode} {ENTER}`)
                console.log(`Welcome! Enjoy gaming.`.bgGreen)
                setTimeout(function() {
                    process.exit();
                }, 3000);
            }, 10000);

        }
    }
    return;
    readline.close();
});