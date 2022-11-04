import {DefaultTheme, defineConfig, HeadConfig} from "vitepress";
import {monochrome} from "./icon";

const BASE_URL = '/vite-press/'

const getHead = (): HeadConfig[] => [
  ['link', {rel: 'icon', href: `${BASE_URL}logo.svg`}]
];

const getNav = (): DefaultTheme.NavItem[] => [
  {
    text: '前端',
    items: [
      {
        text: '构建工具',
        items: [
          {
            text: 'Rollup',
            link: '/frontend/rollup/',
          },
          {
            text: 'Webpack',
            link: '/frontend/webpack/'
          },
        ]
      },
      {
        // Title for the section.
        text: 'Section A Title',
        items: [
          { text: 'Section A Item A', link: '...' },
          { text: 'Section B Item B', link: '...' }
        ]
      }
    ],
    activeMatch: '^/frontend/'
  },
  {
    text: '后端',
    items: [],
    activeMatch: '^/backend/'
  },
];

const getSidebar = (): DefaultTheme.Sidebar => ({
  '/frontend/rollup/': [
    {
      text: 'Rollup',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: '构建JS库', link: '/frontend/rollup/rollup-lib'},
        {text: '构建TS库', link: '/frontend/rollup/rollup-ts'},
      ]
    }
  ],
  '/frontend/webpack/': [
    {
      text: 'Webpack',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: '构建ICON库', link: '/frontend/webpack/webpack-icon'},
      ]
    }
  ]
});


const config = defineConfig({
  lang: "zh-CN",
  title: "开发笔记",
  titleTemplate: '开发笔记',
  description: "小路的开发笔记",
  base: BASE_URL,
  head: getHead(),
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '开发笔记',
    outline: 'deep',
    outlineTitle: '快速导航',
    nav: getNav(),
    sidebar: getSidebar(),
    editLink: {
      pattern: 'https://gitee.com/peiyanlu/vite-press/tree/docs/docs/:path',
      text: '在 gitee 编辑此页'
    },
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${new Date().getFullYear()} Yanlu Pei`
    },
    lastUpdatedText: '上次更新',
    socialLinks: [
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: monochrome.gitee
        },
        link: 'https://gitee.com/peiyanlu/vite-press/tree/docs/'
      }
    ]
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
})

export default config