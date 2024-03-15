
// let numbers = [1,3,5,6,7,8,19];

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])

// for(let i = 0; i < numbers.length; i++ ){
//     console.log(numbers[i])
// }

// let i = 3;
// for(; i < numbers.length;  ){
//     console.log(numbers[i])
//     i++;
// }


// for(let i = 0; i < 10; i++)
// {
//     console.log(i)
// }


// let j = 1;
// while(j > 10)
// {
//     console.log("The while loop: " +j);
//     j++;
// }


// let k = 5;
// do
// {
//     console.log(`The do while loop: ${k}`);
// }
// while(k > 10)



// Nested for loop
// for(let a =1; a <= 4; a++)
// {
   
//     document.write("Outer loop Iteration count: "+a)
//     for(let b = 1; b <= 5; b++)
//     {
//         document.write(`<br>This is inner loop ${b} <br>`)
//     }

    
//     document.write("<br> ______________ <br>")


// }




let numbers = [
    [1,2,3,4],
    [6,7,8,9],
    [10,11,12,13,14]
]


// console.log(numbers.length)
// console.log(numbers[2].length)
// console.log(numbers[2][3])

for(let i=0; i < numbers.length; i++)
{
   console.log(`The length: ${numbers[i].length}`)
    for(let j=0; j < numbers[i].length; j++)
    {
        console.log(numbers[i][j]);
    }

}

console.table(numbers)

let numbers1 = [2,3,4,56,76,324]
console.table(numbers1)


let products = ["Headphone","Mobile","Mouse","Keyboard","Files","Books","Duster"];

let isFound = false;


for(let i=0; i <products.length; i++)
{
    
    if(products[i] == "Bohfghfgoks")
    {
        document.write("Found <br>");
        isFound = true;
    }
   
   
}

if(!isFound)
{
    document.write("Not Found <br>");
}

// if(isFound == false)
// {
//  document.write("Not Found")
// }






// if(isFound)
// {
//     console.log("-----------Found")
// }
// else
// {
//     console.log("-------------Not Found")
// }


































