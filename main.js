let mas = [0, 1, 2, 3];

let json = JSON.stringify(mas);
console.log(json);

localStorage.setItem('jsonLs', json);

let str = localStorage.getItem('jsonLs');

console.log(typeof (str));

let masParse = JSON.parse(str);

console.log(masParse)

// Практическая работа

// задание 1
// Преобразуйте объект в JSON, а затем обратно в обычный объект:
let user = {
    name: "Василий Иванович",
    age: 35
};

// Задание 2
// Дана JSON строка '["Коля", "Вася", "Петя"]'.
// Преобразуйте ее в массив JavaScript и выведите в консоль элемент "Петя".

// Задание 3
// Дан объект {a: 'aaa', b: 'bbb'}. Преобразуйте его в JSON. Записать в LS