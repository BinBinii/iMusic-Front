<template>
    <div class="logo">
        <div>iMusic</div>
    </div>
    <div class="server">
        <div class="letter-item" @click="$router.push({path:'/invite'})">
            <svg width="35px" height="35px" style="margin-top: 15px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M8.538 2a6.5 6.5 0 0 0-5.674 9.672l-.796 2.082a1 1 0 0 0 1.204 1.32l2.487-.697A6.5 6.5 0 1 0 8.539 2zM6.574 15.74A6.485 6.485 0 0 0 11.501 18c.993 0 1.936-.223 2.78-.623l2.486.697a1 1 0 0 0 1.204-1.32l-.795-2.082C17.7 13.733 18 12.65 18 11.5c0-1.94-.85-3.682-2.199-4.873a7.51 7.51 0 0 1 .235 1.762c.608.885.964 1.957.964 3.111c0 1.05-.294 2.031-.805 2.866l-.128.21l.97 2.535l-2.86-.8l-.175.088c-.75.384-1.6.601-2.502.601a5.475 5.475 0 0 1-3.167-1.003a7.499 7.499 0 0 1-1.76-.257z" fill="currentColor"></path></g></svg>
        </div>
        <div class="server-box">
            <template v-for="item in groupList">
                <el-tooltip
                    class="box-item"
                    effect="dark"
                    :content="item.name"
                    placement="right">
                    <div class="server-item" :style="checkGroupId==item.id?'border: solid 2.5px #6CBF02':''" @click="searchGroup(item.id)">{{ sliceGroupName(item.name) }}</div>
                </el-tooltip>
            </template>
            <div class="server-item" @click="addGroupPopup = true">
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
        <div class="server-box">
            <template v-if="groupInfo.id != null">
                <div class="server-name" @click="optionServerBtn" :style="optionServer == 1?'background-color: #42444A':''">
                    <span>{{ groupInfo.name }}</span>
                    <svg v-if="optionServer == 0" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 512 512"
                        width="20px"
                        height="20px"
                        style="position: relative;top: 6px;left: 5px;">
                        <path d="M64 144h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32z" fill="currentColor"></path>
                        <path d="M448 368h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32z" fill="currentColor"></path>
                        <path d="M448 240H221.25a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h66.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32z" fill="currentColor"></path>
                    </svg>
                    <svg v-if="optionServer == 1" width="20px" height="20px" style="position: relative;top: 3px;left: 5px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
                    <div v-if="optionServer == 1" class="server-popup">
                        <div class="server-popup-item" @click="inviteBoxPopup = 1">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8zM6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm-1.991 5A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057a5.501 5.501 0 0 1-.618-.958C9.398 16.995 9.2 17 9 17c-1.735 0-3.257-.364-4.327-1.047C3.623 15.283 3 14.31 3 13c0-.553.448-1 1.009-1h5.59c.184-.358.405-.693.658-1H4.01zM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9zm0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5z" fill="currentColor"></path></g></svg>
                            <span>邀请其他人</span>
                        </div>
                        <div class="server-popup-item" @click="dialogEditGroup = true;dialogGroupPopup = true">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g fill="none"><path d="M1.91 7.383a8.491 8.491 0 0 1 1.78-3.08a.5.5 0 0 1 .54-.135l1.918.686a1 1 0 0 0 1.32-.762l.366-2.006a.5.5 0 0 1 .388-.4a8.532 8.532 0 0 1 3.555 0a.5.5 0 0 1 .387.4l.367 2.006a1 1 0 0 0 1.32.762l1.918-.686a.5.5 0 0 1 .54.136a8.491 8.491 0 0 1 1.78 3.079a.5.5 0 0 1-.152.535l-1.555 1.32a1 1 0 0 0 0 1.524l1.555 1.32a.5.5 0 0 1 .152.535a8.491 8.491 0 0 1-1.78 3.08a.5.5 0 0 1-.54.135l-1.918-.686a1 1 0 0 0-1.32.762l-.367 2.007a.5.5 0 0 1-.387.399a8.53 8.53 0 0 1-3.555 0a.5.5 0 0 1-.388-.4l-.365-2.006a1 1 0 0 0-1.32-.762l-1.919.686a.5.5 0 0 1-.54-.136a8.49 8.49 0 0 1-1.78-3.079a.5.5 0 0 1 .153-.535l1.554-1.32a1 1 0 0 0 0-1.524l-1.554-1.32a.5.5 0 0 1-.153-.535zm1.061-.006l1.294 1.098a2 2 0 0 1 0 3.05L2.97 12.623c.292.782.714 1.51 1.245 2.152l1.596-.57a2 2 0 0 1 2.64 1.525l.305 1.668a7.556 7.556 0 0 0 2.485 0l.305-1.67a1.998 1.998 0 0 1 2.64-1.524l1.597.571a7.492 7.492 0 0 0 1.245-2.152l-1.294-1.098a1.998 1.998 0 0 1 0-3.05l1.294-1.098a7.491 7.491 0 0 0-1.245-2.152l-1.596.57a2 2 0 0 1-2.64-1.524l-.306-1.669a7.555 7.555 0 0 0-2.485 0l-.304 1.669a2 2 0 0 1-2.641 1.525l-1.596-.571a7.491 7.491 0 0 0-1.245 2.152zM7.5 10a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0zm1 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0z" fill="currentColor"></path></g></svg>
                            <span>服务器设置</span>
                        </div>
                    </div>
                </div>
                <div class="server-online">
                    <div class="title">在线 - {{ groupOnlineSum }}</div>
                    <template v-for="person in groupInfo.users">
                        <div class="personnel" v-if="person.isLogin == 1">
                            <div class="icon"></div>
                            <span>{{ person.nickname }}</span>
                        </div>
                    </template>
                </div>
                <div class="server-offline">
                    <div class="title">离线 - {{ groupOutlineSum }}</div>
                    <template v-for="person in groupInfo.users">
                        <div class="personnel" style="opacity: .5;" v-if="person.isLogin == 0">
                            <div class="icon"></div>
                            <span>{{ person.nickname }}</span>
                        </div>
                    </template>
                </div>
            </template>
            <template v-else>
                <p>未选择服务器</p>
            </template>
        </div>
        <div class="music-box">
            <template v-if="groupInfo.id != null">
                <div class="music-console">
                    <div class="button-box">
                        <span :style="consoleButtonIndex == 0?'-webkit-text-stroke: 0.2px #FFF;color: #FFF;':''" @click="changeConsoleIndex(0)">正在播放</span>
                        <span :style="consoleButtonIndex == 1?'-webkit-text-stroke: 0.2px #FFF;color: #FFF;':''" @click="changeConsoleIndex(1)">搜索</span>
                        <input v-if="consoleButtonIndex == 1" type="text" class="search" placeholder="歌名 / 歌手" @keydown.enter="carriageReturn($event)" v-model="searchText" v-on:keyup.enter="search"/>
                    </div>
                    <div class="music-list" v-if="consoleButtonIndex == 0">
                        <div class="music-item" style="-webkit-text-stroke: 0.2px #FFF;font-size: 17px;color: #FFF;pointer-events: none">
                            <span class="num" style="opacity: 0;">1</span>
                            <span class="name">歌名</span>
                            <span class="vip"></span>
                            <span class="singer">歌手</span>
                            <span class="album">专辑</span>
                            <span class="time" style="color: #FFF;">时长</span>
                        </div>
                        <template v-for="(item,index) in playMusicInfo">
                            <div class="music-item" :class="index % 2 != 0?'music-item-bg':''">
                                <span class="num">
                                    <div v-if="index == 0" class="loading"></div>
                                    <span v-else>{{ index }}</span>
                                </span>
                                <span class="name">{{ item.name }}</span>
                                <span class="vip"><span v-if="item.fee == 1 || item.fee == 4" style="display: block;border: solid 1px #ACA099;color: #ACA099;line-height: 18px;height: 18px;width: 25px;font-size: 12px;text-align: center;margin-top: 15px;border-radius: 4px;">VIP</span></span>
                                <span class="singer">{{ item.artists[0].name }}</span>
                                <span class="album">{{ item.album.name }}</span>
                                <span class="time">{{ millisecondFormat(item.duration) }}</span>
                            </div>
                        </template>
                    </div>
                    <div class="music-search" v-if="consoleButtonIndex == 1">
                        <div class="music-item" style="-webkit-text-stroke: 0.2px #FFF;font-size: 17px;color: #FFF;pointer-events: none">
                            <span class="num" style="opacity: 0;">1</span>
                            <span class="name">歌名</span>
                            <span class="vip"></span>
                            <span class="singer">歌手</span>
                            <span class="album">专辑</span>
                            <span class="time" style="color: #FFF;">时长</span>
                        </div>
                        <template v-for="(item,index) in searchMusicList">
                            <div class="music-item" :class="index % 2 != 0?'music-item-bg':''" @click="chooseSong(item)">
                                <span class="num">{{ index + 1 }}</span>
                                <span class="name">{{ item.name }}</span>
                                <span class="vip"><span v-if="item.fee == 1 || item.fee == 4" style="display: block;border: solid 1px #ACA099;color: #ACA099;line-height: 18px;height: 18px;width: 25px;font-size: 12px;text-align: center;margin-top: 15px;border-radius: 4px;">VIP</span></span>
                                <span class="singer">{{ item.artists[0].name }}</span>
                                <span class="album">{{ item.album.name }}</span>
                                <span class="time">{{ millisecondFormat(item.duration) }}</span>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="music-details" v-if="loginUser.id == groupInfo.admin.id">
                    <dt>
                        <img :src="playingMusicPic" />
                    </dt>
                    <div v-if="playMusicInfo.length > 0">
                        <p class="name">{{ playMusicInfo[0].name }}</p>
                        <p class="album">专辑：<span>{{ playMusicInfo[0].album.name }}</span></p>
                        <p class="singer">歌手：<span>{{ playMusicInfo[0].artists[0].name }}</span></p>
                    </div>
                    <div v-else>
                        <p>未播放音乐</p>
                    </div>
                    <div ref="lyricDiv" class="lyrics">
                        <ul ref="lyric" style="transition: .3s">
                        <span
                            v-for='(item, index) in playingMusicLyric'
                            :key="item.uid"
                            :class="{acting: lyricIndex === index}"
                            :data-index='index'>
                            {{item.lyric.trim()}}
                        </span>
                        </ul>
                        <div class="lyrics-bg-1"></div>
                        <div class="lyrics-bg-2"></div>
                    </div>
                </div>
                <div class="music-schedule" v-if="loginUser.id == groupInfo.admin.id">
                    <div class="icon">
                        <img :src="playingMusicPic" />
                    </div>
                    <div class="music-info" v-if="playMusicInfo[0] != null">
                        <span style="position: relative;top: 5px;"><name style="font-size: 18px">{{ playMusicInfo[0].name }}</name><singer style="color: #929292"> - {{ playMusicInfo[0].artists[0].name }}</singer></span><br/>
                        <span style="color: #676767;position: relative;top: 10px;">{{ currentTimeStr }} / {{ durationStr }}</span>
                    </div>
                    <div class="music-option">
                        <svg v-if="!isStart" @click="start" style="position: absolute;left: 0;cursor: pointer;" width="50" height="50" color="#D33A31" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 13c0 .55-.45 1-1 1s-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6zm5.02-2.22l-2.4 1.92a.998.998 0 0 1-1.62-.78v-3.84c0-.84.97-1.3 1.62-.78l2.4 1.92c.5.4.5 1.16 0 1.56z" fill="currentColor"></path></svg>
                        <svg v-else @click="pause" style="position: absolute;left: 0;cursor: pointer;" width="50" height="50" color="#D33A31" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1z" fill="currentColor"></path></svg>
                        <svg @click="end" style="position: absolute;left: 55;top: 7.5;cursor: pointer;" width="35" height="35" color="#D33A31" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82zM16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z" fill="currentColor"></path></svg>
                    </div>
                    <div class="sound-option">
                        <!-- <svg width="25" height="25" color="#BEBEBE" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3c16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344z" fill="currentColor"></path></svg> -->
                        <svg v-if="audioVolume > 0" @click="clickVolume('0')" width="25" height="25" color="#BEBEBE" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384 512"><path d="M215.03 72.04L126.06 161H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V89.02c0-21.47-25.96-31.98-40.97-16.98zm123.2 108.08c-11.58-6.33-26.19-2.16-32.61 9.45c-6.39 11.61-2.16 26.2 9.45 32.61C327.98 229.28 336 242.62 336 257c0 14.38-8.02 27.72-20.92 34.81c-11.61 6.41-15.84 21-9.45 32.61c6.43 11.66 21.05 15.8 32.61 9.45c28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.87z" fill="currentColor"></path></svg>
                        <svg v-else  @click="clickVolume('70')" width="25" height="25" color="#BEBEBE" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z" fill="currentColor"></path></svg>
                        <div class="sound-popup">
                            <n-slider 
                            :tooltip="false" 
                            v-model:value="percentageVolume" 
                            vertical 
                            style="height: 130px;position: relative;left: 13px;top: 10px;--n-handle-size: 12px;--n-handle-color: #D33A31;--n-fill-color: #D33A31;--n-fill-color-hover: #D33A31;"
                            @mousedown="handleMoveVolume"
                            @mouseup="handleTouchVolume"
                            @click="handleClickeVolume" />
                        </div>
                    </div>
                    <div class="progress">
                        <div class="progress-container">
                            <n-slider 
                            style="--n-fill-color: #D33A31;--n-fill-color-hover: #D33A31;--n-handle-size: 16px;--n-handle-color: transparent;--n-handle-box-shadow: transparent"
                            class="progress-slider"
                            v-model:value="percentage"
                            @mousedown="handleMoveProgress"
                            @mouseup="handleTouchProgress"
                            @click="handleClickProgress"
                            :tooltip="false"
                            :step="0.001" />
                        </div>
                    </div>
                    <audio
                    :src="playingMusicMp3.url"
                    :volume="audioVolume"
                    ref="audio"
                    @canplay="handleGetDuration"
                    @timeupdate="handleTimeUpdate"
                    @ended="handleMusicEnded"
                    ></audio>
                </div>
            </template>
        </div>
    </div>
    <div class="invite-box" v-if="inviteBoxPopup == 1">
        <div class="invite">
            <div class="title">
                <span>邀请加入服务器</span>
                <svg @click="inviteBoxPopup = 0" width="30px" height="30px" style="position: relative;top: 25px;right: 20px;float: right;cursor: pointer;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
            </div>
            <input type="text" v-model="searchUserKey" placeholder="ID / 昵称 / 邮箱" class="search" />
            <svg @click="searchUserInfoList" width="25px" height="25px" style="position: absolute;right: 30px;top: 90px;color: #A1A3A9;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8z" fill="currentColor"></path></svg>
            <div style="margin-top: 20px" v-if="searchUserList.length <= 0">暂无搜索记录</div>
            <div class="person-list" v-for="user in searchUserList">
                <div class="person-item">
                    <div class="icon"></div>
                    <div class="name">{{ user.nickname }}</div>
                    <div class="btn" @click="invite(user.id, user.nickname)">邀请</div>
                </div>
            </div>
        </div>
    </div>
    <div class="invite-box" v-if="addGroupPopup">
        <div class="invite" style="height: 380px;">
            <div class="title">
                <span>另一个服务器?</span>
                <svg @click="addGroupPopup = false" width="30px" height="30px" style="position: relative;top: 25px;right: 20px;float: right;cursor: pointer;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
            </div>
            <div class="create-group" @click="addGroupPopup = false;dialogGroup = true;dialogGroupPopup = true">
                <div class="icon"></div>
                <div class="content">
                    <p>创建</p>
                    <span>创建一个新的服务器并邀请小伙伴加入</span>
                </div>
                <svg width="20px" height="20px" color="#696a6c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144l-144 144"></path></svg>
            </div>
            <div class="join-group" @click="addGroupPopup = false;joinGroupPopup = true;dialogGroupPopup = true">
                <div class="icon"></div>
                <div class="content">
                    <p>加入</p>
                    <span>输入即时邀请加入你小伙伴的服务器</span>
                </div>
                <svg width="20px" height="20px" color="#696a6c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144l-144 144"></path></svg>
            </div>
        </div>
    </div>
    <div class="invite-box" v-if="dialogGroupPopup">
        <div class="invite">
            <div class="title">
                <span v-if="dialogGroup">创建服务器</span>
                <span v-if="dialogEditGroup">编辑服务器</span>
                <span v-if="joinGroupPopup">加入服务器</span>
                <svg @click="dialogGroupPopup = false;dialogGroup=false;dialogEditGroup=false" width="30px" height="30px" style="position: relative;top: 25px;right: 20px;float: right;cursor: pointer;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z" fill="currentColor"></path></svg>
            </div>
            <template v-if="dialogGroup">
                <div class="dialog-group-item">
                    <span>服务器名：</span>
                    <input v-model="createGroupDto.name" style="width: 70%;" type="text" placeholder="服务器的名称"/>
                </div>
                <div class="dialog-group-option">
                    <span>返回</span>
                    <span @click="confirmCreateGroup">创建</span>
                </div>
            </template>
            <template v-if="dialogEditGroup">
                <div class="dialog-group-item">
                    <span>服务器名</span>
                    <input v-model="groupInfo.name" style="width: 70%;" type="text" placeholder="服务器的名称"/>
                </div>
                <div class="dialog-group-item">
                    <span style="margin-top: 20px">服公告</span>
                    <input v-model="groupInfo.notice" style="width: 70%;" type="text" placeholder="服务器的公告"/>
                </div>
                <div class="dialog-group-item">
                    <span style="margin-top: 20px">服务器ID</span>
                    <input v-model="groupInfo.id" disabled="disabled" style="width: 70%;" type="text"/>
                </div>
                <div class="dialog-group-option">
                    <span>取消</span>
                    <span @click="saveGroupUpdate">保存</span>
                </div>
            </template>
            <template v-if="joinGroupPopup">
                <div class="dialog-group-item">
                    <span style="font-size: 17px">在下面输入服务器ID以加入现有服务器。</span>
                </div>
                <div class="dialog-group-item" style="margin-top: 20px">
                    <input v-model.number="joinGroupDto.groupId" style="width: 70%;" type="text" placeholder="服务器ID"/>
                </div>
                <div class="dialog-group-option">
                    <span>返回</span>
                    <span @click="joinGroupInvoke">加入</span>
                </div>
            </template>
        </div>
    </div>
    <!-- <el-dialog
    v-model="dialogGroup"
    title="创建服务器"
    width="30%"
    style="text-align: left;">
        <div>
            <span>服务器名：</span>
            <el-input v-model="createGroupDto.name" style="width: 70%;" type="text" placeholder="服务器的名称"/>
        </div>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogGroup = false">取消</el-button>
            <el-button type="primary" @click="confirmCreateGroup">
            创建
            </el-button>
        </span>
        </template>
    </el-dialog> -->
    <!-- <el-dialog
    v-model="dialogEditGroup"
    title="编辑服务器"
    width="30%"
    style="text-align: left;">
        <div>
            <span style="display: block;float: left;width: 80px">服务器名：</span>
            <el-input v-model="groupInfo.name" style="width: 70%;" type="text" placeholder="服务器的名称"/>
        </div>
        <div style="margin-top: 20px">
            <span style="display: block;float: left;width: 80px">公告：</span>
            <el-input v-model="groupInfo.notice" style="width: 70%;" type="textarea" placeholder="服务器的公告"/>
        </div>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogEditGroup = false">取消</el-button>
            <el-button type="primary" @click="saveGroupUpdate">
            保存
            </el-button>
        </span>
        </template>
    </el-dialog> -->
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { mainStore } from '../../store'
import { searchMusic, findMusicDetail, findMusicLyric, findMusicMp3 } from '../../api/netease'
import { searchGroupInfo, findGroupList, createGroup, updateGroup } from '../../api/group'
import { searchMusicInfo } from '../../api/music'
import { loginToken, searchUser } from '../../api/user'
import { inviteJoinGroup, joinGroup } from '../../api/groupServer'
import { millisecondFormat, formatMusicLyrics, handleFormatDuration } from '../../utils/util'
import { creatWebSocket, sendWebSocket, closeWebSocket } from '../../utils/webSocket'
import { Music, ILyric } from '../../interface/musicInterface'
import { GroupInfo, CreateGroupDto, JoinGroupDto } from '../../interface/groupInterface'
import { LoginUser } from '../../interface/storeInterface'
import ProgressBar from '../../components/ProgressBar.vue'
import Lyric from '../../components/Lyric.vue'
import { ElMessage, ElTooltip, ElDialog, ElInput, ElNotification } from 'element-plus'
import { NSlider } from 'naive-ui'

const store = mainStore()
const consoleButtonIndex = ref(0)
const searchText = ref('')
const searchMusicList = ref([] as Music[])
const groupList = ref([] as any[])
const groupInfo = ref({} as GroupInfo)
const groupOnlineSum = ref(0)
const groupOutlineSum = ref(0)
const playMusicInfo = ref([] as Music[])
const playingMusicLyric = ref([] as ILyric[])
const playingMusicMp3 = ref({} as any)
const playingMusicPic = ref('data:image/png;base64,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')
const loginUser = ref({} as LoginUser)
const optionServer = ref(0)
const inviteBoxPopup = ref(0)
const searchUserKey = ref('')
const searchUserList = ref([] as LoginUser[])
const checkGroupId = ref(0)

const lyric = ref<any>(null) // dom -  包含歌词标签的ul，高度很高，主要用于控制transform
const lyricDiv = ref<any>(null) // dom - 高度固定的外层div，主要用于html结构
const lyricIndex = ref<number>(0) // 当前高亮歌词的索引，与span标签里的index进行比较，判断是否高亮
let scrollHeight: number = 0 // 歌词区域要滚动的高度
let Idx: number = 0
let flag: boolean = true // 判断当前高亮的索引是否已经超过了歌词数组的长度
let lyricDomArr:any = [] // 歌词dom数组 span标签数组
const audio = ref<any>(null)

const durationStr = ref<string>('00:00') // 歌曲总时长 ss:mm格式
const currentTimeStr = ref<string>('00:00') // 歌曲正在播放的时间 ss:mm格式
const percentage = ref<string>('') // 传递给progressBar组件的进度条宽度百分比
const audioVolume = ref<number>(0.7)
const percentageVolume = ref<string>('70')
let isTouching: boolean = false // 是否正在拖动歌曲进度条
let duration:number = 0
let isStart: boolean = false // 是否正在播放音乐


const addGroupPopup = ref<boolean>(false)
const dialogGroupPopup = ref<boolean>(false)

const dialogGroup = ref<boolean>(false)
const createGroupDto = ref({} as CreateGroupDto)
const dialogEditGroup = ref<boolean>(false)

const joinGroupPopup = ref<boolean>(false)
const joinGroupDto = ref({} as JoinGroupDto)

const changeConsoleIndex = (index:number) => {
    consoleButtonIndex.value = index
}
const carriageReturn = (event:any) => {
    if (event.keyCode == 13) {
        if (!event.metaKey) {
          event.preventDefault();
        }
    }
}
// 搜索音乐
const search = () => {
    let params = {
        keywords: searchText.value
    }
    searchMusic(params).then(res => {
        if (res.code == 200) {
            searchMusicList.value = res.result.songs
        }
    })
}
//搜索用户
const searchUserInfoList = () => {
    let params = {
        keyword: searchUserKey.value
    }
    searchUser(params).then(res => {
        searchUserList.value = res.data.data
    })
}
// 获取群组列表
const searchGroupList = () => {
    let params = {
        userId: loginUser.value.id
    }
    findGroupList(params).then(res => {
        groupList.value = res.data.data
    })
}
// 获取群组信息
const searchGroup = (groupId: number) => {
    if (checkGroupId.value != 0 && checkGroupId.value != groupId) {
        groupOnlineSum.value = 0
        groupOutlineSum.value = 0
        closeWebSocket()
    }
    checkGroupId.value = groupId
    let params = {
        groupId: checkGroupId.value
    }
    searchGroupInfo(params).then(res => {
        groupInfo.value = res.data.data
        for (let user of groupInfo.value.users) {
            if (user.isLogin == 1) {
                groupOnlineSum.value++
            } else if (user.isLogin == 0) {
                groupOutlineSum.value++
            }
        }
    })
    let registerPacket = {
        groupId: checkGroupId.value,
        user: loginUser.value
    }
    creatWebSocket(registerPacket)
    store.state.websocket.onmessage = function (e: any) {
        websocketonmessage(e);
    };
}
const chooseSong = (item: Music) => {
    let data = {
        type: 9,
        params: {
            toGroupId: checkGroupId.value,
            userId: loginUser.value.id,
            operate: 1,
            musicId: item.id
        },
    }
    ElMessage({
        message: '点歌成功',
        type: 'success',
    })
    sendWebSocket(data)
}
// 查询播放音乐列表
const findMusicsList = () => {
    let params = {
        groupId: 1
    }
    searchMusicInfo(params).then(res => {
        let musicVos = res.data.data.musicVos
        for (let musicVo of musicVos) {
            let params = {
                keywords: musicVo.musicId
            }
            searchMusic(params).then(item => {
                if (item.code == 200) {
                    playMusicInfo.value.push(item.result.songs[0])
                }
            })
        }
        setTimeout(() => {
            playingMusic()
        }, 3000)
    })
}
// 播放音乐进程
const playingMusic = (): any => {
    findMusicDetail({
        ids: playMusicInfo.value[0].id
    }).then(detail => {
        playingMusicPic.value = detail.songs[0].al.picUrl
    })
    findMusicLyric({
        id: playMusicInfo.value[0].id
    }).then(lyric => {
        playingMusicLyric.value = formatMusicLyrics(lyric.lrc.lyric).lyric
    })
    findMusicMp3({
        id: playMusicInfo.value[0].id,
        level: 'lossless'
    }).then(res => {
        playingMusicMp3.value = res.data[0]
    })
    isStart = true
    audio.value.play()
}
// 获取歌曲总时长
const handleGetDuration = (e: any): void => {
    duration = e.target.duration
    durationStr.value = handleFormatDuration(duration)
}
// 处理歌曲播放进程
const handleTimeUpdate = (e:any): void => {
    const { currentTime } = e.target
    currentTimeStr.value = handleFormatDuration(currentTime)
    if (!isTouching) {
        percentage.value = ((currentTime / duration) * 100).toFixed(3).toString()
    }
    handleLyricTransform(currentTime)
}
// 进度条点击事件
const handleClickProgress = (): void => {
    let currentTime = duration * (Number(percentage.value) / 100)
    // 更新歌曲
    audio.value.currentTime = currentTime
    for (let i = 0; i < playingMusicLyric.value.length; i++) {
        if (currentTime > playingMusicLyric.value[i].time) {
            lyricIndex.value = i + 1
            Idx = i
        }
    }
}
// 进度条拖拽事件
const handleMoveProgress = (): void => {
    isTouching = true
}
// 进度条拖拽结束事件
const handleTouchProgress = ():void => {
    // 更新歌曲
    isTouching = false
    audio.value.currentTime = duration * (Number(percentage.value) / 100)
}
// 歌曲结束
const handleMusicEnded = (): void => {
    let data = {
        type: 9,
        params: {
            toGroupId: checkGroupId.value,
            userId: loginUser.value.id,
            operate: 2,
            musicId: -1
        },
    }
    sendWebSocket(data)
    isStart = false
    handleResetMusic()
}
// 音量条拖拽事件
const handleMoveVolume = ():void => {

}
const handleTouchVolume = ():void => {
    audioVolume.value = Number(percentageVolume.value) / 100
}
const handleClickeVolume = ():void => {
    audioVolume.value = Number(percentageVolume.value) / 100
}
const clickVolume = (volume: string):void => {
    percentageVolume.value = volume
    audioVolume.value = Number(percentageVolume.value) / 100
}
// 歌词滚动
const handleLyricTransform = (currentTime: number): void => {
      const item: ILyric = playingMusicLyric.value[Idx]
      if (flag && currentTime > item.time) {
        // 实时获取dom，不然在上一首/下一首切换时，dom不会更新 
        lyricDomArr = lyric.value.querySelectorAll('span')
        // 拿到当前正在播放的歌词span的索引
        const index = parseInt(lyricDomArr[Idx].dataset.index)

        if (Idx === index) {
          lyricIndex.value = Idx
          Idx += 1
          if (Idx >= lyricDomArr.length) {
            flag = false
            return
          }
          scrollHeight = Idx * lyricDomArr[Idx].offsetHeight
          lyric.value.style.transform = `translateY(${-scrollHeight + 40}px)`
        }
      }
}
// 重置歌曲状态 跳转之后
const handleResetMusic = (): void => {
    // audio.value.pause()
    lyric.value.style.transform = `translateY(0)`
    Idx = 0
    scrollHeight = 0
    flag = true
    playingMusicLyric.value = []
    playingMusicMp3.value = {}
    playingMusicPic.value = 'data:image/png;base64,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'
    audio.value.autoplay = true
    setTimeout(() => {
        if (playMusicInfo.value.length > 0) {
            isStart = true
            audio.value.play()
        }
    }, 2000)
}
const start = () => {
    isStart = !isStart
    if (playingMusicMp3.value.url == null) {
        playingMusic()
    }
    audio.value.play()
}
const pause = () => {
    isStart = !isStart
    audio.value.pause()
}
const end = () => {
    handleMusicEnded()
}
// 获取登录用户信息
const getUserByToken = () => {
    loginToken().then(res => {
        loginUser.value = res.data
        searchGroupList()
        // findMusicsList()
        setTimeout(() => {
        // 通知服务器内成员有新成员加入
        let data = {
            type: 9,
            params: {
                toGroupId: checkGroupId.value,
                userId: loginUser.value.id,
                operate: 0,
                musicId: -1
            },
        }
        sendWebSocket(data)
        }, 5000)
    })
}
const optionServerBtn = () => {
    if (optionServer.value == 0) {
        optionServer.value = 1
    } else if (optionServer.value == 1) {
        optionServer.value = 0
    }
}
const confirmCreateGroup = () => {
    createGroupDto.value.admin = loginUser.value.id
    createGroup(createGroupDto.value).then(res => {
        if (res.data.data) {
            dialogGroupPopup.value = false
            dialogGroup.value = false
            ElNotification({
                title: '创建服务器成功',
                message: '',
                type: 'success',
            })
        }
    })
}
const saveGroupUpdate = () => {
    let data = {
        id: groupInfo.value.id,
        name: groupInfo.value.name,
        notice: groupInfo.value.notice,
        admin: loginUser.value.id
    }
    updateGroup(data).then(res => {
        if (res.data.data) {
            dialogGroupPopup.value = false
            dialogEditGroup.value = false
            ElNotification({
                title: '编辑服务器成功',
                message: '',
                type: 'success',
            })
        }
    })
}
// 邀请进群
const invite = (userId: Number, nickname: String) => {
    let data = {
        groupId: groupInfo.value.id,
        userIds: [userId],
        userNickname: nickname
    }
    inviteJoinGroup(data).then(res => {
        if (res.data.data) {
            inviteBoxPopup.value = 0
            ElNotification({
                title: '邀请成功',
                message: '',
                type: 'success',
            })
            groupOnlineSum.value = 0
            groupOutlineSum.value = 0
            let params = {
                groupId: checkGroupId.value
            }
            searchGroupInfo(params).then(res => {
                groupInfo.value = res.data.data
                for (let user of groupInfo.value.users) {
                    if (user.isLogin == 1) {
                        groupOnlineSum.value++
                    } else if (user.isLogin == 0) {
                        groupOutlineSum.value++
                    }
                }
            })
        }
    })
}
// 申请进群
const joinGroupInvoke = () => {
    joinGroupDto.value.userId = loginUser.value.id
    joinGroup(joinGroupDto.value).then(res => {
        if (res.data.data) {
            dialogGroupPopup.value = false
            joinGroupPopup.value = false
            ElNotification({
                title: '申请成功',
                message: '等待服务器管理员通过...',
                type: 'success',
            })
        }
    })
}
onMounted(async () => {
    getUserByToken()
    lyricDomArr = lyric.value.querySelectorAll('span')
});
const websocketonmessage = (e: any) => {
  let json = JSON.parse(e.data)
  console.log(json)
  if (json.status == 200 && json.type == 10) {
    playMusicInfo.value = []
    for (let musicVo of json.params.data) {
        let params = {
            keywords: musicVo.musicId
        }
        searchMusic(params).then(item => {
            if (item.code == 200) {
                playMusicInfo.value.push(item.result.songs[0])
            }
        })
    }
    setTimeout(() => {
        switch (json.params.operateType) {
            case 0: // 有人员进入服务器
                groupOnlineSum.value = 0
                groupOutlineSum.value = 0
                let params = {
                    groupId: checkGroupId.value
                }
                searchGroupInfo(params).then(res => {
                    groupInfo.value = res.data.data
                    for (let user of groupInfo.value.users) {
                        if (user.isLogin == 1) {
                            groupOnlineSum.value++
                        } else if (user.isLogin == 0) {
                            groupOutlineSum.value++
                        }
                    }
                })
                break;
            case 1: // 加入歌曲
                playingMusic()
                break;
            case 2: // 跳过歌曲
                playingMusic()
                break;
            case 3: // 移除歌曲
                break;
            default:
                break;
        }
    }, 2000)
  }
}
const sliceGroupName = (groupName: String) => {
    return groupName.substring(0,1)
    // return groupName.substring(0,1)
}
onUnmounted(async () => {
    closeWebSocket()
});
</script>
<style lang="less" scoped>
.logo {
    width: 100vw;
    height: 5vh;
    div{ 
        font-weight: bold;
        font-size: 18px;
        float: left;
        margin-top: 15px;
        margin-left: 25px
    }
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
    .server-box {
        width: 19%;
        height: 100%;
        border-right: solid 1.5px #323437;
        float: left;
        .server-name {
            font-size: 20px;
            -webkit-text-stroke: 0.2px #FFF;
            text-align: left;
            margin-top: 15px;
            margin-left: 15px;
            padding: 10px 15px 10px 10px;
            width: 260px;
            border-radius: 10px;
            cursor: pointer;
            background-color: #36383D;
            font-weight: 500;
            position: relative;
            .server-popup {
                width: 285px;
                overflow: hidden;
                background-color: #35373D;
                position: absolute;
                top: 55px;
                left: 0px;
                border-radius: 10px;
                padding-bottom: 10px;
                padding-top: 7px;
                .server-popup-item {
                    padding: 10px;
                    font-size: 16px;
                    font-weight: normal;
                    width: 250px;
                    margin: 0 auto;
                    margin-top: 3px;
                    border-radius: 7px;
                    svg {
                        position: relative;
                        top: 1.5px;
                        width: 20px;
                        height: 20px;
                        float: left;
                        margin-right: 10px;
                    }
                }
                .server-popup-item:hover {
                    background-color: #414348;
                }
            }
        }
        svg {
            float: right;
        }
        .server-name:hover {
            background-color: #42444A;
        }
        .server-online {
            text-align: left;
            margin-left: 25px;
            clear: both;
            overflow: hidden;
        }
        .server-offline {
            text-align: left;
            margin-left: 25px;
            clear: both;
            overflow: hidden;
        }
        .title {
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .personnel {
            height: 50px;
            margin-bottom: 20px;
            .icon {
                width: 50px;
                height: 50px;
                border-radius: 50px;
                background-color: #323438;
                float: left;
            }
            span {
                line-height: 50px;
                float: left;
                margin-left: 15px;
            }
        }
    }
    .music-box {
        width: 80.9%;
        height: 100%;
        float: right;
        .music-console {
            width: 72%;
            height: 90%;
            float: left;
            .button-box {
                width: 100%;
                height: 60px;
                span {
                    float: left;
                    margin-left: 20px;
                    margin-right: 20px;
                    font-size: 18px;
                    line-height: 60px;
                    color: #939393;
                    cursor: pointer;
                }
                .search {
                    float: left;
                    width: 200px;
                    height: 30px;
                    background-color: #404040;
                    margin-top: 15px;
                    border: none;
                    outline: none;
                    color: #939393;
                    border-radius: 30px;
                    padding-left: 20px;
                }
            }
            .music-list {
                width: 100%;
                height: 93%;
                overflow: auto;
                .music-item:nth-child(2) {
                    .name {
                        color: #D33A31;
                    }
                }
                .music-item {
                    width: 100%;
                    height: 50px;
                    color: #939393;
                    cursor: pointer;
                    span {
                        float: left;
                        display: block;
                        height: 100%;
                        line-height: 50px;
                    }
                    .num {
                        width: 40px;
                        margin-left: 20px;
                        text-align: left;
                    }
                    .name {
                        width: 41%;
                        text-align: left;
                        overflow:hidden;  /*内容会被修剪，并且其余内容是不可见的。*/
                        text-overflow: ellipsis;  	/*显示省略符号来代表被修剪的文本*/
                        white-space: nowrap;	/*文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。*/
                    }
                    .vip {
                        width: 4%;
                        text-align: left;
                        .span {
                            display: block;
                            border: solid 1px #D33A31;
                        }
                    }
                    .singer {
                        width: 15%;
                        text-align: left;
                    }
                    .album {
                        width: 25%;
                        overflow:hidden;  /*内容会被修剪，并且其余内容是不可见的。*/
                        text-overflow: ellipsis;  	/*显示省略符号来代表被修剪的文本*/
                        white-space: nowrap;	/*文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。*/
                        text-align: left;
                    }
                    .time {
                        text-align: left;
                        color: #5B5B5B;
                    }
                }
                .music-item-bg {
                    background-color: #292929;
                }
                .music-item:hover {
                    color: #FFF;
                    background-color: #333638;
                }
            }
            .music-search {
                width: 100%;
                height: 93%;
                overflow: auto;
                .music-item {
                    width: 100%;
                    height: 50px;
                    color: #939393;
                    cursor: pointer;
                    span {
                        float: left;
                        display: block;
                        height: 100%;
                        line-height: 50px;
                    }
                    .num {
                        width: 40px;
                        margin-left: 20px;
                        text-align: left;
                    }
                    .name {
                        width: 41%;
                        text-align: left;
                        overflow:hidden;  /*内容会被修剪，并且其余内容是不可见的。*/
                        text-overflow: ellipsis;  	/*显示省略符号来代表被修剪的文本*/
                        white-space: nowrap;	/*文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。*/
                    }
                    .vip {
                        width: 4%;
                        text-align: left;
                    }
                    .singer {
                        width: 15%;
                        text-align: left;
                    }
                    .album {
                        width: 25%;
                        overflow:hidden;  /*内容会被修剪，并且其余内容是不可见的。*/
                        text-overflow: ellipsis;  	/*显示省略符号来代表被修剪的文本*/
                        white-space: nowrap;	/*文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。*/
                        text-align: left;
                    }
                    .time {
                        text-align: left;
                        color: #5B5B5B;
                    }
                }
                .music-item-bg {
                    background-color: #292929;
                }
                .music-item:hover {
                    color: #FFF;
                    background-color: #333638;
                }
            }
        }
        .music-details {
            width: 28%;
            height: 90%;
            float: right;
            dt {
                position: relative;
                width: 186px;
                height: 186px;
                margin: 0 auto;
                margin-top: 20px;
                &:after {
                    content: '';
                    position: absolute;
                    left: 9px;
                    top: 0;
                    width: 201px;
                    height: 180px;
                    background: url('./src/assets/img/album_cover_player.png') 0 0 no-repeat;
                }
                img {
                    vertical-align: middle;
                    width: 186px;
                    height: 186px;
                }
            }
            .name {
                font-size: 18px;
                -webkit-text-stroke: 0.2px #FFF;
            }
            .album {
                color: #AAAAAA;
            }
            .singer {
                color: #AAAAAA;
            }
            .lyrics{
                height: 58%;
                overflow: hidden;
                padding: 10px;
                position: relative;
                span{
                    display: block;
                    line-height: 40px;
                    margin-right: 35px;
                    // margin-top: 10px;
                    color: #8B8A89;
                    -webkit-text-stroke: 0.2px #8B8A89;
                }
                .acting{
                    color: #D5D5D5;
                    font-size: 18px;
                    -webkit-text-stroke: 0.2px #D5D5D5;
                }
                .lyrics-bg-1 {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 40px;
                    background-color: #252525;
                    background: -webkit-linear-gradient(top, rgba(37,37,37,1)0%,rgba(37,37,37,0.5)66%, rgba(37,37,37,0)99%);/* Safari、Chrome */
                    background:linear-gradient(rgba(37,37,37,1),rgba(37,37,37,0));/* 默认渐变位置从上往下 */ 
                }
                .lyrics-bg-2 {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 40px;
                    background-color: #252525;
                    background: -webkit-linear-gradient(top, rgba(37,37,37,1)0%,rgba(37,37,37,0.5)66%, rgba(37,37,37,0)99%);/* Safari、Chrome */
                    background:linear-gradient(rgba(37,37,37,0),rgba(37,37,37,1));/* 默认渐变位置从上往下 */ 
                }
            }
        }
        .music-schedule {
            clear: both;
            width: 100%;
            height: 10%;
            // background-color: #252525;
            background-color: #333;
            position: relative;
            .icon {
                width: 60px;
                height: 60px;
                border-radius: 5px;
                position: relative;
                top: 20px;
                left: 20px;
                float: left;
                border-radius: 5px;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .music-info {
                width: 200px;
                float: left;
                margin-left: 30px;
                margin-top: 20px;
                text-align: left;
            }
            .progress {
                position: relative;
                top: -10px;
                .progress-slider :hover  {
                    --n-handle-color: red;
                    --n-handle-box-shadow: rgba(0,0,0,.1);
                }
            }
            .music-option {
                position: absolute;
                top: 25px;
                left: 600px;
                width: 200px;
                height: 50px;
            }
            .sound-option {
                position: absolute;
                width: 40px;
                right: 35px;
                top: 25px;
                padding-top: 10px;
                .sound-popup {
                    position: relative;
                    top: -185px;
                    left: 0px;
                    border-radius: 5px;
                    width: 40px;
                    height: 150px;
                    background-color: #2a2a2a;
                    z-index: 99;
                    display: none;
                }
            }
            .sound-option:hover .sound-popup {
                display: block;
            }
        }
    }
}
.invite-box {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
    position: absolute;
    top: 0px;
    .invite {
        width: 500px;
        height: 480px;
        background-color: #25262B;
        margin: 0 auto;
        margin-top: 200px;
        border-radius: 20px;
        position: relative;
        .create-group {
            clear: both;
            width: 89%;
            height: 120px;
            border: solid 1.5px #696a6c;
            margin: 0 auto;
            border-radius: 20px;
            cursor: pointer;
            .icon {
                width: 70px;
                height: 70px;
                border-radius: 70px;
                background-color: #CCC;
                float: left;
                margin: 25px 20px 25px 20px;
            }
            .content {
                float: left;
                text-align: left;
                height: 100%;
                p {
                    font-size: 19px;
                    font-weight: bold;
                    line-height: 0px;
                    position: relative;
                    top: 25px;
                }
                span {
                    position: relative;
                    top: 25px;
                    color: #9FA1A8;
                    font-size: 14px;
                }
            }
            svg {
                float: right;
                position: relative;
                top: 50px;
                right: 10px;
            }
        }
        .create-group:hover {
            background-color: #2d2e33;
        }
        .join-group {
            position: relative;
            top: 15px;
            width: 89%;
            height: 120px;
            border: solid 1.5px #696a6c;
            margin: 0 auto;
            border-radius: 20px;
            cursor: pointer;
            .icon {
                width: 70px;
                height: 70px;
                border-radius: 70px;
                background-color: #CCC;
                float: left;
                margin: 25px 20px 25px 20px;
            }
            .content {
                float: left;
                text-align: left;
                height: 100%;
                p {
                    font-size: 19px;
                    font-weight: bold;
                    line-height: 0px;
                    position: relative;
                    top: 25px;
                }
                span {
                    position: relative;
                    top: 25px;
                    color: #9FA1A8;
                    font-size: 14px;
                }
            }
            svg {
                float: right;
                position: relative;
                top: 50px;
                right: 10px;
            }
        }
        .join-group:hover {
            background-color: #2d2e33;
        }
        .title {
            width: 100%;
            height: 80px;
            text-align: left;
            line-height: 80px;
            span {
                font-size: 22px;
                margin-left: 25px;
                font-weight: 500;
            }
        }
        .search {
            width: 88%;
            height: 40px;
            background-color: #25262B;
            margin: 0 auto;
            border: none;
            outline: none;
            color: #FFF;
            border: solid 1.5px #3B3C40;
            border-radius: 10px;
            padding-left: 15px;
        }
        .search:hover {
            border: solid 1.5px #6CBF02;
        }
        .search:focus {
            border: solid 1.5px #6CBF02;
        }
        .person-list {
            width: 90%;
            height: 300px;
            margin: 0 auto;
            margin-top: 20px;
            .person-item {
                width: 100%;
                height: 50px;
                border-radius: 10px;
                padding-top: 10px;
                cursor: pointer;
                .icon {
                    width: 40px;
                    height: 40px;
                    background-color: #818181;
                    border-radius: 40px;
                    margin-left: 10px;
                    float: left;
                }
                .name {
                    float: left;
                    margin-left: 10px;
                    line-height: 40px;
                }
                .btn {
                    border: solid 1.5px #9FA4A8;
                    color: #9FA4A8;
                    width: 80px;
                    height: 40px;
                    line-height: 40px;
                    float: right;
                    font-size: 16px;
                    border-radius: 10px;
                    margin-right: 10px;
                    font-weight: bold;
                }
            }
            .person-item:hover {
                background-color: #323337;
            }
            .person-item:hover .btn {
                color: #FFF;
                background-color: #6CBF02;
                border: solid 1.5px #6CBF02;
            }
        }
    }
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #252525;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb {
    background: #404040;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #484848;
}

.loading {
  display: block;
  position: relative;
  top: 13px;
  width: 5px;
  height: 10px;

  animation: rectangle infinite 1s ease-in-out -0.2s;

  background-color: #D33A31;
  transform: scale(0.3);
}

.loading:before,
.loading:after {
  position: absolute;
  width: 5px;
  height: 10px;
  content: "";
  background-color: #D33A31;
}

.loading:before {
  left: -14px;

  animation: rectangle infinite 1s ease-in-out -0.4s;
}

.loading:after {
  right: -14px;

  animation: rectangle infinite 1s ease-in-out;
}

@keyframes rectangle {
  0%,
  80%,
  100% {
    height: 20px;
    box-shadow: 0 0 #D33A31;
  }

  40% {
    height: 30px;
    box-shadow: 0 -20px #D33A31;
  }
}
.dialog-group-item {
    width: 89%;
    text-align: left;
    margin: 0 auto;
    span {
        display: block;
        color: #A6A7AE;
    }
    input {
        border: none;
        outline: none;
        height: 35px;
        padding: 5px 15px;
        border-radius: 10px;
        border: solid 1.5px #3B3B3B;
        margin-top: 10px;
    }
    input:focus {
        border: solid 1.5px #7ACC36;
    }
}
.dialog-group-option {
    position: absolute;
    bottom: 30px;
    right: 20px;
    span {
        padding: 10px 25px;
        margin-right: 10px;
        font-size: 16px;
        border-radius: 10px;
        cursor: pointer;
        transition: all .25s;
    }
    span:nth-child(1):hover {
        background-color: #E4E6F1;
        color: #70727C;
    }
    span:nth-child(2) {
        background-color: #7ACC36;
    }
    span:nth-child(2):hover {
        background-color: #87D14A;
    }
}
</style>