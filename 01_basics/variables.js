const accountId = 310323
let accountEmail= "rutujkoli7@ymail.com" //use let
var accountPassword = "12345" //dont use var because of issue with block scope and functional scope
accountCity= "Mumbai" //works in js but not preferred 

//accountId = 60806 //cannot change const, will throw error
accountEmail="rutuj@ymail.com"
accountPassword = "12121212"
accountCity ="Surat"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])