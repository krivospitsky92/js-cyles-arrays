 

// Циклы и массивы + вычисляемые свойства


//1. Создать массив в переменную  и после заполнить его числами последовательно от 5 до 15

 let arr = [5];
 let result = [];

 while(arr < 16) {
   result.push(arr++);
 }
 console.log(result);


// 2. Создать массив и заполнить его 10ю нечетными числами

let arr = [];

for (arr = 0; arr < 20; arr++) {
  if (arr % 2 === 1) {
    console.log(arr);
  }
}

// 3. С помощью функции конструктора User создать 10 пользователей и поместить их в массив

function User(name, age) {
  this.name = name;
  this.age = age;
}

console.log(new User('Вася', 30));
console.log(new User('Петя', 23));
console.log(new User('Коля', 41));
console.log(new User('Вася', 30));
console.log(new User('Петя', 23));
console.log(new User('Коля', 41));
console.log(new User('Вася', 30));
console.log(new User('Петя', 23));
console.log(new User('Коля', 41));
console.log(new User('Вася', 30));


//4. * массив (с примитивными типами) перевести в строку с разделителем & или @

let arr = [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e'];
let a = arr.join(' @ ');
console.log(a);

// 5. * Переменную хранящей обьект преобразовать в массив
