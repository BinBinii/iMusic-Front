  import { ILyric } from "../interface/musicInterface"

  interface IReturnLyric {
    lyric: ILyric[],
    tlyric?: ILyric[]
  }
  
  export const formatMusicLyrics = (lyric?: string, tlyric?: string):IReturnLyric => {
    if (lyric === '') {
      return { lyric: [{ time: 0, lyric: '这个地方没有歌词！', uid: 520520 }] }
    }
    const lyricObjArr: ILyric[] = [] // 最终生成的歌词数组
  
    // 将歌曲字符串变成数组，数组每一项就是当前歌词信息
    const lineLyric:any = lyric?.split(/\n/)
  
    // 匹配中括号里正则的
    const regTime = /\d{2}:\d{2}.\d{2,3}/
  
    // 循环遍历歌曲数组
    for (let i = 0; i < lineLyric?.length; i++) {
      if (lineLyric[i] === '') continue
      const time:number = formatLyricTime(lineLyric[i].match(regTime)[0])
  
      if (lineLyric[i].split(']')[1] !== '') {
        lyricObjArr.push({
          time: time,
          lyric: lineLyric[i].split(']')[1],
          uid: parseInt(Math.random().toString().slice(-6))
        })
      }
    }
  
    return {
      lyric: lyricObjArr
    }
  }
  
  const formatLyricTime = (time: string) => {
    const regMin = /.*:/
    const regSec = /:.*\./
    const regMs = /\./
  
    const min = parseInt((time.match(regMin) as any)[0].slice(0, 2))
    let sec = parseInt((time.match(regSec) as any)[0].slice(1, 3))
    const ms = time.slice((time.match(regMs) as any).index + 1, (time.match(regMs) as any).index + 3)
    if (min !== 0) {
      sec += min * 60
    }
    return Number(sec + '.' + ms)
  }

  // 补0函数
  export function addZero(s:any) {
    return s < 10 ? '0' + s : s
  }
  
  // 时间格式化
  export function millisecondFormat(value:any) {
    let minute = Math.floor(value % (1000 * 3600) / (1000 * 60))
    let second = Math.floor(value % (1000 * 60) / 1000)
    return `${addZero(minute)}:${addZero(second)}`
  }

  // 格式化歌曲播放时间
  export const handleFormatDuration = (duration: number):string => {
    const mins = Math.floor(duration / 60) < 10 ? `0${Math.floor(duration / 60)}` : Math.floor(duration / 60)
    const sec = Math.floor(duration % 60) < 10 ? `0${Math.floor(duration % 60)}` : Math.floor(duration % 60)
    return `${mins}:${sec}`
  }

  