import { defineStore } from "pinia";

/**
 * 1. 定义容器并导出
 * 参数一: 容器ID, 唯一, 将来 Pinia 会把所有的容器挂载到根容器
 * 参数二: 选项对象
 * 返回值: 函数, 调用的时候要空参调用, 返回容器实例
 */
export const mainStore = defineStore('main', {
    state: () => {
        return {
            state: {
                token: ''
            }
        }
    },
})