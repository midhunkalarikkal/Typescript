/*
 9. Write a program to print the following pattern (hint: use nested loop)
 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5
*/

for(let i = 1; i <= 5 ; i++){
    let res : string = ''
    for(let j = 1; j <= i; j++){
        res += j + ' '
    }
    console.log(res.trim())
}