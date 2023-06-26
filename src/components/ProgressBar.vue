<template>
  <div
    class='progress-box'
    ref="progressRef"
    @click="handleClickProgress"
    @touchstart='handleTouchStart'
    @touchmove='handleTouchMove'
    @touchend='handleTouchEnd'
    style="width: 100%;"
  >
    <div
    class="track"
    :style="{
      backgroundColor: trackColor,
      height: `${strokeWidth}px`,
      marginTop: `${(20 - Number(strokeWidth)) / 2}px`
    }"
      >
    </div>
    <div
    class="progress-bar"
    :style="{
      backgroundColor: color,
      height: `${strokeWidth}px`,
      width: `${percentage}%`,
      marginTop: `${(20 - Number(strokeWidth)) / 2}px`
    }"
      >
    </div>
    <div
    class="progress-dot"
    :style="{
      width: `${dotWidth}px`,
      height: `${dotWidth}px`,
      backgroundColor: color,
      marginTop: `${(20 - Number(dotWidth)) / 2}px`,
      left: `${Number(percentage) === 100 ? `${Number(percentage) - 1.5}%` : `${percentage}%`}`
      }"
    >
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, PropType, ref, watch } from 'vue'
export default defineComponent({
  name: 'ProgressBar',
  props: {
    strokeWidth: {
      type: String as PropType<String>,
      default: '4'
    },
    trackColor: {
      type: String as PropType<String>,
      default: '#232323'
    },
    color: {
      type: String as PropType<String>,
      default: '#D33A31'
    },
    width: {
      type: String as PropType<String>,
      default: '0'
    },
    dotWidth: {
      type: String as PropType<String>,
      default: '12'
    }
  },
  setup(props, ctx) {
    // const width = props.width
    const percentage = ref<string>('') // 传过来的进度条宽度
    const progressRef = ref<any>(null) // 整个progress组件 用来获取长度
    const progressWidth = ref<number>(0) // progress的长度
    let touchStart:number = 0
    let touchEnd:number = 0
    
    // 实时更新进度条的宽度
    watch(() => props.width, (newValue, oldValue) => {
      percentage.value = newValue as string
    })
    
    // 点击进度条事件
    const handleClickProgress = (event: MouseEvent):void => {
      const e = event || window.event
      const position = e.clientX - progressRef.value.offsetLeft // 当前点击位置距离进度条最左边的距离
      percentage.value = ((position / progressWidth.value) * 100).toFixed(3).toString()
      ctx.emit('progressClick', percentage.value)
    }

    // 拖动进度条事件
    const handleTouchStart = (event: TouchEvent):void => {
      console.log(`拖拽起始位置: ${event.touches[0].clientX}`)
      touchStart = event.touches[0].clientX
    }
    const handleTouchMove = (event: TouchEvent):void => {
      console.log(`拖拽到了: ${event.touches[0].clientX}`)
      let moveX = event.touches[0].clientX - progressRef.value.offsetLeft // progressRef.value.offsetLeft是进度条左边距浏览器左侧的距离 不变的
      if (moveX >= progressWidth.value) moveX = progressWidth.value
      if (moveX <= 0) moveX = 0
      percentage.value = ((moveX / progressWidth.value) * 100).toFixed(3).toString()
      // 将拖拽中的进度传递给父组件 例如用于调整音量
      ctx.emit('progressMove', percentage.value)
    }
    const handleTouchEnd = (event: TouchEvent):void => {
      console.log(`拖拽结束位置: ${event.changedTouches[0].clientX}`)
      touchEnd = event.changedTouches[0].clientX
      if (touchStart === touchEnd) { 
        // 点击事件也会触发touch事件，所以用这个条件判断可以在触发的时候什么都不做
        console.log('这是click事件触发的touch事件')
      } else {
        // 拖拽事件结束，将当前拖拽进度传递给父组件
        ctx.emit('progressTouch', percentage.value)
      }
    }

    onMounted(() => {
      // 将进度条组件的宽度赋值给变量
      progressWidth.value = progressRef.value.offsetWidth
    })

    return {
      handleClickProgress,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      percentage,
      progressRef
    }
  }
})
</script>
<style scoped lang="less">
.progress-box{
  position: relative;
  height: 20px;
  .track,
  .progress-bar{
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 4px;
  }
  .track{
    width: 100%;
  }
  .progress-dot{
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
<!-- <template>
  <div ref="mmProgress" class="mmProgress" @click="barClick">
    <div class="mmProgress-bar"></div>
    <div ref="mmPercentProgress" class="mmProgress-outer"></div>
    <div ref="mmProgressInner" class="mmProgress-inner">
      <div class="mmProgress-dot" @mousedown="barDown" @touchstart.prevent="barDown"></div>
    </div>
  </div>
</template>

<script>
const dotWidth = 10
export default {
  name: 'MmProgress',
  props: {
    // 进度值一
    percent: {
      type: [Number],
      default: 0
    },
    // 进度值二（歌曲缓冲进度用）
    percentProgress: {
      type: [Number],
      default: 0
    }
  },
  data() {
    return {
      move: {
        status: false, // 是否可拖动
        startX: 0, // 记录最开始点击的X坐标
        left: 0 // 记录当前已经移动的距离
      }
    }
  },
  watch: {
    percent(newPercent) {
      if (newPercent >= 0 && !this.move.status) {
        const barWidth = this.$refs.mmProgress.clientWidth - dotWidth
        const offsetWidth = newPercent * barWidth
        this.moveSilde(offsetWidth)
      }
    },
    percentProgress(newValue) {
      let offsetWidth = this.$refs.mmProgress.clientWidth * newValue
      this.$refs.mmPercentProgress.style.width = `${offsetWidth}px`
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bindEvents()
      const barWidth = this.$refs.mmProgress.clientWidth - dotWidth
      const offsetWidth = this.percent * barWidth
      this.moveSilde(offsetWidth)
    })
  },
  beforeDestroy() {
    this.unbindEvents()
  },
  methods: {
    // 添加绑定事件
    bindEvents() {
      document.addEventListener('mousemove', this.barMove)
      document.addEventListener('mouseup', this.barUp)

      document.addEventListener('touchmove', this.barMove)
      document.addEventListener('touchend', this.barUp)
    },
    // 移除绑定事件
    unbindEvents() {
      document.removeEventListener('mousemove', this.barMove)
      document.removeEventListener('mouseup', this.barUp)

      document.removeEventListener('touchmove', this.barMove)
      document.removeEventListener('touchend', this.barUp)
    },
    // 点击事件
    barClick(e) {
      let rect = this.$refs.mmProgress.getBoundingClientRect()
      let offsetWidth = Math.min(
        this.$refs.mmProgress.clientWidth - dotWidth,
        Math.max(0, e.clientX - rect.left)
      )
      this.moveSilde(offsetWidth)
      this.commitPercent(true)
    },
    // 鼠标按下事件
    barDown(e) {
      this.move.status = true
      this.move.startX = e.clientX || e.touches[0].pageX
      this.move.left = this.$refs.mmProgressInner.clientWidth
    },
    // 鼠标/触摸移动事件
    barMove(e) {
      if (!this.move.status) {
        return false
      }
      e.preventDefault()
      let endX = e.clientX || e.touches[0].pageX
      let dist = endX - this.move.startX
      let offsetWidth = Math.min(
        this.$refs.mmProgress.clientWidth - dotWidth,
        Math.max(0, this.move.left + dist)
      )
      this.moveSilde(offsetWidth)
      this.commitPercent()
    },
    // 鼠标/触摸释放事件
    barUp(e) {
      if (this.move.status) {
        this.commitPercent(true)
        this.move.status = false
      }
    },
    // 移动滑块
    moveSilde(offsetWidth) {
      this.$refs.mmProgressInner.style.width = `${offsetWidth}px`
    },
    // 修改 percent
    commitPercent(isEnd = false) {
      const { mmProgress, mmProgressInner } = this.$refs
      const lineWidth = mmProgress.clientWidth - dotWidth
      const percent = mmProgressInner.clientWidth / lineWidth
      this.$emit(isEnd ? 'percentChangeEnd' : 'percentChange', percent)
    }
  }
}
</script>

<style lang="less">
.mmProgress {
  position: relative;
  padding: 5px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  .mmProgress-bar {
    height: 2px;
    width: 100%;
    background: #CCC;
  }
  .mmProgress-outer {
    position: absolute;
    top: 50%;
    left: 5px;
    display: inline-block;
    width: 0;
    height: 2px;
    margin-top: -1px;
    background: rgba(255, 255, 255, 0.2);
  }
  .mmProgress-inner {
    position: absolute;
    top: 50%;
    left: 5px;
    display: inline-block;
    width: 0;
    height: 2px;
    margin-top: -1px;
    background: #666;
    .mmProgress-dot {
      position: absolute;
      top: 50%;
      right: -5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: red;
      transform: translateY(-50%);
    }
  }
}
</style> -->