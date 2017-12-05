// This is our fat arrow function that prints output 
// with string and number parameters passed on as user input
let authorCount = (authName:string,count:number) => {document.getElementById("para").innerHTML=`The author, ${authName} has authored ${count} books.`};
