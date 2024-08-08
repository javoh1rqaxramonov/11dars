// 1 - masala

// function toqSonTop(arg) {
//   let counter = 0;
//   for (const iterator of arg) {
//     if (iterator % 2 == 1) {
//       counter++;
//     }
//   }
//   return counter;
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(toqSonTop(arr));

// 2 - masala

// let matn = "sa2lom1";
// function sonAjrat(str) {
//   for (const iterator of str) {
//     if (iterator > 0) {
//       newArr.push(iterator)
//     }
//   }
//   return newArr;
// }
// let newArr = [];
// console.log(sonAjrat(matn));

// 3 - masala

// let arr = "salom akalar ishlar yaxshimi va hayr";
// function countStr(arr){
// let newArr = arr.split(' ')
// console.log(newArr.length);
// }
// countStr(arr)

// 4 - masala

// function findMin(arg) {
//   let min = arr[0];
//   for (const iterator of arg) {
//     if (iterator < min) {
//       min = iterator;
//     }
//   }
//   return min;
// }
// let arr = [8,12,24,5,12];
// console.log(findMin(arr));

// 5 - masala

// let test = "salom xayr";
// function reversedArr(arr) {
//   let newArr = arr.split(" ");
//   let newarg = [];
//   for (let i = newArr.length; i >= 0; i--) {
//     newarg.push(newArr[i]);
//   }
//   console.log(newarg.join(' '));
// }
// reversedArr(test);

// 6 - masala

// function kopaytmaTop(arg) {
//     let p = 1;
//     for (const iterator of arg) {
//         p *= iterator;
//     }
//     return p;
// }
// let arr = [1,2,3,4]
// console.log(kopaytmaTop(arr));

// 7 - masala

// function sonSaralash(arg) {
//     arg.sort(function(a, b) {
//         return b - a;
//     })
//     return arg;
// }
// let arr = [6, 1, 7, 8, 4, 3];
// console.log(sonSaralash(arr));

// 8 - masala

// function berilganMatn(arg) {
//     let res = arg.slice(0,5);
//     return res;
// }
// let test = "JavaScript";
// console.log(berilganMatn(test));

// 9 - masala

// function berilganElement(arg) {
//     let res = arg.join().toUpperCase().split();
//     return res;
// }
// let test = ["salom", "bolalar"];
// console.log(berilganElement(test));

// 10 - masala

// function toqSonQaytar(arg) {
//     for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             newArr.push(iterator)
//         }
//     }
//     return newArr;
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// let newArr = [];
// console.log(toqSonQaytar(arr));

// 11 - masala

// function strLength(arg) {
//     let res = '';
//     for (const iterator of arg) {
//         if (iterator.length > res.length) {
//             res = iterator
//         }
//     }
//     return res;
// }
// let arr = ["Php", "JavaScript", "Python"];
// console.log(strLength(arr));

// 12 - masala

// function sumArr(arg) {
//     let sum = 0;
//     for (const iterator of arg) {
//         sum += iterator;
//     }
//     return sum;
// }
// let arr = [1,2,3,4,5];
// console.log(sumArr(arr));

// 13 - masala

// function manfiySon(arg) {
//   for (const iterator of arg) {
//     if (iterator > 0) {
//       newArr.push(iterator);
//     }
//   }
//   return newArr;
// }
// let arr = [1, -2, 3, -4, 5, -6];
// let newArr = [];
// console.log(manfiySon(arr));

// 13 - masalada savoliga tushunmadim manfiy sonlarni chiqarish kerakmi yoki musbat, manfiy sonlarni olib tashlang deganiga faqat musbatlarini chiqarib qo'yaverdim

// 15 - masala

// function kvadratQaytar(numbers) {
//     let newArr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         newArr.push(numbers[i] * numbers[i]);
//     }
//     return newArr;
// }
// let numbers = [1,2,3,4,5];
// let kvadrat = kvadratQaytar(numbers);
// console.log(kvadrat);

// 17 - masala

// function reverseArr(arg) {
//     for (let i = arg.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }
// let arr = [1,2,3,4];
// let newArr = [];
// console.log(reverseArr(arr));

// 18 - masala

// let arr = ["salom", "dunyo"];
// function alifboTartibida(arg) {
//     return arg.sort()
// }
// console.log(alifboTartibida(arr));

// 20 - masala

// function boshHarfiniKatta(arg) {
//     let res = arg.map(function(value) {
//         return value[0].toUpperCase() + value.slice(1);
//     })
//     return res;
// }
// let arr = ["salom", "bolalar"]
// console.log(boshHarfiniKatta(arr));

// 22 - masala

// function reverseStr(str) {
//     let res = str.split( '' ).reverse().join("");
//     return res;
// }
// let test = "salom yaxshimisizlar";
// console.log(reverseStr(test));