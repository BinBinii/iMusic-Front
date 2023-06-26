<template>
    <div class="register">
        <div class="bg-mask"></div>
        <div class="register-box">
            <div class="register-box-left"></div>
            <div class="register-box-right">
                <div class="title" style="color: #333">IPay 注册</div>
                <div class="input-item">
                    <span>邮&nbsp;&nbsp;&nbsp;箱</span>
                    <input type="text" v-model="registerForm.email" placeholder="仅支持主流邮箱">
                </div>
                <div class="input-item">
                    <span>验证码</span>
                    <input type="text" v-model="registerForm.code" minlength="6" maxlength="6" placeholder="邮箱验证码">
                    <span class="obtain blue-span" style="color: #1DB4FF;cursor: pointer;" @click="send" v-if="isSend">获取</span>
                    <span class="obtain" style="color: #1DB4FF;" v-if="!isSend">{{sendMsg}}</span>
                </div>
                <div class="input-item">
                    <span>密&nbsp;&nbsp;&nbsp;码</span>
                    <input type="password" v-model="registerForm.password" minlength="6" maxlength="16" placeholder="6~16 位">
                </div>
                <div class="attention">* 在 NiggerID 注册代表您已阅读并同意 IPay 及附属站点 (iMusic) 的 <span class="blue-span">隐私策略</span>、 <span class="blue-span">服务条款</span></div>
                <div style="margin-top: 25px;">
                    <span class="register-button" @click="registerBtn">注册</span>
                    <span class="back" @click="back">返回</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  import { ElNotification } from 'element-plus'
  import { register, sendVerCode } from '../../../api/user'
  export default {
    name: 'Register',
    components: {
    },
    data() {
      return {
        sendMsg: '获取',
        isSend: true,
        registerForm: {
            name: '',
            email: '',
            password: '',
            code: ''
        }
      }
    },
    created() {

    },
    methods: {
        registerBtn() {
            register(this.registerForm)
            .then(res => {
                console.log(res)
                let title = '注册失败'
                let message = res.msg
                let type = 'error'
                if (res.data.code == 200) {
                    title = '注册成功'
                    message = '注册成功，即将跳转页面 :p'
                    type = 'success'
                    setTimeout(() => {
                        this.$router.push({path:'/login'})
                    }, 3000)
                }
                ElNotification({
                    title: title,
                    message: message,
                    type: type,
                })
            })
            .catch(err => {
                ElNotification({
                    title: '注册失败',
                    message: '请重试 _ (:з」∠)_',
                    type: 'error',
                })
            })
        },
        send() {
            // let params = new URLSearchParams()
            // params.append('mail', this.registerForm.email)
            let params = {
                mail: this.registerForm.email
            }
            sendVerCode(params)
            .then(res =>{
                if (res) {
                    this.isSend = false;
                    let timer = 60;
                    this.sendMsg = timer + "s";
                    this.timeFun = setInterval(() => {
                        --timer;
                        this.sendMsg = timer + "s";
                        if (timer == 0) {
                            this.isSend = true;
                            this.sendMsg = "重新获取";
                            clearInterval(this.timeFun);
                        }
                    }, 1000);
                    ElNotification({
                        title: '邮件发送成功',
                        message: '请于5分钟之内完成注册 :p',
                        type: 'success',
                    })
                } else {
                    ElNotification({
                        title: '邮件发送失败',
                        message: '请重试 _ (:з」∠)_',
                        type: 'error',
                    })
                }
            })
            .catch(err => {
                ElNotification({
                    title: '邮件发送失败',
                    message: '请重试 _ (:з」∠)_',
                    type: 'error',
                })
            })
            
        },
        back() {
            this.$router.push({path:'/login'})
        }
    },
    watch: {

    }
  }
</script>
  
<style scoped>
.register {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../../assets/img/bg.jpg');
    background-size: cover;
    color: #333;
}
.bg-mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(207, 207, 207, 0.35);
}
.register-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1000px;
    height: 500px;
    margin-left: -500px;
    margin-top: -250px;
    background-color: #FFF;
    box-shadow: 0px 0px 15px rgba(42, 42, 42, 0.3);
    border-radius: 5px;
    overflow: hidden;
}
.register-box-left {
    float: left;
    width: 60%;
    height: 100%;
    background-image: url('../../../assets/img/IMG_4610.jpg');
    background-size: cover;
    background-position: 0px -50px;
}
.register-box-right {
    float: right;
    width: 40%;
    height: 100%;
}
.title {
    font-size: 22px;
    font-weight: 500;
    margin-top: 35px;
}
.input-item {
    margin-top: 30px;
    position: relative;
}
.input-item span {
    color: rgb(78, 78, 78);
    font-size: 14px;
    margin-right: 15px;
}
.input-item input {
    border: none;
    border-bottom: solid #CCC 1px;
    padding: 5px;
    width: 220px;
    color: rgb(45, 45, 45);
    transition: all .35s;
}
.input-item input::placeholder {
    color: rgb(155, 155, 155);
}
.input-item input:focus {
    outline: none;
    border-bottom: solid rgb(120, 120, 120) 1px;
}
.input-item input:hover {
    border-bottom: solid rgb(151, 151, 151) 1px;
}
.attention {
    color: #777777;
    width: 290px;
    font-size: 14px;
    text-align: left;
    margin-top: 40px;
    margin-left: 58px;
}
.obtain {
    position: absolute;
    right: 45px;
}
.register-button {
    float: left;
    display: block;
    height: 40px;
    width: 120px;
    line-height: 40px;
    background-color: #419664;
    color: #FFF;
    border-radius: 20px;
    font-size: 15px;
    transition: all .3s;
    text-shadow: 1px 1px 8px rgb(0 0 0 / 15%);
    margin-left: 70px;
    cursor: pointer;
}
.register:hover {
    box-shadow: 0px 0px 8px rgba(42, 42, 42, 0.3);
}
.back {
    float: right;
    display: block;
    height: 40px;
    width: 120px;
    line-height: 36px;
    box-sizing: border-box;
    border: 2px solid #a7a7a7;
    color: #757575;
    border-radius: 20px;
    font-size: 15px;
    transition: all .3s;
    text-shadow: 1px 1px 8px rgb(0 0 0 / 15%);
    margin-right: 70px;
    cursor: pointer;
}
.back:hover {
    box-shadow: 0px 0px 8px rgba(42, 42, 42, 0.3);
    color: #FFF;
    border: 2px solid #AF67A6;
    background-color: #AF67A6;
    /* border: none; */
}
.blue-span {
    color: #1DB4FF;
    cursor: pointer;
}
.blue-span:hover {
    color: #1ca7ec;
    text-shadow: 1px 1px 8px rgb(0 0 0 / 15%);
}
input {
    background-color: #FFF;
}
</style>
  