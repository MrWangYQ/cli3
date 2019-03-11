<template>
    <div style="position:relative;">
        TS {{ exclamationMarks }}
        <div class="caption" ref="caption" @click="Geolocation">{{ tsname }}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Provide, Component } from 'vue-property-decorator'

@Component
export default class TS extends Vue {
    name: string = 'TS';
    // prop ---> javascript
    @Prop() tsname!: string;
    @Prop() tstype!: string;
    // data ---> javascript  参数类型
    enthusiasm: string = '';
    bury!: string | boolean;

    Geolocation(): void {
        this.enthusiasm = this.tsname + ' hanlded' + this.tstype;
    }
    // mounted ---> javascript
    mounted(): void {
        console.log('mounted');
    }
    // created ---> javascript
    created(): void {
        // console.log('created', this.tstype);
    }
    // computed
    get exclamationMarks(): string {
        return String(this.enthusiasm) + ' handled ' + this.tstype;
    }
}
</script>


<style scoped lang='less'>
    .caption {
        position: absolute;
        width: 100%;
        height: 15px;
        overflow: hidden;
        p {
            font-size: 14px;
            margin: 0px;
            padding: 0px;
        }
    }
    .captioned {
        height: auto;
    }
</style>
