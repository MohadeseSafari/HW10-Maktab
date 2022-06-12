const f1 = () => {
    return new Promise((resolve, reject) => {
        const user = { username: 'Maktab_Sharif', type: 'Admin' };
        if (user.username === 'Mohadese') {
            resolve(user);
        } else {
            reject('user not matched');
        }

    });

}

const f2 = () => {
    return new Promise((resolve, reject) => {
        const product = { title: 'book1', price: 79 };
        if (product.price === 79) {
            resolve(product);
        } else {
            reject('price not matched');
        }

    })
};

let promise = f1();

promise.then(function (data) {
    console.log("data", data);
    return f2();
})
.catch(error=>{
    console.log(error)
});

promise.then((data)=>{ 
f1();
f2();});

