// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ingles",
  tagline: "Apuntes de Ingles",
  url: "https://flevatti.github.io",
  baseUrl: "/documentacion_ingles/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Flevatti", // Usually your GitHub org/user name.
  projectName: "documentacion_ingles", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Ingles",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Youtubers",
            items: [
              {
                label: "Francisco Ochoa",
                to: "https://www.youtube.com/@Pacho8a_",
              },
              {
                label: "Inglés con el Güero",
                to: "https://www.youtube.com/@InglesconelGuero",
              },
              {
                label: "Inglés Paso a Paso con Lucie",
                to: "https://www.youtube.com/@inglespasoapasoconlucie/videos",
              },
              {
                label: "DO YOU SPEAK ENGLISH?",
                to: "https://www.youtube.com/@DOYOUSPEAKENGLISH/videos",
              },
              {
                label: "YouTalk TV",
                to: "https://www.youtube.com/@YouTalkTv/videos",
              },
              {
                label: "Miguel Penilla",
                to: "https://www.youtube.com/@InglesFacilconMike/videos",
              },
            ],
          },
          {
            title: "Herramientas",
            items: [
              {
                label: "Forvo.com",
                to: "https://forvo.com/ ",
              },
              {
                label: "WordReference.com",
                to: "https://www.wordreference.com/",
              },
              {
                label: "TheFreeDictionary.com",
                to: "https://www.thefreedictionary.com/",
              },
              {
                label: "Ingles.com",
                to: "https://www.ingles.com/",
              },
              {
                label: "YouTalkTV plus",
                to: "https://youtalkonline.com/",
              },
              {
                label: "Aprender inglés rápido y fácil",
                to: "https://www.aprenderinglesrapidoyfacil.com/",
              },
              {
                label: "Dilo en Inglés",
                to: "https://diloeninglesonline.com/",
              },
              {
                label: "APRENDE LA FONÉTICA INGLESA",
                to: "https://www.abaenglish.com/es/fonetica-inglesa/",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
