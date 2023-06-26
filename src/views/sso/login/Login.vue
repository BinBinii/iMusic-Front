<template>
    <div class="login">
        <div class="bg-mask"></div>
        <div class="login-box">
            <div class="login-box-left"></div>
            <div class="login-box-right">
                <div class="title">IPay 登录</div>
                <div class="input-item" style="margin-top: 40px;">
                    <span>邮&nbsp;&nbsp;&nbsp;箱</span>
                    <input type="text" v-model="loginForm.email" placeholder="邮箱">
                </div>
                <div class="input-item">
                    <span>密&nbsp;&nbsp;&nbsp;码</span>
                    <input type="password" v-model="loginForm.password">
                </div>
                <div class="attention">
                    <span class="blue-span" style="margin-right: 10px;" @click="register">注册</span>
                    <span class="blue-span">忘记密码</span>
                </div>
                <div style="margin-top: 20px;">
                    <span class="login-button" @click="loginBtn">登录</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  import { ElNotification } from 'element-plus'
  import { login } from '../../../api/user'
  import { mainStore } from '../../../store'
  export default {
    
    name: 'Login',
    components: {
    },
    data() {
      return {
        sendMsg: '获取',
        isSend: true,
        loginForm: {
            email: '',
            password: ''
        }
      }
    },
    created() {
    
    },
    methods: {
        loginBtn() {
            const store = mainStore()
            login(this.loginForm)
            .then(res => {
                store.state.token = res.data.data
                if (res.status === 500) {
                    ElNotification({
                        title: '登录失败',
                        message: res.message,
                        type: 'error',
                    })
                }
                if (res.data.code === 200) {
                    ElNotification({
                        title: '登录成功',
                        message: 'Hello 即将跳转页面 :p',
                        type: 'success',
                    })
                    setTimeout(() => {
                        this.$router.push({path:'/song'})
                    }, 3000)
                }
            })
            .catch(err => {
                ElNotification({
                    title: '登录失败',
                    message: '请重试 _ (:з」∠)_',
                    type: 'error',
                })
            })
        },
        send() {
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
        },
        register() {
            this.$router.push({path:'/register'})
        },
    },
    
    watch: {

    }
  }
</script>
  
<style scoped>
.login {
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
.login-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1000px;
    height: 350px;
    margin-left: -500px;
    margin-top: -175px;
    background-color: #FFF;
    box-shadow: 0px 0px 15px rgba(42, 42, 42, 0.3);
    border-radius: 5px;
    overflow: hidden;
}
.login-box-left {
    float: left;
    width: 60%;
    height: 100%;
    background-image: url('../../../assets/img/IMG_4610.jpg');
    background-size: cover;
    background-position: 0px -50px;
}
.login-box-right {
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
    width: 290px;
    font-size: 14px;
    text-align: left;
    margin-top: 20px;
    margin-left: 58px;
    text-align: right;
}
.login-button {
    margin: 0 auto;
    display: block;
    height: 40px;
    width: 180px;
    line-height: 40px;
    box-sizing: border-box;
    background-color: #AF67A6;
    color: #757575;
    border-radius: 20px;
    font-size: 15px;
    transition: all .3s;
    text-shadow: 1px 1px 8px rgb(0 0 0 / 15%);
    color: #FFF;
    cursor: pointer;
}
.login-button:hover {
    box-shadow: 0px 0px 8px rgba(42, 42, 42, 0.3);
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
  