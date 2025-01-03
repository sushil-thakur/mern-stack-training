//object
// 1. object is a non-primitive data type in javascript.
//key value pair
// let x={};
// console.log(x, typeof x);

//primitive data type=>string, number, boolean, undefined, null
// unprimitive data type=>object, array, function
// collection of primitive data type
//user 1
// let firtname1 ="wakanda"
// let lastname1 = "forever";

// //user 2
// let  firtname2 ="sujan";
// let lastname2 = "ben";

// let user1={
//     firstname:"wakanda",
//     lastname:"forever",
//     isMarried:false,
// };
// let user2={
//     firstname:"sujan",
//     lastname:"ben",
//     isMarried:true,
// };

// console.log(user2)

//crud
//create/add/insert
//read / Retrieve
//update/ edit
//delete/Remove

// let laptopDetails = {
//     brand: "Dell",
//     model: "XPS 13",
  
// };
// console.log(laptopDetails)

//create /insert add color of laptop
//dot operator
// square bracket



// //read
// console.log(laptopDetails.brand);
// console.log(laptopDetails["model"]);

//create /insert add color of laptop
// laptopDetails.color = "black";
// laptopDetails["ram"] = "16GB";

// console.log(laptopDetails)


// //delete
// delete laptopDetails.model;
// console.log(laptopDetails)

// //edit
// laptopDetails.brand = "HP";
// console.log(laptopDetails)

//? upsert update or insert

//2create an object named my housedetails with the following properties
// number of rooms
//number of members
//col


let housedetails ={
    number_of_rooms: 5,
    number_of_members: 4,
    color: "white",
    built_year: 2020,
    storey: 2,
};
delete housedetails.number_of_members;
console.log(housedetails);

housedetails .number_of_rooms = 6;
console.log(housedetails);

housedetails.estimated_price_of_house = 1000000;
console.log(housedetails);

