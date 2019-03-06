<template>
  <div class="about">
    <h1><a :href="getURL" target="_blank"> This is an about page</a></h1>
    <TS tsname='This is TS' tstype='vmess'></TS>
  </div>
</template>

<!-- <script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import fetchUntil from "../http/fetch";

@Component
export default class About extends Vue {
  sendTaskList(): void {
    let fetchUntils = new fetchUntil();
    fetchUntils.init()
    .setUrl('//dev.fe.com:7300/mock/5bf11fb71d2cb328eddca64f/SmartSs/getTaskList')
    .setMethod('POST')
    .setOvertime(30*1000)
    .setHeader({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'DEVICE-ID': 'iphone6',
      'SYSTEM': 'ios/android',
    })
    .setBody('id')
    .dofetch()
    .then((data) => {
      console.log('=> data: ', data);
    })
    .catch((error) => {
      console.log('=> catch: ', error);
    });
  }
  mounted() {
    this.sendTaskList()
  }
}
</script>
-->

<script>
import FetchUntil from '../http/fetch';
import TS from '../components/TS'

export default {
  computed: {
    getURL() {
      const {
        id, name, user, from, to,
      } = this.$route.query;
      return `//172.16.4.152:8080/#/home?id=${id}?name=${name}?user=${user}`;
    },
  },
  components: {
    TS,
  },
  methods: {
    sendTaskList() {
      const {
        id, name, user, from, to,
      } = this.$route.query;
      const fetchUntils = new FetchUntil();
      fetchUntils.init()
        .setUrl('//dev.fe.com:7300/mock/5bf11fb71d2cb328eddca64f/SmartSs/getTaskList')
        .setMethod('POST')
        .setOvertime(30 * 1000)
        .setHeader({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'DEVICE-ID': 'iphone6',
          SYSTEM: 'ios/android',
        })
        .setBody({
          id, name, user, from, to,
        })
        .dofetch()
        .then((data) => {
          console.log('=> data: ', data);
        })
        .catch((error) => {
          console.log('=> catch: ', error);
        });
    },
  },
  mounted() {
    this.sendTaskList();
  },
};
</script>
