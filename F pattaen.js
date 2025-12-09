let n = 5; // height of F

for (let i = 0; i < n; i++) {
    let row = "";

    if (i === 0) {
        // Top horizontal line
        for (let j = 0; j < n; j++) row += "*";
    } else if (i === 2) {
        // Middle horizontal line
        for (let j = 0; j < n - 2; j++) row += "*";
    } else {
        // Vertical line
        row += "*";
    }

    console.log(row);
}
