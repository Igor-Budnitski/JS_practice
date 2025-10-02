//*****Promises*****

const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);

    if (rand === 0) {
        resolve();
    } else {
        reject();
    }
});

myPromise
    .then(() => console.log('Success!'))
    .catch(() => console.error('Something wwent wrong!'));

function getUser() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "Alex" }), 1000));
}

function getOrders(userId) {
    return new Promise(resolve => setTimeout(() => resolve([{ id: 101 }, { id: 102 }]), 1000));
}

function getOrderDetails(orderId) {
    return new Promise(resolve => setTimeout(() => resolve({ orderId, product: "Laptop" }), 1000));
}

getUser()
    .then(user => {
        console.log("Пользователь:", user);
        return getOrders(user.id);
    })
    .then(orders => {
        console.log("Заказы:", orders);
        return getOrderDetails(orders[0].id);
    })
    .then(details => {
        console.log("Детали заказа:", details);
    })
    .catch(err => console.error("Ошибка:", err));


async function process() {
    try {
        const user = await getUser();
        console.log("Пользователь:", user);

        const orders = await getOrders(user.id);
        console.log("Заказы:", orders);

        const details = await getOrderDetails(orders[0].id);
        console.log("Детали заказа:", details);

    } catch (err) {
        console.error("Ошибка:", err);
    }
}

process();
