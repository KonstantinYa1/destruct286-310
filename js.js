// //№286 1
// let arr = [1, 2, 3, 4, 5];

// function func(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

// let result = func(...arr);

// //№288 1
// let arr = [1, 2, 3, 4, 5];

// let min = Math.min(...arr);

// console.log(min);

// //№293 1
// function func(...arr) {
//     let sum = arr.reduce((sum, num) => sum + num);
//     return sum / arr.length;
// }

// console.log(func(1,2,3,4,5)); 

// //№296 1
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let [name, surname, department, position, salary] = arr;

// //№297 1
// function func() {
//     return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let [name, surname, department, position, salary] = func();

// //№298 1
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let [, , department, position] = arr;

// //№300 1
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let [name, surname, ...info] = arr;

// //№301 1
// let arr = ['John', 'Smit', 'development', 'programmer'];

// let [name, surname, department, position = 'trainee'] = arr;

// //№302 1
// function func() {
// 	return (new Date).getDate();
// }

// function func1() {
//     return (new Date).getMonth();
// }

// function func2() {
//     return (new Date).getFullYear();
// }

// let [year = func2(), month = func1(), day = func()] = arr;

// //№304 1
// let options = {
//     color: 'red',
//     width:  400,
//     height: 500,
// };

// let { color, width, height } = options;

// //№305 1
// let options = {
//     color: 'red',
//     width:  400,
//     height: 500,
// };

// let { color: c, width: w, height: h } = options;

// //№306 1
// let options = {
//     width:  400,
//     height: 500,
// };

// let { color = 'black', width, height } = options;

// //№307 1
// let options = {
//     width:  400,
//     height: 500,
// };

// let { color: c = 'black', width: w, height: h } = options;

// //№309 1
// function func([name, surname, department, position, salary]) {
//     console.log(name);
//     console.log(surname);
//     console.log(department);
//     console.log(position);
//     console.log(salary);
// }

// func(['John', 'Smit', 'development', 'programmer', 2000]);

// //№309 2
// function func([name, surname, info]) {
//     console.log(name);
//     console.log(surname);
//     console.log(info);
// }

// func(['John', 'Smit', 'development']);

// //№309 3
// function func([name, surname, department, position = 'джуниор']) {
//     console.log(name);
//     console.log(surname);
//     console.log(department);
//     console.log(position);
// }

// func(['John', 'Smit', 'development']);

// //№309 4
// function func(department, [name, surname], [year, month, day]) {
//     console.log(department);
//     console.log(name);
//     console.log(surname);
//     console.log(year);
//     console.log(month);
//     console.log(day);
// }

// func('development', ['John', 'Smit'], [2018, 12, 31]);

// //№310 1
// function func({ color, width, height }) {
//     console.log(color);
//     console.log(width);
//     console.log(height);
// }

// func({ color: 'red', width: 400, height: 500 });

// //№310 2
// function func({ color = 'black', width, height }) {
//     console.log(color);
//     console.log(width);
//     console.log(height);
// }

// func({ color: 'red', width: 400, height: 500 });
