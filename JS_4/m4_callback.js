// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
    
//     console.log( result);
// };

// const add = function (x, y) {
//     return x + y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);


// doMath(2, 3, function (x, y) {
//     return x + y; 
// });                       // инлай-функция
// doMath(10, 8, function (x, y) {
//     return x - y; 
// });                       // инлай-функция



// const buttonRef = document.querySelector('.js-button');
// // const handleBtnClick = function () {
// //     console.log('Клик по кнопке ' + Date.now());
// // };
// // buttonRef.addEventListener('click', handleBtnClick)

// buttonRef.addEventListener('click', function () {
//     console.log('Клик по кнопке ' + Date.now());
// })

// const onGetPositionSuccess = function (potions) {
//     console.log('Это вызов onGetPositionSuccess');
//     console.log(potions);

// };
// const onGetPositionError = function (error) {
//     console.log('Это вызов onGetPositionError');
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

// const callback = function () {
//     console.log('Через 2 сек внутри колбека в таймауте');
// };



// console.log('В коде перед таймаутом');

// setTimeout(callback, 2000)

// console.log('В коде после таймаута');

// const onRequestSuccess = function (response) {
//     console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
//     console.log(response);
// }

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);



//// ВАЖНО ///////////////////////////////////////////////////////////////////////////////////////

// const filter = function (array, test) {

//     const filteredArray = [];

//     for (const el of array) {
//         // console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el)
//         }
    
//     }
//     return filteredArray
// }

// const callback1 = function (value) {
//     return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);


// const callback2 = function (value) {
//     return value < 5;
// }

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2)
// console.log(r2);



// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];


// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity)
// console.log(r3);

//// /ВАЖНО ///////////////////////////////////////////////////////////////////////////////////////


function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest("Манго", function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// registerGuest("Манго", greet);


//// /Callbacks


const fnA = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnA';

    const innerFunction = function () {
        console.log(innerVariable);
    }
}

 