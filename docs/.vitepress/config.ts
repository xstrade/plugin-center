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
      { text: '插件', link: '/plugins/' },
      { text: '更新日志', link: '/changelog/' },
      { text: '发布指南', link: '/guide/release' }
    ],
    sidebar: {
      '/plugins/': [
        {
          text: '插件',
          items: [
            { text: '插件列表', link: '/plugins/' },
            { text: '插件页面模板', link: '/plugins/template' }
          ]
        }
      ],
      '/changelog/': [
        {
          text: '更新日志',
          items: [
            { text: '日志索引', link: '/changelog/' },
            { text: '日志模板', link: '/changelog/template' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '维护指南',
          items: [
            { text: '发布新版本', link: '/guide/release' }
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
