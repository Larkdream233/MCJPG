export const sidebar = {
    '/lch/press/': [
      {
        text: 'MCJPG組織專欄',
        items: [
          { text: '簡介', link: '/lch/press/' },
          {
            text: '特別欄目',
            base: '/lch/press/特别栏目/',
            collapsed: false,
            items: [
                {text: '2024國慶特輯', link: '2024国庆特辑/'},
            ]
          },
          {
            text: '月刊',
            base: '/lch/press/月刊/',
            collapsed: false,
            items: [
                {text: '2024-11月', link: '2024-11月刊/'},
            ]
          },
        ]
      }
    ]
  }
  
