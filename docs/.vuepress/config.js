const path = require('path')

module.exports = {
    base: '/zhui-vue/',
    title: 'Zhui',
    description: 'A Vue Component Library',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: 'https://github.com/sxyuanfeng/zhui-vue' },
      ],
      sidebar: [
        {
          title: '介绍',
          children: [
            '/',
            '/views/guide/get-started.md'
          ]
        }, 
        {
          title: '组件',
          children: [
            '/views/components/icon/',
            '/views/components/button/',
            '/views/components/alert/',
          ]
        },
        {
          title: '配色',
          children: [
            '/views/design/color/',
          ]
        },
      ]
    }
  }