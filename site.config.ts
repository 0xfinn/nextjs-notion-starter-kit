import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '33066ae9b02d454ea17461333e59034c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Yaavi Website',
  domain: 'yaavi.me',
  author: 'Yaavi Sun',

  // open graph metadata (optional)
  description: 'Yaavi 的个人网站，博客文章来自于 Notion 笔记。',

  // social usernames (optional)
  // twitter: '',
  github: 'vsme',
  zhihu: 'yaavi',
  bilibili: '164997305',
  // linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '人世间',
      pageId: 'c063d4771bdc4d899f3dbb14b5e51188'
    },
    {
      title: '技术',
      pageId: '1fc08bb5c3bc4395bdfa2e0fbc1caa62'
    },
    {
      title: '关于',
      pageId: 'be7166fa2a2e46f2bb1e8a16290cf616'
    }
  ]
})
