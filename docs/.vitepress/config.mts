import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Traditional Chinese Medicine",
  description: "Traditional Chinese Medicine for Judy's Note",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '系统使用规范', link: '/sys_instructionsForUse' },
      { text: '系统设计概要', link: '/sys_designSummary' },
      { text: '讲师介绍', link: '/zhouJiaRong' },
      { text: '中医原理', link: '/tcmPrinciple' },
      { text: '按摩方法', link: '/massageMethod' },
      { text: '落藏理论', link: '/diseaseSource' },
      { text: '五行理论', link: '/fiveElementsTheory' },
      { text: '治病总结', link: '/cureSummary' },
      { text: '附录', link: '/addendum' }
    ],

    sidebar: [
      {
        text: '系统使用规范',
        items: [
          { text: '系统使用规范', link: '/sys_instructionsForUse' }
        ]
      },
      {
        text: '系统设计概要',
        items: [
          { text: '系统设计概要', link: '/sys_designSummary' }
        ]
      },
      {
        text: '讲师介绍',
        items: [
          { text: '讲师介绍', link: '/zhouJiaRong' }
        ]
      },
      {
        text: '中医原理',
        items: [
          { text: '阴阳', link: '/tcmPrin_yingyang' },
          { text: '气血', link: '/tcmPrin_qixue' },
          { text: '寒热', link: '/tcmPrin_hanre' }
        ]
      },
      {
        text: '按摩方法',
        items: [
          { text: '皮疗法--肺', link: '/massage_skin' },
          { text: '肉疗法--脾', link: '/massage_muscle' },
          { text: '脉疗法--心脑', link: '/massage_vein' },          
          { text: '*根骶疗法--肾', link: '/massage_root' },
          { text: '筋疗法--肝', link: '/massage_tendon' },
          { text: '*宗筋疗法--肝', link: '/massage_tendon_base' },
          { text: '其它疗法', link: '/massage_other' }
        ]
      },
      {
        text: '落藏理论',
        items: [
          { text: '肺（大肠）', link: '/DS_lungs' },
          { text: '脾（胃）', link: '/DS_spleen' },
          { text: '心（小肠）', link: '/DS_heart' },
          { text: '肾（膀胱）', link: '/DS_kidney' },
          { text: '肝（胆）', link: '/DS_liver' }
        ]
      },
      {
        text: '五行理论',
        items: [
          { text: '表里关系', link: '/five_outside&inner' },
          { text: '相生关系', link: '/five_feed' },
          { text: '相克关系', link: '/five_balance' },
          { text: '别通关系', link: '/five_other' },
          { text: '三角关系', link: '/five_triangle' },
          { text: '四边关系', link: '/five_foursides' },
          { text: '一统天下', link: '/five_unitary' },
          { text: '如何运用五行理论', link: '/five_howToUse' },
          { text: '五行理论应用实例', link: '/five_example' }
        ]
      },
      {
        text: '治病总结',
        items: [
          { text: '病在哪里', link: '/cureSummary' },
          { text: '治哪里', link: '/cureSummary' },
          { text: '怎么治', link: '/cureSummary' }
        ]
      },
      {
        text: '附录',
        items: [
          { text: '经筋十大要穴', link: '/addendum_tendonPoints10' },
          { text: '传统经脉要穴', link: '/addendum_meridianPoints' },
          { text: '常用药', link: '/addendum_commonlyUsedDrugs' },
          { text: '宗筋疗法讲义', link: '/addendum_zongJinLiaoFaJiangYi' },
          { text: '宗筋疗法笔记一', link: '/addendum_zongJinLiaoFaBiJi1' },
          { text: '炙绳笔记', link: '/addendum_z_jiusheng' },
          { text: '生气的害处', link: '/addendum_shengqi' },
          { text: '按摩经', link: '/addendum_anmojing' }
        ]
      },
      {
        text: '佛经',
        items: [
          { text: '金刚经', link: '/1_fo_jinGangJing' },
          { text: '金刚经Judy注', link: '/1_fo_jinGangJingJudy' },
          { text: '妙法莲华经', link: '/1_fo_lianHuaJing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
