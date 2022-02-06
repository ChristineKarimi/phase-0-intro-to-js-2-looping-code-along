
const names = ["Guadalupe", "Ollie", "Aki"];
let messages = [];

function writeCards(names){
    for(let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        
    }
    return messages;
}
function countDown() {
    let countDown = 10;
    while ( countDown > -1 ) {
        console.log(countDown--);
    }
    return countDown;
}

countDown();