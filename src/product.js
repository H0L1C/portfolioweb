const works = [
        {
          id: 1,
          name: "IxD",
          price: 100,
          content: "商品A詳細",
          image: require("../src/assets/images/myLogo.svg")
        },
        {
          id: 2,
          name: "商品B",
          price: 200,
          content: "商品B詳細",
          image: "https://placehold.jp/200x200.png"
        },
        {
          id: 3,
          name: "商品C",
          price: 300,
          content: "商品C詳細",
          image: "https://placehold.jp/200x200.png"
        },
        {
          id: 4,
          name: "商品D",
          price: 400,
          content: "商品D詳細",
          image: "https://placehold.jp/200x200.png"
        },
        {
          id: 5,
          name: "商品D",
          price: 500,
          content: "商品E詳細",
          image: "https://placehold.jp/200x200.png"
        }
      ]


export default {
    data() {
        return {
            works: works,
        }
    }
}