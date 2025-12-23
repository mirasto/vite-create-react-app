// postcss.config.js
export default {
  plugins: {
    // 1. Покращує імпорти (якщо раптом використовуєш звичайні .css файли)
    'postcss-import': {},

    // 2. Групує медіа-запити (дуже корисно для чистоти коду)
    'postcss-sort-media-queries': {
      sort: 'mobile-first', // або 'desktop-first' залежно від твого підходу
    },

    // 3. Твій поточний нормалайзер
    'postcss-normalize': {},

    // 4. Сучасні фічі + автопрефікси
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009', // підтримка сучасного flexbox
      },
      features: {
        'custom-properties': false, // Vite/Sass і так з цим справляються
      },
    },
  },
};
