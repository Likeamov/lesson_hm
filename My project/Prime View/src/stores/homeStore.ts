import { defineStore } from "pinia";
// 引诱 面试官 es6 module 问题
import { ref } from "vue";
// 关键数据要限制类型
import type { 
    HomeTopBarItem,
    PopularVideosItem,
    CommonVideosItem 
} from "@/types/home";

export const useHomeStore = defineStore('home',()=>{
    // 定义状态

    //导航
    const topBarState = ref<HomeTopBarItem[]>([
        {
            title: '电视剧',
            icon: 'dianshiju'
        },
        {
            title: '电影',
            icon: 'dianying'
        },
        {
            title: '综艺',
            icon: 'liebiaodaohang_zongyi'
        },
        {
            title: '动漫',
            icon: 'dongman'
        },
        {
            title: '更多',
            icon: 'xiala'
        }
    ])
    
    // 热门影视
    const popularVideosState = ref<PopularVideosItem[]>([
        {
            title: '异形：夺命舰',
            msg: '顶级科幻惊悚',
            img: 'https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200pb3um4z1732008783561/0?max_age=7776000'
        },
        {
            title: '海绵宝宝：拯救比奇堡',
            msg: '海绵宝宝珊迪勇闯人类世界',
            img: 'https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200byybfyq1740042321910/0?max_age=7776000'
        },
        {
            title: '误杀2',
            msg: '肖央直面权势设局救子',
            img: 'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200b3hvcjq1644304731745/0?max_age=7776000'
        },
        {
            title: '黑鹰坠落',
            msg: '雷德斯利科特战争名作',
            img: 'https://puui.qpic.cn/vcover_vt_pic/0/3j6v0bpyyudipae1567132801/0?max_age=7776000'
        },
        {
            title: '阿凡达',
            msg: '未来世界科幻之旅',
            img: 'https://puui.qpic.cn/vcover_vt_pic/0/ldl1811bamppdrd1698240077695/0?max_age=7776000'
        },
        {
            title: '头号玩家',
            msg: '斯皮伯尔格再造反乌托邦未来',
            img: 'https://puui.qpic.cn/vcover_vt_pic/0/zatx0zuk94d9aru1566898670/0?max_age=7776000'
        },
        {
            title: '唐人街探案',
            msg: '王宝强刘昊然泰国破悬案',
            img: 'https://puui.qpic.cn/vcover_vt_pic/0/f3qroleq1lyuavy1575430841/0?max_age=7776000'
        },
    ])

    // 常用影视
    const commonVideosState = ref<CommonVideosItem[]>([
        {
            name: '大奉打更人',
            title: '王鹤棣热血扫尽不平事',
            msg: '全40集',
            img: 'https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200qon7vo31729214997689/0?max_age=7776000'
        },
        {
            name: '刑侦现场',
            title: '危险就在你身边',
            msg: '全18集',
            img: 'https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200kmgqldw1737444258902/0?max_age=7776000'
        },
        {
            name: '庆余年第二季',
            title: '范闲绝境逢生杀回京都',
            msg: '全36集',
            img: 'https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc002002kqssyu1715223183563/0?max_age=7776000'
        },
        {
            name: '宿敌',
            title: '廖凡潜伏19年搏杀间谍',
            msg: '全16集',
            img: 'https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200u70wk2w1730181565188/0?max_age=7776000'
        },
        {
            name: '人民警察',
            title: '刑警夫妻破凶案',
            msg: '全38集',
            img: 'https://vcover-vt-pic.puui.qpic.cn/vcover_vt_pic/0/mzc00200odc2q2w1727664971849/0?max_age=7776000'
        },
        {
            name: '侏罗纪世界3',
            title: '恐龙世界史诗终章来袭',
            msg: '7.5',
            img: 'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200x1t7a8o1655950084957/0?max_age=7776000'
        },
        {
            name: '速度与激情10',
            title: '狂飙！速激家族玩命逃生',
            msg: '9.1',
            img: 'https://puui.qpic.cn/vcover_vt_pic/0/0z94k627g0b08eu1688614666618/0?max_age=7776000'
        },
        {
            name: '碟中谍7：致命清算',
            title: '阿汤哥的复仇',
            msg: '8.8',
            img: 'https://puui.qpic.cn/vcover_vt_pic/0/mzc00200757bjtn1695386107363/0?max_age=7776000'
        },
        {
            name: '流浪地球2',
            title: '吴京，刘德华联手救地球',
            msg: '9.2',
            img: 'https://puui.qpic.cn/vcover_vt_pic/0/mzc002008v8rka31681528902765/0?max_age=7776000'
        }
    ])
        

    return {
        topBarState,
        popularVideosState,
        commonVideosState
    }
})
