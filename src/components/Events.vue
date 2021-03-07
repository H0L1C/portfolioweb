<template>
  <div class="section">
    <h2 id="events">EVENTS</h2>
    <p class="caption">お手伝いさせて頂いたイベントの一覧です。</p>
    <div class="eventsList">
      <div class="tabs">
        <input type="radio" name="tab" id="tab1" value="1" v-model="tabShow" />
        <label for="tab1">{{ year }}</label>
        <input type="radio" name="tab" id="tab2" value="2" v-model="tabShow" />
        <label for="tab2">{{ year + 1 }}</label>
      </div>
      <div class="eventsContents">
        <div v-if="loading" class="loading">
          <div class="spinner">
            <span>Loading...</span>
          </div>
        </div>
        <div v-if="error" class="loading">
          <p class="errorMessage">情報の取得に失敗しました。</p>
        </div>
        <table v-if="tabShow == 1">
          <thead>
            <tr>
              <th>日付</th>
              <th>イベント</th>
              <th>担当</th>
            </tr>
          </thead>
          <tr v-for="item in contents2020" :key="item.id">
            <td>{{ item.year }}/{{ item.date }}</td>
            <td class="eventsLink">
              <a :href="item.url" target="_blank" rel="noopener">
                {{ item.event }}
              </a>
            </td>
            <td>{{ item.position }}</td>
          </tr>
        </table>

        <table v-else-if="tabShow == 2">
          <thead>
            <tr>
              <th>日付</th>
              <th>イベント</th>
              <th>担当</th>
            </tr>
          </thead>
          <tr v-for="item in contents2021" :key="item.id">
            <td>{{ item.year }}/{{ item.date }}</td>
            <td class="eventsLink">
              <a :href="item.url" target="_blank" rel="noopener">
                {{ item.event }}
              </a>
            </td>
            <td>{{ item.position }}</td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

const baseURL =
  "https://script.google.com/macros/s/AKfycbyhba3Or-O040D-KKmABIu8Pc0jfAXE6zsN4tZPjdnw4VQhB3UGWG78/exec";
export default {
  data() {
    return {
      year: 2020,
      tabShow: 1,
      loading: true,
      error: false,
      list: [],
    };
  },
  computed: {
    contents2020: function () {
      return this.list.filter(function (el) {
        return el.year == this.year;
      }, this);
    },
    contents2021: function () {
      return this.list.filter(function (el) {
        return el.year == this.year + 1;
      }, this);
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(baseURL)
        .then((res) => {
          this.loading = false;
          this.list = res.data;
        })
        .catch((err) => {
          this.error = true;
        });
    },
  },
};
</script>

<style >
input {
  display: none;
}

.eventsContents {
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 400px;
  box-shadow: 0px 1px 3px 0px #00000026;
}

.eventsList {
  width: 50%;
  margin: auto;
}
.tabs {
  overflow: hidden;
}

.tabs label {
  font-family: "Montserrat";
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 20px;
  float: left;
  padding: 10px 40px;
  border: solid 2px #20202010;
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  transition: 0.3s ease;
}

.tabs label:hover {
  opacity: 0.7;
}

.tabs label:not(:first-of-type) {
  border-left: none;
}

.tabs :checked + label {
  background-color: var(--sub-color);
  color: var(--main-bg);
  cursor: auto;
}

table {
  width: 100%;
  border: none;
  border-collapse: collapse;
  font-family: "Noto Sans JP", sans-serif;
  color: var(--main-text);
}

th {
  height: 36px;
  line-height: 36px;
  background-color: #f3f3f3;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
}

td {
  height: 50px;
  line-height: 50px;
  border-bottom: dotted 2px #20202010;
}

th:first-child,
td:first-child {
  width: 16%;
  text-align: center;
  letter-spacing: 0.5px;
}

td:not(:first-child) {
  padding: 0 0 0 30px;
}

th:last-child,
td:last-child {
  width: 34%;
}

.eventsLink a {
  padding: 10px 0;
  font-weight: bold;
  color: var(--sub-color);
  transition: all ease 0.3s;
}

.eventsLink a:hover {
  opacity: 0.7;
}

.loading {
  position: absolute;
  z-index: 9998;
  width: 100%;
  height: 100%;
  background-color: var(--main-bg);
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transform-origin: center;
  transform-origin: center;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border-width: 8px;
  border-style: solid;
  border-color: var(--sub-color) rgba(255, 255, 255, 0.12)
    rgba(255, 255, 255, 0.12);
  -webkit-animation: spinnerAnim 1.5s infinite linear forwards;
  animation: spinnerAnim 1.5s infinite linear forwards;
}

.spinner span {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: var(--sub-color);
  animation: spinnerText 1.5s infinite linear forwards reverse;
}

@-webkit-keyframes spinnerAnim {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes spinnerAnim {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0);
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@-webkit-keyframes spinnerText {
  0% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    opacity: 0;
    -webkit-transform: translate(-50%, -50%) rotate(180deg);
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes spinnerText {
  0% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    opacity: 0;
    -webkit-transform: translate(-50%, -50%) rotate(180deg);
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.errorMessage {
  margin: 20px 0 0 0;
  color: var(--sub-color);
  font-weight: bold;
}
</style>