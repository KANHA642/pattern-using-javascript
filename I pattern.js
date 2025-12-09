let n = 5; // width and height

// Top horizontal line
let top = "";
for (let i = 0; i < n; i++) {
    top += "*";
}
console.log(top);

// Middle vertical line
let mid = Math.floor(n / 2);
for (let i = 0; i < n - 2; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        if (j === mid) row += "*"; // center star
        else row += " ";
    }
    console.log(row);
}

// Bottom horizontal line
let bottom = "";
for (let i = 0; i < n; i++) {
    bottom += "*";
}
console.log(bottom);
