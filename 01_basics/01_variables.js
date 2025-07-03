const accountId = 144553
// value cannot be changed in const
let accountEmail = "vikas123@gmail.com"
var accountPassword = "12345"

/* Prefer not to use var because of issue in block scope and functional scope */

let accountState;
// if no value will be given to and variable then the output will be - undefined.

accountCity = "Prayagraj"
//variable can also be declared without var const and let but this is not a good method.

// accountId = 2 // Not allowed as const does not allows to change the entity

accountEmail = "abc@gmail.com"
accountPassword = "12312"
accountCity = "New Delhi"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //to run more than one entity at a time in a tabular form