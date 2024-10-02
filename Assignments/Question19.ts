/*
 19. Income tax is calculated as per the following table 

+--------------------------------+---------------------+
|        Annual Income           |    Tax Percentage   |
+--------------------------------+---------------------+
| Up to 2.5 Lakhs                |        No Tax       |
| Above 2.5 Lakhs to 5 Lakhs     |         5%          |
| Above 5 Lakhs to 10 Lakhs      |        20%          |
| Above 10 Lakhs to 50 Lakhs     |        30%          |
+--------------------------------+---------------------+

Write a program to find out the income tax amount of a person.
Program should accept annual income of a person
Output the amount of tax he has to pay

Eg 1:
Enter the annual income
495000
Income tax amount = 24750.00

Eg 2:
Enter the annual income
500000
Income tax amount = 25000.00

*/

import {prompt} from './input'

const annualIncome : number = Number(prompt("Enter your annual income : "))
let tax : number = 0

if(annualIncome > 0 && annualIncome <= 250000){
    console.log("No tax.")   
}else if(annualIncome > 250000 && annualIncome <= 500000){
    tax = ((annualIncome * 5)/100)
    console.log(`Income tax amount : ${tax}`)
}else if(annualIncome > 500000 && annualIncome <= 1000000){
    tax = ((annualIncome * 20)/100)
    console.log(`Income tax amount : ${tax}`)
}else if(annualIncome > 1000000 && annualIncome <= 5000000){
    tax = ((annualIncome * 30)/100)
    console.log(`Income tax amount : ${tax}`)
}else{
    console.log("Enter valid income.")
}