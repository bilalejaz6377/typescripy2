// lower case
let personName:  string = "zaid"
console.log("lowercase:", personName.toLowerCase()) ;

// upper case
console.log("uppercase:", personName.toLocaleUpperCase()) ;

// tittle case
console.log("tittlecase:",personName.replace(/\bw/g,c => c.toUpperCase())) ;