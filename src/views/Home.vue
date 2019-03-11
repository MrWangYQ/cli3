<template>
  <div class="home">
    <p> test 新增 标签 </p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="handle"> handle </button>
    <Dialog :showFlag='flag'></Dialog>
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
  name: string = 'Home';
  flag: Boolean = false;
  mounted(): void {
    // console.log(this.flag, 'flag');
  }
  handle() {
    this.flag = !this.flag;
    // console.log('-----------', this.flag);
  }
}
</script>
<style lang="less" scoped>
  .home {
    color: #303030;
  }
</style>

