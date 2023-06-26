<template>
    <div class="logo">
        <div>iMusic</div>
    </div>
    <div class="server">
        <div class="letter-item" style="border: solid 2.5px #6CBF02">
            <svg width="35px" height="35px" style="margin-top: 15px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M8.538 2a6.5 6.5 0 0 0-5.674 9.672l-.796 2.082a1 1 0 0 0 1.204 1.32l2.487-.697A6.5 6.5 0 1 0 8.539 2zM6.574 15.74A6.485 6.485 0 0 0 11.501 18c.993 0 1.936-.223 2.78-.623l2.486.697a1 1 0 0 0 1.204-1.32l-.795-2.082C17.7 13.733 18 12.65 18 11.5c0-1.94-.85-3.682-2.199-4.873a7.51 7.51 0 0 1 .235 1.762c.608.885.964 1.957.964 3.111c0 1.05-.294 2.031-.805 2.866l-.128.21l.97 2.535l-2.86-.8l-.175.088c-.75.384-1.6.601-2.502.601a5.475 5.475 0 0 1-3.167-1.003a7.499 7.499 0 0 1-1.76-.257z" fill="currentColor"></path></g></svg>
        </div>
        <div class="server-box">
            <template v-for="item in groupList">
                <el-tooltip
                    class="box-item"
                    effect="dark"
                    :content="item.name"
                    placement="right">
                    <div class="server-item" @click="searchGroup(item.id)">{{ sliceGroupName(item.name) }}</div>
                </el-tooltip>
            </template>
            <div class="server-item" @click="dialogGroup = true">
                <svg width="50px" height="50px" style="margin-top: 7px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" fill="currentColor"></path></svg>
            </div>
        </div>
        <el-tooltip
            class="box-item"
            effect="dark"
            :content="loginUser.id"
            placement="right">
        <div class="user">{{ loginUser.nickname }}</div>
        </el-tooltip>
    </div>
    <div class="song">
        <div class="left">
            <div class="title">{{ loginUser.nickname }}#{{ loginUser.id }}</div>
            <div class="item" @click="selectOption(0)" :class="selectOptionIndex == 0?'item-checked':''">
                <svg width="20" height="20" style="position: relative;top: 10px;margin-left: 15px;margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057A5.477 5.477 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H4.01zM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9zm0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5z" fill="currentColor"></path></g></svg>
                <span>{{ selectOptionTitle[0] }}</span>
            </div>
            <div class="item" @click="selectOption(1)" :class="selectOptionIndex == 1?'item-checked':''">
                <svg width="20" height="20" style="position: relative;top: 10px;margin-left: 15px;margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M5 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0zm-3 7c0-1.113.903-2 2.009-2h6.248A5.477 5.477 0 0 0 9 14.5c0 1.303.453 2.5 1.21 3.443c-.395.038-.8.057-1.21.057c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13zm17 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708z" fill="currentColor"></path></g></svg>
                <span>{{ selectOptionTitle[1] }}</span>
            </div>
            <div class="item" @click="selectOption(2)" :class="selectOptionIndex == 2?'item-checked':''">
                <svg width="20" height="20" style="position: relative;top: 10px;margin-left: 15px;margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057A5.477 5.477 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H4.01zM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0zm2.404 2.803l4.9-4.9a3.5 3.5 0 0 1-4.9 4.9zm-.707-.707a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9z" fill="currentColor"></path></g></svg>
                <span>{{ selectOptionTitle[2] }}</span>
            </div>
        </div>
        <div class="right">
            <div class="title">
                <template v-if="selectOptionIndex == 0">
                    <svg width="20" height="20" style="position: relative;top: 3px;margin-left: 35px;margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057A5.477 5.477 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H4.01zM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9zm0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5z" fill="currentColor"></path></g></svg>
                </template>
                <template v-if="selectOptionIndex == 1">
                    <svg width="20" height="20" style="position: relative;top: 3px;margin-left: 35px;margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M5 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0zm-3 7c0-1.113.903-2 2.009-2h6.248A5.477 5.477 0 0 0 9 14.5c0 1.303.453 2.5 1.21 3.443c-.395.038-.8.057-1.21.057c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13zm17 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708z" fill="currentColor"></path></g></svg>
                </template>
                <template v-if="selectOptionIndex == 2">
                    <svg width="20" height="20" style="position: relative;top: 3px;margin-left: 35px;margin-right: 10px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057A5.477 5.477 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H4.01zM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0zm2.404 2.803l4.9-4.9a3.5 3.5 0 0 1-4.9 4.9zm-.707-.707a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9z" fill="currentColor"></path></g></svg>
                </template>
                <span>{{ selectOptionTitle[selectOptionIndex] }}</span>
            </div>
            <div class="content">
                <template v-for="item in examineGroupList">
                    <div class="item">
                        <div style="height: 70%;width: 100%;">
                            <div class="icon"></div>
                            <div style="float: left;text-align: left;">
                                <span style="font-size: 20px;position: relative;top: 30px;">{{item.tbUser.nickname}}</span><br>
                                <span style="position: relative;top: 35px;color: #CCC;">申请加入{{item.tbGroup.name}}</span><br>
                                <span style="position: relative;top: 35px;color: #808080;font-size: 12px;">申请时间：{{ item.apply_time }}</span>
                            </div>
                        </div>
                        <div style="height: 30%">
                            <template v-if="selectOptionIndex == 0">
                                <span class="accept" @click="examine(item.id, 1)">接受</span>
                                <span class="refuse" @click="examine(item.id, 2)">拒绝</span>
                            </template>
                            <template v-if="selectOptionIndex == 1">
                                <span style="display: block;width: 60px;height: 30px;border-radius: 10px;line-height: 30px;border: solid 1.5px #707176;color: #dedede;float: right;margin-right: 15px;">已接受</span>
                            </template>
                            <template v-if="selectOptionIndex == 2">
                                <span style="display: block;width: 60px;height: 30px;border-radius: 10px;line-height: 30px;border: solid 1.5px #707176;color: #dedede;float: right;margin-right: 15px;">已拒绝</span>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { mainStore } from '../../store'
import { searchGroupInfo, findGroupList, createGroup, updateGroup } from '../../api/group'
import { findApplyList, examineGroupApply } from '../../api/groupServer'
import { loginToken } from '../../api/user'
import { GroupInfo, CreateGroupDto} from '../../interface/groupInterface'
import { LoginUser } from '../../interface/storeInterface'
import { ElMessage, ElTooltip, ElDialog, ElInput, ElNotification } from 'element-plus'

const store = mainStore()
const groupList = ref([] as any[])
const loginUser = ref({} as LoginUser)
const examineGroupList = ref([] as any[])

const selectOptionIndex = ref(0)
let selectOptionTitle = ['审核','已通过','已拒绝']


// 获取登录用户信息
const getUserByToken = () => {
    loginToken().then(res => {
        loginUser.value = res.data
        getApplyList()
    })
}
const selectOption = (optionIndex: number) => {
    selectOptionIndex.value = optionIndex
    getApplyList()
}
const getApplyList = () => {
    let params = {
        admin: loginUser.value.id,
        status: selectOptionIndex.value
    }
    findApplyList(params).then(res => {
        examineGroupList.value = res.data.data
    })
}
const examine = (applyId: number, status: number) => {
    let params = {
        applyId: applyId,
        admin: loginUser.value.id,
        status: status
    }
    examineGroupApply(params).then(res => {
        if (res.data.data) {
            selectOptionIndex.value = status
            getApplyList()
            ElNotification({
                title: '审核成功',
                type: 'success',
            })
        }
    })
}
onMounted(async () => {
    getUserByToken() 
});
onUnmounted(async () => {
});
</script>
<style lang="less" scoped>
.logo {
    width: 100vw;
    height: 5vh;
}
.server {
    width: 5.8vw;
    height: 95vh;
    float: left;
    .user {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        background-color: #202020;
        margin: 0 auto;
        margin-top: 15px;
        line-height: 60px;
        font-size: 14px;
        cursor: pointer;
    }
    .letter-item {
        width: 65px;
        height: 65px;
        background-color: #202020;
        border-radius: 10px;
        margin: 0 auto;
        margin-bottom: 15px;
        text-align: center;
        line-height: 65px;
        font-size: 30px;
        font-weight: 500;
        cursor: pointer;
    }
    .server-box {
        width: 70px;
        height: 82%;
        margin: 0 auto;
        overflow: auto;
        border-bottom: solid #2F3031 1.5px;
        border-top: solid #2F3031 1.5px;
    }
    .server-box::-webkit-scrollbar{
         display:none
    }
    .server-item {
        width: 65px;
        height: 65px;
        background-color: #202020;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 15px;
        text-align: center;
        line-height: 65px;
        font-size: 30px;
        font-weight: 500;
        cursor: pointer;
    }
}
.song {
    width: 94.2vw;
    height: 95vh;
    float: right;
    background-color: #252525;
    border-radius: 30px;
    overflow: hidden;
    .left {
        float: left;
        width: 19%;
        height: 100%;
        border-right: solid 1.5px #323437;
        .title {
            text-align: left;
            height: 80px;
            line-height: 80px;
            margin-left: 33px;
            font-weight: bold;
            font-size: 20px;
        }
        .item {
            width: 80%;
            height: 40px;
            margin: 0 auto;
            border-radius: 5px;
            color: #717579;
            line-height: 40px;
            font-size: 17px;
            margin-bottom: 3px;
            cursor: pointer;
            * {
                float: left;
            }
        }
        .item:hover {
            background-color: #323437;
        }
        .item-checked {
            background-color: #3A3D40;
            font-weight: bold;
            color: #FFF;
        }
        .item:first-child {
            margin-top: 30px;
        }
    }
    .right {
        width: 80.9%;
        height: 100%;
        float: right;
        .title {
            height: 80px;
            width: 100%;
            line-height: 80px;
            text-align: left;
            span {
                font-size: 20px;
                font-weight: bold;
            }
        }
        .content {
            width: 100%;
            height: 91%;
            overflow: auto;
            .item {
                width: 400px;
                height: 160px;
                background-color: #35393D;
                border-radius: 20px;
                float: left;
                margin-left: 30px;
                margin-bottom: 30px;
                .icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 60px;
                    background-color: #CCC;
                    margin: 30px 20px 20px 30px;
                    float: left;
                }
                .refuse {
                    display: block;
                    width: 60px;
                    height: 30px;
                    border-radius: 10px;
                    line-height: 30px;
                    border: solid 1.5px #707176;
                    color: #dedede;
                    float: right;
                    margin-right: 10px;
                    cursor: pointer;
                }
                .refuse:hover {
                    background-color: #424245;
                    color: #FFF;
                }
                .accept {
                    display: block;
                    width: 60px;
                    height: 30px;
                    border-radius: 10px;
                    line-height: 30px;
                    border: solid 1.5px #6CBF02;
                    color: #FFF;
                    background-color: #6CBF02;
                    float: right;
                    margin-right: 15px;
                    cursor: pointer;
                }
                .accept:hover {
                    border: solid 1.5px #5ea402;
                    color: #FFF;
                    background-color: #5ea402;
                }
            }
        }
    }
}
</style>