


//Object Declarations
let rockyObj = {
    'Name': 'Rocky',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'Back to The Future',
    'Status': 'Inactive'
  }
  let miroslavObj = {
    'Name': 'Miroslav',
    'Favorite Food': 'Sushi',
    'Favorite Movie': 'American Psycho',
    'Status': 'Active'
  }
  let donnyObj = {
    'Name': 'Donny',
    'Favorite Food': 'Singapore chow mei fun',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Inactive'
  }
  let mattObj = {
    'Name': 'Matt',
    'Favorite Food': 'Brisket Tacos',
    'Favorite Movie': 'The Princess Bride',
    'Status': 'Active'
  }
  // add a object whith my personal Data
  let joseObj = {
    'Name': 'Jose',
    'Favorite Food': 'Pizza',
    'Favorite Movie':'Da vinci Code',
    'Status': 'Active'
  }

// Crate an array of Obejcts    
  let arrObj = [];
  arrObj.push(rockyObj);
  arrObj.push(miroslavObj);
  arrObj.push(mattObj);
  arrObj.push(joseObj);
// add field Date to the object in the array
const actObj = arrObj.map((element)=>{
     element.Date = Date();
     return element
});
// filter the active objects.
const arrayObject = actObj.filter((element)=>{
     if(element.Status === 'Active'){
        return element
     }
});

// Crate a function to Sort and Print the Obejcts where Status is 'Active'
function SortAndPrint(aObject,property) {
if(aObject.length == 0){
    console.log("no Active records are found");
}
else{

aObject.sort((element1, element2)=>{
    if(element1[property] > element2[property]){
        return 1;

    } if(element1[property] < element2[property]){
        return -1;
    } else return 0;
});
console.log(aObject);
}
}
// Example of SortAndPrint function
SortAndPrint(arrayObject,'Name');














