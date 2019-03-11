<template>
    <div 
        class="w-dialog"
        :class="handleDialog ? 'w-show' : 'w-hidden'"
        @click.prevent="handleDialog = !handleDialog">
        <section class="dialog-content" @click.stop=''>
            <h4>{{ dialog_title }}<span class="dialog-content-title"></span></h4>
            <div class="dialog-content">
                内容
                <el-input
                    v-model="form.dynamic_server_start"
                    class="select_width"
                    :class="handleNum('dynamic_server', form.dynamic_server_start) && handleFlagServer ? '' : 'errorNum'"
                    @change="handle('dynamic_server', form.dynamic_server_start, form.dynamic_server_end)"
                    placeholder="输入数字"
                    style="width: 65px;">
                </el-input>
                <span>至</span>
                <el-input
                    v-model="form.dynamic_server_end"
                    class="select_width"
                    :class="handleNum('dynamic_server', form.dynamic_server_end) && handleFlagServer ? '' : 'errorNum'"
                    @change="handle('dynamic_server', form.dynamic_server_start, form.dynamic_server_end)"
                    placeholder="输入数字"
                    style="width: 65px; margin-left: 10px;">
                </el-input><br/>
                <el-input
                    v-model="form.dynamic_appoint_start"
                    class="select_width"
                    :class="handleNum('dynamic_appoint', form.dynamic_appoint_start) && handleFlagAppoint ? '' : 'errorNum'"
                    @change="handle('dynamic_appoint', form.dynamic_appoint_start, form.dynamic_appoint_end)"
                    placeholder="输入数字"
                    style="width: 65px;">
                </el-input>
                <span>至</span>
                <el-input
                    v-model="form.dynamic_appoint_end"
                    class="select_width"
                    :class="handleNum('dynamic_appoint', form.dynamic_appoint_end) && handleFlagAppoint ? '' : 'errorNum'"
                    @change="handle('dynamic_appoint', form.dynamic_appoint_start, form.dynamic_appoint_end)"
                    placeholder="输入数字"
                    style="width: 65px; margin-left: 10px;">
                </el-input>
            </div>
        </section>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'
import { Prop, Component, Watch } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
    name: string = 'Dialog'
    form: Object = {
        dynamic_server_start: '',
        dynamic_server_end: '',
        dynamic_appoint_start: '',
        dynamic_appoint_end: '',
    }
    isNum: RegExp = /^[0-9]*[1-9][0-9]*$/       // 正则
    handleFlagServer: Boolean = true
    handleFlagAppoint: Boolean = true

    // @Prop() showFlag: Boolean = false;
    @Prop() showFlag!: Boolean;
    handleDialog: Boolean = false;
    dialog_title: string = '标题';

    // get handleDialog(): Boolean {
    //     return this.showFlag ? true : false; 
    // }
    @Watch('showFlag')
    watchShow(newVal: any, oldVal: any) {
        if (newVal) {
            this.handleDialog = newVal;
        } else {
            if (!this.handleDialog) {
                this.handleDialog = oldVal;
            }
        }
    }

    mounted(): void {
        console.log('mounted', this.showFlag);
    }

    handle(origin:any, start_num:any, end_num:any): void {
        let flag_start_num: Boolean;
        let flag_end_num: Boolean;
        let start_number:Number = 0;
        let end_number:Number = 0;
        let flag = false;

        if (start_num) {
            flag_start_num = this.handleNum(origin, start_num);
            start_number = parseInt(start_num);
        }
        if (end_num) {
            flag_end_num = this.handleNum(origin, end_num);
            end_number = parseInt(end_num);
        }
        // console.log(start_num, end_num, '实际收到值');
        
        console.log(origin, ':---origin---:', start_num, end_num, start_number, end_number);
        // console.log(start_number, end_number, '实际收到值', flag_start_num, flag_end_num);
        // console.log("flag_start_num:", flag_start_num, 'flag_end_num：', flag_end_num, 'start_num: ', start_num, 'end_num: ', end_num);
        switch (origin) {
            case 'dynamic_appoint':
                // console.log('flag_start_num && flag_end_num: ', flag_start_num && flag_end_num)
                console.log('flag_start_num && flag_end_num: ')
                // console.log('start_num:', start_num, 'end_num: ', end_num);
                // flag = this.handleInput(start_number, end_number, flag_start_num, flag_end_num)
                if (start_number && end_number) {
                    if (start_number < end_number) {
                        flag = true;
                    }
                    console.log(start_number, end_number, 'if');
                } else {
                    flag = false;
                    console.log(start_number, end_number, 'else');
                }
                this.handleFlagAppoint = flag;
                break;
            case 'dynamic_server':
                console.log('dynamic_server:----------------------');
                // console.log('dynamic_server:----------------------', start_number, end_number, flag_start_num, flag_end_num);
                // flag = this.handleInput(start_number, end_number, flag_start_num, flag_end_num)
                if (start_number && end_number) {
                    if (start_number < end_number) {
                        flag = true;
                    }
                    console.log(start_number, end_number, 'if');
                } else if (start_number == 0 && end_number == 0) {
                    flag = true;
                    console.log(start_number, end_number, ' else if');
                } else {
                    flag = false;
                    console.log(start_number, end_number, 'else');
                }
                this.handleFlagServer = flag;
                break;
            case 'dynamic_money':
                console.log('dynamic_money:');
                break;
            case 'referral':
                console.log('referral:');
                break;
            default:
                console.log('default:');
                if (start_num) {
                    flag = true;
                } else if (start_num == '') {
                    console.log('空值')
                    flag = true;
                }
                break;
        }
        // console.log(this.handleFlag, '最后结果的返回值---  handle', flag, 'origin:--', origin)
        // this.handleFlag = flag;
    }
    handleNum(origin:any, num:any): Boolean {
        console.log(origin, 'origin', num);
        let flag = false;
        if (num) {
            flag = this.isNum.test(num);
        } else if (num == '') {
            flag = true
        }
        console.log(flag, '----flag', 'this.handleFlag:--- handleNum ', this.handleFlagServer);
        return flag;
    }
    // dialog_hidden(): void {
    //     this.handleDialog = !this.handleDialog;
    //     // this.handleDialog = !this.handleDialog;
    //     // console.log('hidden', this.handleDialog);
    // }
}
</script>


<style scoped>
    .w-dialog {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2);
    }
    .w-show {
        display: block;
    }
    .w-hidden {
        display: none;
    }

    .dialog-content {
        width: 80%;
        height: 80%;
        background: #ffffff;
        margin: 5% auto;
    }
    .dialog-content-title {
        display: inline-block;
        width: 10px;
        height: 2px;
    }
    .errorNum {
        border:  1px solid red;
    }
</style>
