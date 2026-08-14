import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Plugin Center',
  description: '插件下载、安装说明与更新日志',
  base: '/plugin-center/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '股票基金管家', link: '/plugins/stock-funds-extend' },
      { text: '插件', link: '/plugins/' }
    ],
    sidebar: {
      '/plugins/': [
        {
          text: '插件',
          items: [
            { text: '插件列表', link: '/plugins/' },
            { text: '股票基金管家', link: '/plugins/stock-funds-extend' }
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
      message: '插件下载、安装与版本记录',
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
