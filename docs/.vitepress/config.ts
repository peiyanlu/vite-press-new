import path from 'path'
import { fileURLToPath } from 'url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { defineConfig } from 'vitepress'

import { getNav, getSidebar } from './config/menu'
import { algolia } from './config/search'

const BASE_URL = '/vite-press/' as const

const withBase = (path: string): string => `${ BASE_URL }${ path }`.replace(/\/+/g, '/')

export default defineConfig({
  title: '笔记',
  titleTemplate: '开发笔记',
  description: '小路的开发笔记',
  head: [
    [ 'link', { rel: 'icon', href: withBase('/logo.svg') } ],
  ],
  lang: 'zh-CN',
  base: BASE_URL,
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '开发笔记',
    i18nRouting: true,
    outline: {
      level: 'deep',
      label: '快速导航',
    },
    nav: getNav(),
    aside: true,
    sidebar: getSidebar(),
    editLink: {
      pattern: 'https://github.com/peiyanlu/vite-press/edit/main/docs/:path',
      text: `编辑此页`,
    },
    docFooter: {
      prev: '上一节',
      next: '下一节',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${ new Date().getFullYear() } YanLuPei`,
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    darkModeSwitchLabel: '外观',
    langMenuLabel: '切换语言',
    socialLinks: [
      {
        icon: {
          svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="currentColor"></path></svg>',
        },
        link: 'https://gitee.com/peiyanlu/vite-press',
      },
      { icon: 'github', link: 'https://github.com/peiyanlu/vite-press/' },
    ],
    search: algolia,
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
    },
    // zh: {
    //   label: '中文d',
    //   lang: 'zh-CN',
    //   link: '/zh-CN/'
    // }
  },
  vite: {
    resolve: {
      alias: [
        {
          find: '@config',
          replacement: fileURLToPath(
            new URL('./config', import.meta.url),
          ),
        },
      ],
    },
    plugins: [
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [ path.resolve(process.cwd(), 'docs/public/icons') ],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        /**
         * 自定义插入位置
         * @default: body-last
         */
        // inject?: 'body-last' | 'body-first'
        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        // customDomId: '__svg__icons__dom__',
      }),
    ],
  },
})
