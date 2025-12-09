let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    if (i === 0) {
        // Top horizontal line
        row = "*****";
    } else if (i < n - 2) {
        // Vertical line on the right
        row = "    *";
    } else if (i === n - 2) {
        // Curve part
        row = "*   *";
    } else {
        // Bottom curve
        row = " *** ";
    }

    console.log(row);
}
