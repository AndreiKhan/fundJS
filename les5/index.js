//------1 задание------

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7
}

console.log(Object.values(numbers).filter(number => number >= 3));



//------2 задание------

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            }
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            }
        }
    ]
};

console.log(`author: ${post.author}`);
console.log(`dislikes: ${post.comments[0].rating.dislikes}`);
console.log(`userId: ${post.comments[1].userId}`);
console.log(`text: ${post.comments[1].text}`);



//------3 задание------

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    }
];

for (const key in products) {
    console.log(`Старая цена ${products[key].price} у товара с Id ${products[key].id}`);

    products[key].price *= 0.85;

    console.log(`Новая цена ${products[key].price} у товара с Id ${products[key].id}`);
}



//------4 задание------

const productsPhoto = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg"
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    }
];

const productsWithPhoto = productsPhoto.filter(product => 'photos' in product && product.photos.length !== 0);

const productsSortPrice = productsPhoto.slice().sort((a, b) => a.price - b.price);

console.log(productsPhoto);
console.log(productsWithPhoto);
console.log(productsSortPrice);



//------5* задание------

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const days = en.reduce((result, key, index) => {
    result[key] = ru[index];
    return result;
}, {});

console.log(days);