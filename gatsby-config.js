module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'iMat',
    // Main Site Title
    title: `iMat | Discord Developer`,
    // Description that goes under your name in main bio
    description: `Developer of discord bots and knows how to jailbreak consoles.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/imatx`,
    // Optional: LinkedIn account URL
    linkedin: ``,
    // Content of the About Me section
    about: `Hello! My name is Adam, i'm a 14 year old that loves to experiment with discord bots and their functionality! I mainly code using a easy programming language (aoi.js), and i'm planning to learn discord.js in the near future. I like fruits and mainly broccoli marinated in wok sauce (super delicious), my friends (Noah, jayla and misty) are awesome and i'm glad to have them. That's all i got to say!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Greenwood County',
        description:
          '(WIP) ⚠️ A discord server that revolves around the roblox game RoCitizens, that involves custom bots and actual real life stuff that are not mainly used by players. ⚠️',
        link: 'https://discord.gg/aCSYxcXSxT',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'None',
        description: 'For now i do not have any experiences (yet)',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'aoi.js, Basic JavaScript Editing',
      },
      {
        name: 'Databases',
        description: 'MongoDB',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), API design, Malware Protection Design',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
