const config = {
  title: "Aegisora Docs",
  tagline: "Zero-trust security and governance for autonomous AI agents.",
  favicon: "img/favicon.svg",

  url: "https://docs.aegisora.ai",
  baseUrl: "/",
  trailingSlash: false,

  organizationName: "aegisora-ai",
  projectName: "aegisora-docs",

  onBrokenLinks: "throw",


  markdown: {
    mermaid: true
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          showLastUpdateAuthor: false
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false
    },

    navbar: {
      title: "AEGISORA",
      items: [
        {
          label: "Docs",
          to: "/"
        },
        {
          label: "Core",
          href: "https://github.com/aegisora-ai/aegisora",
          position: "right"
        },
        {
          label: "GitHub",
          href: "https://github.com/aegisora-ai/aegisora-docs",
          position: "right"
        }
      ]
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            { label: "Getting Started", to: "/getting-started/" },
            { label: "Architecture", to: "/architecture/" },
            { label: "Security", to: "/security/" },
            { label: "Integrations", to: "/integrations/" }
          ]
        },
        {
          title: "Ecosystem",
          items: [
            { label: "Core", href: "https://github.com/aegisora-ai/aegisora" },
            { label: "Docs", href: "https://github.com/aegisora-ai/aegisora-docs" }
          ]
        }
      ],
      copyright: "Aegisora AI â€” Open-source runtime security and governance."
    },

    prism: {
      additionalLanguages: ["bash", "json", "powershell", "typescript"]
    },

    mermaid: {
      theme: {
        light: "neutral",
        dark: "dark"
      }
    }
  }
};

module.exports = config;
