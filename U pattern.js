let n = 5;  // height of U

for (let i = 0; i < n; i++) {
    let row = "";

    if (i < n - 1) {
        // Two vertical lines
        row = "*   *";
    } else {
        // Bottom curve
        row = " *** ";
    }

    console.log(row);
}
