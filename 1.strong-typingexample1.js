// in js code data type or type of data we are not mentioning like int or string or etc 
// directly assigning the value or string or number or fun to the variable name
var hey = "this is a strng";// variable of string data type
hey = 1;                    // again for same variable has an integer value
hey = function(a,b){        // again it holds a function
    return a+b;             // hence the variable hey hold all hence it is called dynamic or/ javascript(js)
    // is not a strong type ,may cause more problem we we declared a variable in js oly to accept string 
    //if it also accept int we may face huge problems in our code
}
console.log(hey)

//output 
// PS C:\Users\c24a1\Typescript codes> cd ".\ts workspace\"
// PS C:\Users\c24a1\Typescript codes\ts workspace> node .\1.strong-typingexample1.js
// [Function: hey]
// PS C:\Users\c24a1\Typescript codes\ts workspace> 