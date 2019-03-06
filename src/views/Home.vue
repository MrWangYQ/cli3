<template>
  <div class="home">
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
