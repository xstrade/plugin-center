import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'XSTrade Project Center',
  description: 'XSTrade 项目与工具发布中心',
  base: '/plugin-center/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/plugins/' },
      { text: 'GitHub', link: 'https://github.com/xstrade' }
    ],
    sidebar: {
      '/plugins/': [
        {
          text: '项目',
          items: [
            { text: '项目列表', link: '/plugins/' },
            { text: '股票基金管家', link: '/plugins/stock-funds-extend' },
            { text: '股票基金助手', link: '/plugins/stock-fund-assistant' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xstrade/plugin-center' }
    ],
    editLink: {
      pattern: 'https://github.com/xstrade/plugin-center/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      message: '项目发布、下载与版本记录',
      copyright: 'Copyright © 2026 xstrade'
    },
    lastUpdated: {
      text: '最后更新'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '本页目录'
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题'
  }
})
