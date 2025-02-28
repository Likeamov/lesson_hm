import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
   TopBarItem,
   recommendItem
} from "@/types/video";
import { comment } from "postcss";

export const useVideoStore = defineStore("videoStore",()=> {
    const topBarState = ref<TopBarItem[]>([
        {
            title: "好剧推荐",
            icon: "juyuan"
        },
        {
            title: "电影片单",
            icon: "dianying1"
        },
        {
            title: "排行榜",
            icon: "31paixingbang"
        }
    ])

   const recommendItemState = ref<recommendItem[]>([
        {
            title: "科幻",
            items: [
                {
                    title: "三体",
                    msg:" 内地 · 2023 · 张鲁一 于和伟 陈瑾 王子文 林永健",
                    discuss:"面对人类危机",
                    score:"9.0",
                    img:"https://puui.qpic.cn/vcover_vt_pic/0/mzc002007knmh3g1655781094228/0?max_age=7776000"
                },
                {
                    title: "​雪国列车 第四季​",
                    msg:"英国 · 2024 · 詹妮弗·康纳利 戴维德·迪格斯 肖恩·宾",
                    discuss:"末日列车再度归来",
                    score:"7.0",
                    img:"https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc0020043oa8wc1739152900461/0?max_age=7776000"
                
                },
                {
                    title: "哥谭镇 第一季",
                    msg:"美国 · 2014 · 本杰明·麦肯锡 唐纳尔·罗格 西恩·帕特维 ",
                    discuss:"DC蝙蝠侠系列改编",
                    score:"9.1",
                    img:"https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002007w94lag1721812549055/0?max_age=7776000"
                }
            ]
        },
        {
            title: "喜剧",
            items: [
                {
                    title: "爱情公寓3​",
                    msg:"内地 · 2012 · 陈赫 娄艺潇 赵霁 孙艺洲 王传君 邓家佳",
                    score:"9.6",
                    img:"https://puui.qpic.cn/vcover_vt_pic/0/zaasslvhhyy1sg71689740882558/0?max_age=7776000"
                },
                {
                    title: "骊歌行",
                    msg:"内地 · 2021 ·李一桐 许凯 吴佳怡 檀健次",
                    discuss:"李一桐许凯古装爱情",
                    score:"7.7",
                    img:"https://puui.qpic.cn/vcover_vt_pic/0/mzc0020007q9shb1618455283354/0?max_age=7776000"
                },            {
                    title: "飞驰人生2",
                    msg:"8536 · 内地 · 2024 · 沈腾 范丞丞 尹正 张本煜 孙艺洲",
                    discuss:"昔日冠军奔赴赛场",
                    score:"9.6",
                    img:"https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200rx67svy1714544992964/0?max_age=7776000"
                }
            ]
        },
        {
            title: "古装",
            items: [

            ]
        },
        {
            title: "合家欢",
            items: [

            ]
        },
        {
            title: "悬疑",
            items: []
           
        },
        {
            title: "犯罪",
            items: [
                
            ]
        },
        {
            title: "动作",
            items: [
   
            ]
        },
        {
            title: "爱情",
            items: []
           
        },
        {
            title: "冒险",
            items: []
           
        },
        
   ])

    return {topBarState, recommendItemState}
})