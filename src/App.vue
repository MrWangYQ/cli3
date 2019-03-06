<template>
  <div id="app">
    <div id="nav">
      <p @click="SendPathHome"><a> Home</a></p>
      <p @click="SendPathAbout"><a> About</a></p>
      <!-- <p @click="SendPathTS"><a> TS </a></p> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
    name:string = 'APP'

    SendPathHome(): void {
      this.$router.push({
        path: '/about',
        query: {
          id: '1', name: 'zhangsan', user: 'xixi', from: 'app', to: 'about',
        },
      });
      console.log('hello SendPathHome');
    }

    SendPathAbout(): void {
      this.$router.push({
        path: '/',
      });
      console.log(' hello SendPathAbout');
    }
    // SendPathTS(): void {
    //   this.$router.push({
    //     path: '/ts',
    //     query: {
    //       tsname: 'ts'
    //     }
    //   });
    //   console.log(' hello SendPathAbout');
    // }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  p {
    display: inline-block;
    font-size: 25px;
    border: 1px solid #cccccc;
    margin: 10px;
    width: 100px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
