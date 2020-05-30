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
          name: "MP",
          price: 200,
          content: "商品B詳細",
          image: "https://placehold.jp/300x220.png"
        },
        {
          id: 3,
          name: "KOUSA",
          price: 300,
          content: "商品C詳細",
          image: "https://placehold.jp/300x220.png"
        },
        {
          id: 4,
          name: "ToyLabo",
          price: 400,
          content: "商品D詳細",
          image: "https://placehold.jp/300x220.png"
        },
       /* {
          id: 5,
          name: "Habaki",
          price: 500,
          content: "商品E詳細",
          image: "https://placehold.jp/300x220.png"
        }*/
      ]


export default {
    data() {
        return {
            works: works,
        }
    }
}