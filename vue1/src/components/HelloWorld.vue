<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="toggleCount">boolean 변경</button>
    <button
      v-if="count1 === true"
      @click="control1"
    >
      현재 숫자: {{ count2 }}
    </button>
    <button
      v-else
      @click="control2"
    >
      현재 숫자: {{ count2 }}
    </button>
    <br />
    <br />
    <input
      type="text"
      class="textZone"
    />
    <button @click="arrHandle2">arr2에 값 추가</button>
    <ul>
      <li
        v-for="(list, i) in arr2"
        v-bind:key="i"
      >
        <p style="display: inline-block; margin-right: 10px">{{ list.id }}</p>
        <p style="display: inline-block">{{ list.name }}</p>
      </li>
    </ul>

    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
        >vue-cli documentation</a
      >.
    </p>

    <h3
      v-for="(data, i) in arr"
      :key="data"
    >
      {{ data.post1 + ` / index ${i}` }}
    </h3>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      //v-if, v-else, v-for - used;
      count1: false,
      count2: 0,
      arr: [
        {
          id: 1,
          post1: "Installed CLI Plugins1",
        },
        {
          id: 2,
          post1: "Installed CLI Plugins2",
        },
        {
          id: 3,
          post1: "Installed CLI Plugins3",
        },
      ],
      arr2: [],
    };
  },
  methods: {
    control1() {
      this.count2++;
    },
    control2() {
      this.count2--;
    },
    toggleCount() {
      this.count1 = !this.count1;
    },
    arrHandle2() {
      const arrMain = this.arr2;
      arrMain.push({
        id: Math.floor(Math.random() * 11),
        name: document.querySelector(".textZone").value,
      });
      console.log(arrMain);
      console.log(this.arr2);
    },
  },
  watch: {
    count2: function (newValue, oldValue) {
      // console.log("바뀐값 =>", newValue);
      // console.log("이전값 =>", oldValue);
    },
  },
};
// const dic = document.querySelector('.textZone');
// console.log(dic.value)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
