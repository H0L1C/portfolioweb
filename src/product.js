const works = [
  {
    id: 0,
    name: "IxD",
    content: "商品A詳細",
    image: require("../src/assets/images/myLogo.svg")
  },
  {
    id: 1,
    name: "MP",
    content: "商品B詳細",
    image: "https://placehold.jp/300x220.png"
  },
  {
    id: 2,
    name: "KOUSA",
    content: "商品C詳細",
    image: "https://placehold.jp/300x220.png"
  },
  {
    id: 3,
    name: "ToyLabo",
    content: "商品D詳細",
    image: "https://placehold.jp/300x220.png"
  },
  /* {
     id: 5,
     name: "Habaki",
     content: "商品E詳細",
     image: "https://placehold.jp/300x220.png"
   }*/
]


export default {
  data() {
    return {
      works: works,
    }
  },
  fetch(id) {
    return works
  },
  find(id) {
    return works.find(el => el.id === id)
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(works.find(el => el.id === id))
    }, 0)
  }
}