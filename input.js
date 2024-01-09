import readLine from 'readline'
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

let firstNumber, secondNumber;

rl.question('Enter the first number: ', (input) => {
    firstNumber = Number(input);

    rl.question('Enter the second number: ', (input) => {
        secondNumber = Number(input);

        const sum = firstNumber + secondNumber;
        console.log(`The sum of ${firstNumber} + ${secondNumber} = ${sum}`);

        rl.close();
    });
});