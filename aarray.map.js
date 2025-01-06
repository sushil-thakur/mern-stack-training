//array
//?map, filter, find ,findindex, reduce, sort, every, some


//?uses map
// const numList =[1,2,3,4,5,6,7,8,9,10];
// numList.map((item,index,array)=>{
//     console.log(item,index);
    
// });

//?change
//? return new array
//? original array length ===returned new array length

// const numList =[1,2,3,4,5,6,7,8,9,10];
// const newArray = numList.map((item,index,array)=>{
//     let newItem = item +100;
//     return newItem;
// });
// console.log(newArray);

//?decrease value of each item by 5a nd return new array
// const numList =[1,2,3,4,5,6,7,8,9,10];
// const newArray = numList.map((item,index,array)=>{
//         let newItem = item -5;
//         return newItem;
//     });
//     console.log(newArray);

//?
let number =[5, 7, 9,10, 12, 14,17]
//print each  number is odd or even from above array
//?map chai for change ko lagi matra ho

// number.map((item,index,array)=>{
//     if(item%2===0){
//         console.log(item,"is even");
//     }else{
//         console.log(item,"is odd");
//     }
// });


//?chnage true to fasle and false to true
//?return new array
let isGraduated =[true,false,false,true];
// const newArray = isGraduated.map((item,index,array)=>{
//             let newItem = !item ;
//             return newItem;
//         });
//         console.log(newArray);

// const newArray = isGraduated.map((item)=>!item);
// console.log(newArray);



//? add five mark to each item which is less than 32 and return new array


// let mark =[25, 55, 60,21,28];
// const newArray = mark.map((item)=>{
//     if (item<32){
//         return(item+5 )
//     }else{
//         return(item)
//     }

// })
// console.log(newArray)
// const newArray = mark.map((item)=( item<32 ? item +5:item));
// console.log(newArray);

//array filter
//?filter item based upon condition
//?return array size is more likely to be different from original size;

// let numList =[-15,25,55,-100,-25]

//?remove negative value from numlist and return new array
// const newArray = numList.filter((item,index,array)=>{
//     if(item>0){
//         return item;
//     }
// })
// console.log(newArray)


// let marksList =[32,55, 60,78];
//generate a new array with mark greater tha 55
// const newArray = marksList.filter((item,index,array)=>{
//         if(item>55){
//             return item;
//         }
//     })
//     console.log(newArray)

    // const newArray = marksList.filter((item)=>item>55);
    // console.log(newArray);

    const student=[
        {
            id:1,
            name:"sujan",
            isGraduated:false
        },
        {
            id:2,
            name:"sandesh",
            isGraduated:true
        } , 
         {
            id:3,
            name:"shirsh",
            isGraduated:false
        },
    ];

    //*add id of each student by 100
    // const newArray = student.map((item,array,index)=>{
    //     item.id=item.id+100;
    //     return item;

    // })
    // console.log(newArray);

    //*get all student who are graduated
    const newArray = student.filter((item,array,index)=>{
        if(item.isGraduated==true){
            return item;
        }

    });
    console.log(newArray);