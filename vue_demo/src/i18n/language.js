import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en-US.json'
import tw from './zh-TW.json'
import cn from './zh-CN.json'
import jp from './ja-JP.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'tw',
    messages: { en, tw, cn, jp }
})

export default i18n