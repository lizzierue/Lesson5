const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    
    console.log("Hello, Welcome to Liz's Storefinder!");
    while (true) {

        console.log("[1]Sydney");
        console.log("[2]Melbourne");
        console.log("[3]Perth");
        console.log("[4] None of the Above");

        let userInput = await askQuestion("Please select your location from the options listed above: ");
        console.log();
       
        if (userInput == "1") {
            console.log("We have two locations in Sydney, please select  (1) for our Western Sydney flagship store or (2) For our North Sydney store.  you prefer to visit?");

            let userInput1 = await askQuestion("Which store would you prefer");
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter the second number: ");
            let num2 = parseInt(userInput2);
            console.log(`${num1} plus ${num2} is ${num1 + num2}`);
        } else if (userInput == "2") {
            console.log("You have selected the Subtract numbers function");
            // Subtract numbers logic
            let userInput1 = await askQuestion("Enter the first number: ");
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter the second number: ");
            let num2 = parseInt(userInput2);
            console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);
        } else if(userInput == "3") {
            console.log("You have selected the Multiply numbers function");
            // Multiply numbers logic
            let userInput1 = await askQuestion("Enter the first number: ");
            let num1 = parseInt(userInput1);
            let userInput2 = await askQuestion("Enter the second number: ");
            let num2 = parseInt(userInput2);
            console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
        } else if(userInput == "4") {
            break;
        } else {
            // Error: couldn't read input
            console.log("Error: please enter a number 1 - 4");
        }
        console.log();
    }
    // Goodbye message
    console.log("Thank you for using Luke's Calulator!");
}

// alt + shift + f

Program().then(() => {
    process.exit(0);
});