
'use strict';

// const isMumHappy = false;

// // Promise
// const willIGetNewPhone = new Promise(
//     (resolve, reject) => { // fat arrow
//         if (isMumHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mum is not happy');
//             reject(reason);
//         }

//     }
// );

// const showOff = function (phone) {
//     const message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';
//     return Promise.resolve(message);
// };

// // call our promise
// const askMum = function () {
//     willIGetNewPhone
//         .then(showOff)
//         .then(fulfilled => console.log(fulfilled))
//         .catch(error => console.log(error.message));
// };

// askMum();


let one = (opts) => {
    return new Promise(
        (resolve) => {
            setTimeout( () => {
                console.log(opts);
                resolve(opts);
            }, 300);
        }
    );
};

let two = (opts) => {
    return new Promise(
        (resolve, reject) => {
            if(opts === 0) {
                reject('Found an error');
            } else {
                setTimeout( () => {
                    opts++;
                    console.log(opts);
                    resolve(opts);
                }, 500);
            }
        }
    );
};

let three = (opts) => {
    return new Promise(
        (resolve) => {
            setTimeout( () => {
                opts++;
                console.log(opts);
                resolve(opts);
            }, 100);
        }
    );
};

let four = (opts) => {
    return new Promise(
        (resolve) => {
            setTimeout( () => {
                opts++;
                console.log(opts);
                resolve(opts);
            }, 200);
        }
    );
};

one(1)
.then(two)
.then(three)
.then(four)
.catch(err => {
    console.log(err);
});