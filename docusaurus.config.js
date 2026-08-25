const config = {
  title: "Aegisora Docs",
  tagline: "Zero-trust security and governance for autonomous AI agents.",
  favicon: "img/favicon.svg",

  url: "https://docs.aegisora.org",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "aegisora-ai",
  projectName: "aegisora-docs",

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "canonical",
        href: "https://docs.aegisora.org/",
      },
    },
  ],

  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/",
        language: ["en"],
        searchBarShortcutKeymap: "mod+k",
        searchResultLimits: 10,
        highlightSearchTermsOnTargetPage: true,
        removeDefaultStopWordFilter: true,
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          lastVersion: "0.1.2",
          versions: {
            "0.1.2": {
              label: "v0.1.2",
              banner: "none",
            },
            current: {
              label: "Next",
              banner: "unreleased",
            },
          },
        },

        blog: false,
        pages: false,

        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "Aegisora, AI agents, agent security, agent governance, zero trust, AI security, LangChain, LangGraph, MCP, policy enforcement",
      },
      {
        name: "description",
        content:
          "Aegisora documentation for zero-trust runtime security and governance for autonomous AI agents.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Aegisora Documentation",
      },
      {
        property: "og:title",
        content: "Aegisora Documentation",
      },
      {
        property: "og:description",
        content:
          "Zero-trust security and governance for autonomous AI agents.",
      },
      {
        property: "og:url",
        content: "https://docs.aegisora.org/",
      },
      {
        property: "og:image",
        content: "https://docs.aegisora.org/img/aegisora-social.svg",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Aegisora Documentation",
      },
      {
        name: "twitter:description",
        content:
          "Zero-trust security and governance for autonomous AI agents.",
      },
      {
        name: "twitter:image",
        content: "https://docs.aegisora.org/img/aegisora-social.svg",
      },
    ],

    image: "img/aegisora-social.svg",

    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "AEGISORA",
      items: [
        {
          label: "Docs",
          to: "/",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          label: "Core",
          href: "https://github.com/aegisora-ai/aegisora",
          position: "right",
        },
        {
          label: "GitHub",
          href: "https://github.com/aegisora-ai/aegisora-docs",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            { label: "Getting Started", to: "/getting-started/" },
            { label: "Architecture", to: "/architecture/" },
            { label: "Security", to: "/security/" },
            { label: "Governance", to: "/governance/" },
          ],
        },
        {
          title: "Build",
          items: [
            { label: "Integrations", to: "/integrations/" },
            { label: "SDK", to: "/sdk/" },
            { label: "API", to: "/api/" },
            { label: "Examples", to: "/examples/" },
          ],
        },
        {
          title: "Project",
          items: [
            { label: "Releases", to: "/releases/" },
            { label: "Contributing", href: "https://github.com/aegisora-ai/aegisora/blob/main/CONTRIBUTING.md" },
            { label: "Security Policy", href: "https://github.com/aegisora-ai/aegisora/blob/main/SECURITY.md" },
            {
              label: "Core Repository",
              href: "https://github.com/aegisora-ai/aegisora",
            },
          ],
        },
      ],
      copyright:
        "Aegisora AI — Open-source runtime security and governance.",
    },

    prism: {
      additionalLanguages: [
        "bash",
        "json",
        "powershell",
        "typescript",
        "python",
      ],
    },

    mermaid: {
      theme: {
        light: "neutral",
        dark: "dark",
      },
    },
  },
};

module.exports = config;