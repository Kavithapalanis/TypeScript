// here in variable name we are declaring the type of data like :string , :number , :boolean as after the variable name 
var myString:string = "testing";
var myNumber:number = 1;
var myBoolean:boolean = true; //types String, number, boolean,arrays, enums, objects .......

// trying to swap data type
//myString = myNumber; // error :Type 'number' is not assignable to type 'string'.
//myBoolean = myString;//        Type 'string' is not assignable to type 'boolean'
//myNumber = myBoolean;//        Type 'boolean' is not assignable to type 'number'

console.log(myString, myBoolean, myNumber);