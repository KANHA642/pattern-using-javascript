let n = 5;  // height of L

for (let i = 1; i < n; i++) {
    console.log("*"); // vertical line
}

// bottom horizontal line
let line = "";
for (let i = 0; i < n; i++) {
    line += "*";
}
console.log(line);
