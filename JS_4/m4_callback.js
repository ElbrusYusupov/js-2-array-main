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

const onGetPositionSuccess = function (potions) {
    console.log('Это вызов onGetPositionSuccess');
    console.log(potions);

};
const onGetPositionError = function (error) {
    console.log('Это вызов onGetPositionError');
    console.log(error);
};
window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
);