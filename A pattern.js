let rows = 5;

for (let i = 1; i <= rows; i++) {
    let str = "";

    // leading spaces
    for (let j = i; j < rows; j++) str += " ";

    // stars and spaces
    for (let j = 1; j <= (2 * i - 1); j++) {
        if (i === 3) {
            str += "*"; // middle row full stars
        } else {
            if (j === 1 || j === (2 * i - 1)) str += "*";
            else str += " ";
        }
    }
    console.log(str);
}

