export default {
  base: '/ui/',
  title: 'velvet-UI',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [{ icon: 'github', link: 'https://github.com/jeddygong/velvet' }],
    editLinks: true,
    editLink: {
      pattern: 'https://github.com/jeddygong/velvet/main/docs/:path',
      text: '为此页提供修改建议',
    },
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/components/button/' },
    ],
    // 侧边栏
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            {
              text: 'Button按钮',
              link: '/components/button/',
            },
          ],
        },
      ],
    },
  },
};
