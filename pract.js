"use strict";

const menuBar = document.querySelector(".menu--bar");
const option = document.querySelector(".option");
const header = document.querySelector(".headed");

menuBar.addEventListener("click", function () {
  header.classList.toggle("headers");
  option.classList.toggle("visibles");
});

// function sumArray(array) {
//   if (!Array.isArray(array)) return 0;
//   if (array.length === 0) return 0;
//   if (array.length === 1) return 0;
//   let sum = 0;
//   let highest = array[0];
//   let lowest = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "number") continue;

//     if (array[i] > highest) highest = array[i];
//     if (array[i] < lowest) lowest = array[i];
//     sum = sum + array[i];
//   }

//   return sum - (highest + lowest);
// }
// console.log(sumArray([6, 2, 1, 8, 10, 30]));

// function invert(array) {
//   let elements = [];
//   if (array.length === 0) return elements;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] >= 0 || array[index] <= 0)
//       elements.push(array[index] * -1);
//   }
//   //return array.map((num) => num * -1);
//   return elements;
// }
// console.log(invert([2, -3, -9, 0, 10]));

// const updateLight = (current) =>
//   ({
//     green: "yellow",
//     yellow: "red",
//     red: "green",
//   }[current]);
// console.log(updateLight(green));

// function solution(str, ending) {
// TODO: complete
// let strVar = str.split("");
// let endingVar = ending.split("");
// console.log(strVar);
// console.log(endingVar);
// for (let i = 0; i < endingVar.length; i++) {
//   for (let j = endingVar.length - i; j < strVar[i + 2].length; j++) {}
// }
//   return str.includes(ending) ? true : false;
// }
// console.log(solution("abcde", "tj"));

// function countSheeps(sheep) {
//   let count = 1;
//   for (let i = 0; i < sheep.length; i++) {
//     console.log(sheep[i]);
//     if (typeof sheep[i] !== Boolean) continue;
//     if (true) count = count++;
//   }
//   return count;
// }
// console.log(
//   countSheeps([
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
