function minNumber(input) {
    let inputElement = input[0];
    let index = 1;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (inputElement !== "Stop") {
        let currentNumber = Number(inputElement);
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
        index++;
        inputElement = input[index];
    }
    console.log(minNumber);
}
minNumber(["100", "99", "80", "70", "Stop"]);
