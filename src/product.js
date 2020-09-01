const works = [
  {
    id: 0,
    name: "test",
    content: "商品B詳細",
    image: "https://placehold.jp/300x220.png",
    caption: "ここに簡易的な説明をいれる",
    sections: [
      {
        title: "test1",
        img: require("./assets/images/IO.png"),
        text: "ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる",
      },
      {
        title: "test2",
        img: "https://picsum.photos/300/220",
        text: "ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる",
      },
      {
        title: "test3",
        img: "https://picsum.photos/300/220",
        text: "ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる",
      }
    ]
  },
  {
    id: 1,
    name: "MP",
    content: "商品B詳細",
    image: "https://placehold.jp/300x220.png",
    caption: "ここに簡易的な説明をいれる",
    sections: [
      {
        title: "test1",
        img: require("./assets/images/IO.png"),
        text: "ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる",
      },
      {
        title: "test2",
        img: "https://placehold.jp/300x220.png",
        text: "",
      },
      {
        title: "test3",
        img: "https://picsum.photos/300/220",
        text: "",
      }
    ]
  },
  {
    id: 2,
    name: "KOUSA",
    content: "商品B詳細",
    image: "https://placehold.jp/300x220.png",
    caption: "ここに簡易的な説明をいれる",
    sections: [
      {
        title: "test1",
        img: require("./assets/images/IO.png"),
        text: "ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる",
      },
      {
        title: "test2",
        img: "https://placehold.jp/300x220.png",
        text: "",
      },
      {
        title: "test3",
        img: "https://picsum.photos/300/220",
        text: "",
      }
    ]
  },
  {
    id: 3,
    name: "hoge",
    content: "商品B詳細",
    image: "https://placehold.jp/300x220.png",
    caption: "ここに簡易的な説明をいれる",
    sections: [
      {
        title: "test1",
        img: require("./assets/images/IO.png"),
        text: "ここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいるここに説明がはいる",
      },
      {
        title: "test2",
        img: "https://placehold.jp/300x220.png",
        text: "",
      },
      {
        title: "test3",
        img: "https://picsum.photos/300/220",
        text: "",
      }
    ]
  },

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