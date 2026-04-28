import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Gnosis: The Sunken Gates",
  description: "Official Technical & Lore Wiki",
  
  // Megmondjuk neki, hogy a docs mappában vannak a fájlok
  srcDir: '.', 

  themeConfig: {
    // Felső navigációs sáv
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lore', link: '/lore' }
    ],

    // BAL OLDALI OLDALSÁV (Sidebar) -> Itt építjük fel a menüt
    sidebar: [
      {
        text: 'Concepts',
        items: [
          { text: 'Main Lore / Worldview', link: '/lore' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Levels Reference', link: '/levels' },
          { text: 'Item & Economy', link: '/items' },
          { text: 'Technical Architecture', link: '/technical' }
        ]
      }
    ],

    // Kereső funkció (helyi)
    search: {
      provider: 'local'
    },

    // GitHub link a jobb felső sarokba
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyon1255/Gnosis-Wiki' }
    ],

    footer: {
      message: 'Gnosis MMORPG Project Documentation',
      copyright: 'Copyright © 2024'
    }
  }
})