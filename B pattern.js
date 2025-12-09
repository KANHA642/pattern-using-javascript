let height = 7;
let width = 6;

for (let i = 1; i <= height; i++) {
    let row = "";

    for (let j = 1; j <= width; j++) {
        if (
            j === 1 ||                           // left vertical
            (i === 1) ||                         // top bar
            (i === Math.ceil(height / 2)) ||     // middle bar
            (i === height) ||                    // bottom bar
            (j === width && i !== 1 && i !== Math.ceil(height / 2) && i !== height)
        ) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
