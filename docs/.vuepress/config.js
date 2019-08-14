const path = require('path')

module.exports = {
    base: '/zhui-vue/',
    title: 'Zhui-Vue',
    description: 'A Vue Component Library',
    head: [
      ['link', { rel: 'icon', href: '/favicons.ico' }]
    ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: 'https://github.com/sxyuanfeng/zhui-vue' },
        { text: 'React', link: 'https://github.com/zhui-team/zhui' },
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
            '/views/components/loading/',
            '/views/components/tag/',
            '/views/components/card/',
          ]
        },
        {
          title: '配色',
          children: [
            '/views/design/color/',
          ]
        },
      ],
      lastUpdated: 'Last Updated',
    }
  }