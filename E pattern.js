let n = 5; // height of E

for (let i = 0; i < n; i++) {
    let row = "";

    if (i === 0 || i === Math.floor(n/2) || i === n - 1) {
        // Top, Middle, Bottom full rows
        row = "*".repeat(n);
    } else {
        // Vertical line
        row = "*";
    }

    console.log(row);
}
