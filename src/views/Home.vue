<template>
  <div class="home">
    <p> test 新增 标签</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="flag = !flag"> handle </button>
    <dialog></dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Dialog from '@/components/Dialog.vue';

@Component({
  components: {
    HelloWorld,
    Dialog,
  },
})
export default class Home extends Vue {
  flag:Boolean = false
}
</script>
<style lang="less" scoped>
  .home {
    color: antiquewhite;
  }
</style>

