<template>
    <div class="song">
        <div class="server-box">

        </div>
        <div class="music-box"></div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.song {
    width: 100vw;
    height: 100vh;
}
.server-box {
    width: 25%;
    height: 100vh;
    background-color: #CCC;
    float: left;
}
.music-box {
    width: 75%;
    height: 100vh;
    background-color: #333;
    float: right;
}
</style>