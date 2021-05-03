const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://notebook.wahudamon.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://avatars3.githubusercontent.com/u/42200282?s=460&u=cbdde567fe7c7537dbed213ce64add02bed616fd&v=4',
    logoLink: 'https://notebook.wahudamon.com',
    title: 'Notebook',
    githubUrl: 'https://github.com/wahudamon/notebook',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/wahudamon" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>`,
    links: [
      { text: 'Blog', link: 'https://wahudamon.com' }
    ],
    search: {
      enabled: false,
      indexName: 'notebook',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      "/books",
      "/coding",
      "/japanese-popculture",
      "/religion",
      "/writing"
    ],
    collapsedNav: [
      "/books",
      "/coding",
      "/japanese-popculture",
      "/religion",
      "/writing"
    ],
    links: [],
    frontline: false,
    ignoreIndex: true,
    title:
      "knowledge base",
  },
  siteMetadata: {
    title: 'Notebook',
    description: "Bagas' personal notebook as knowledge base",
    ogImage: null,
    docsLocation: 'https://github.com/wahudamon/notebook/tree/master/content',
    favicon: 'https://avatars3.githubusercontent.com/u/42200282?s=460&u=cbdde567fe7c7537dbed213ce64add02bed616fd&v=4'
    // 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg,'
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Bagas Notebook',
      short_name: 'BagasNotebook',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
