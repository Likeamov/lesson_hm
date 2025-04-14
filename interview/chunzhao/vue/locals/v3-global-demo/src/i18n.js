import { createI18n } from 'vue-i18n'
// 语言包 
// 确定  ok 配置
// 配置好 
import en from './locales/en'
import zh from './locales/zh'
import ja from './locales/ja'

const i18n = createI18n({
legacy:false,
locale:localStroage.getItem('lang')??'zh',
meaasge:{
    en,
    zh,
    ja
}
})
export default i18n