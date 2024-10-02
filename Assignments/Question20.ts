/*
  20. Write a program to print the following pattern using for loop
1
2	3
4	5	6
7	8	9	10

*/


let n: number = 1;

for (let i = 1; i <= 4; i++) {
    let row: string = '';

    for (let j = 1; j <= i; j++) {
        row += n + ' ';
        n++;
    }

    console.log(row);
}
