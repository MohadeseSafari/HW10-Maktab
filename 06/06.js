// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         throw new Error("Whoops!");
//     }, 1000);
// }).catch(alert);
const result = new Promise(function (resolve, reject) {
    setTimeout(() => {
    reject(new Error("Whoops!"));
    }, 1000);
    });
    result.catch(alert);