const database = [
    { id: 1, name: '商品A', price: 100, content: '商品A詳細', image: require("./assets/images/myLogo.svg") },
    { id: 2, name: '商品B', price: 200, content: '商品B詳細', image: "https://placehold.jp/200x200.png" },
    { id: 3, name: '商品C', price: 300, content: '商品C詳細', image: "https://placehold.jp/200x200.png" },
    { id: 4, name: '商品D', price: 400, content: '商品D詳細', image: "https://placehold.jp/200x200.png" },
    { id: 5, name: '商品D', price: 500, content: '商品E詳細', image: "https://placehold.jp/200x200.png" },
]

export default {
    fetch(id) {
        return database
    },
    find(id) {
        return database.find(el => el.id === id)
    },
    asyncFind(id, callback) {
        setTimeout(() => {
            callback(database.find(el => el.id === id))
        }, 0)
    },
}
