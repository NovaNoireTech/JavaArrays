/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// #notes
// for  d in dog names 
// if d in dog string 
// print matched dog name
// else print no matches

function findwords(st, arr){
    for (let i = 0; i < arr.length; i++){
        if (st.includes(arr[i])) { 
        console.log(`matched dog name ${arr[i]}`)
        } else {
            console.log("no matches");
        }
    }

}
findwords(dog_string,dog_names);

    // else p

   
    // function newFunction() {
    //     ;
    // }
    //Your code goes here

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr3 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr3){
    for(let i = 0; i < arr3.length; i+=2 ) {
        arr3.splice( 0, 1,"even index" );
        // max is at 0, 1 is baseball,, 2 reboot =even index
    }
}

let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

replaceEvens(array);
console.log(array);


    //code goes here
// }

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// console.log('Hello')

// /* 
// Java is not JaVA
// VAR delcarations
// hoisting 
// */

// var firstName = 

// console.log(firstName)

// firstName = 'Kavunaa'
// console.log(firstName)

// const lastName = 'Edwards'
// // const lastName = '' error 

// let firstName2

// firstName2 = 'kavunaa'
// firstName2 = 'Kavunaa'

// const num = 5