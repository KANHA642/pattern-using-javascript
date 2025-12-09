let n = 5;  // width of top bar

// Top horizontal line
let top = "";
for (let i = 0; i < n; i++) {
    top += "*";
}
console.log(top);

// Vertical line
let mid = Math.floor(n / 2); // center position
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        if (j === mid) row += "*"; // center star
        else row += " ";
    }
    console.log(row);
}
