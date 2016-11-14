process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main(input) {
//enter your processing code here

//To output the processed data use console.log(your stuffs here);

    var mealCost = parseFloat(readLine()),
        tipPercent = parseFloat(readLine()),
        taxPercent = parseFloat(readLine()),
        totalCost = 0,
        tip = (mealCost * (tipPercent/100)),
        tax = (mealCost * (taxPercent/100));

    totalCost = mealCost + tip + tax;
    console.log("The total meal cost is " + Math.round(totalCost) + " dollars.");

}
