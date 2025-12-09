let rows = 5;
let cols = 5;

for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= cols; j++) {
        if (j == 1 || j == cols || i == Math.ceil(rows / 2)) {
            line += "*";
        } else {
            line += " ";
        }
    }
    console.log(line);
}
