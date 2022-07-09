console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
//changed from const to let per instructor feedback
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);
console.table(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array

console.log('second item in the supply changes is', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');

let removedItem = supplyChanges.pop();
console.log('Removed the last item', removedItem);
console.log(supplyChanges);


// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push (25);
console.log(supplyChanges);



// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
    for( let i = 0; i < supplyChanges.length; i++ ){
        console.log(' in 3 part for loop', supplyChanges[i]);

        if(supplyChanges[i] > 0 ){
            console.log('added X parts', supplyChanges[i]);
        }
        if(supplyChanges[i] == 0){
            console.log('No Change', supplyChanges[i]);
            
        }
        else if(supplyChanges[i] < 0){
            console.log('revmoved x parts', supplyChanges[i]);
        }
        
    }



// // STRETCH GOALS
// console.log('---  Stretch Goals  ---');
// // 7. Rewrite the `for` loop from #6 as a `for of` loop. 
// console.log('7. Showing supplyChanges with "for of" loop');


for(let itemSupply of supplyChanges){
    console.log('7.Showing supply changes with for of loop' , itemSupply);
}




// // 8. Write a loop to determine the total number of parts available by
// //    adding up all the numbers in the 'supplyChanges' array.
// console.log('8. Total supplies available is:');





let sum = 0;

    // for( let i = 0; i < supplyChanges.length; i++ ){
    //     sum += supplyChanges[i]
    //     console.log('8 Total supplies available is', sum);}



for (let itemSupply of supplyChanges) {
  sum += itemSupply;
}
    console.log('8.Total supplies available is', sum); 

// // 9. We have a large stash of parts in our warehouse that we 
// //    need to box up and get ready for shipment. 
// //    There are 572 parts in total, and each box holds 7 parts.
// //    Use a `while` loop to keep adding parts to boxes until
// //    no more boxes can be filled.
// //    Then log how many boxes were filled, and how many parts are left over.
// console.log('9. Filling boxes with a "while" loop');


// let boxes = 7;
// const parts = 572
// while( parts >= 0 ||
//     count +=7
//     )

