const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    boxShadow: {
      xs: '0px 2px 8px 0px rgba(21, 26, 29, 0.08)',
      s: '0px 8px 12px 0px rgba(21, 26, 29, 0.08)',
      m: '0px 14px 20px -1px rgba(21, 26, 29, 0.1)',
      l: '0px 18px 28px -4px rgba(21, 26, 29, 0.14)',
      xl: '0px 16px 42px -4px rgba(21, 26, 29, 0.24)',
    },
    colors: {
      brand: {
        green: '#34966D',
        midnight: '#2A343A',
        white: '#FFFFFF',
      },
      secondary: {},
      semantic: {
        info: {
          default: '#0089C2',
          light: '#F2F9FC',
        },
        success: {
          default: '#29823B',
          light: '#F4F9F5',
        },
        warning: {
          default: '#E9A100',
          light: '#FEFAF2',
        },
        error: {
          default: '#DC2020',
          light: '#FDF4F4',
        },
      },
      light: {
        green: '#F5FAF8',
        slate: '#F6F8F9',
        yellow: '#FFFBF4',
      },
      green: {
        1: '#EBF5F0',
        2: '#D6EAE2',
        3: '#C2E0D3',
        4: '#AED5C5',
        5: '#9ACBB6',
        6: '#85C0A7',
        7: '#71B699',
        8: '#5DAB8A',
        9: '#48A17C',
        10: '#34966D',
        11: '#2F8762',
        12: '#2A7857',
      },
      grey: {
        1: '#FDFDFD',
        2: '#EAEBEB',
        3: '#D7D8DA',
        4: '#C3C6C8',
        5: '#B0B4B6',
        6: '#9DA2A4',
        7: '#8A8F93',
        8: '#777D81',
        9: '#646B6F',
        10: '#50595D',
        11: '#3D464C',
        12: '#2A343A',
        13: '#1D2225',
      },
    },
    fontFamily: {
      circular: ['Circular', 'sans-serif', 'Ariel', 'Helvetica', 'Georgia'],
    },
    fontSize: {
      'display-1': [
        '84px',
        {
          lineHeight: '96px',
          letterSpacing: '-2px',
        },
      ],
      'display-2': [
        '72px',
        {
          lineHeight: '80px',
          letterSpacing: '-2px',
        },
      ],
      'display-3': [
        '56px',
        {
          lineHeight: '64px',
          letterSpacing: '-1px',
        },
      ],
      'header-1': [
        '44px',
        {
          lineHeight: '48px',
          letterSpacing: '-1px',
        },
      ],
      'header-2': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '-1px',
        },
      ],
      'header-3': [
        '24px',
        {
          lineHeight: '32px',
          letterSpacing: '-1px',
        },
      ],
      'header-4': [
        '20px',
        {
          lineHeight: '24px',
          letterSpacing: '-1px',
        },
      ],
      'header-5': [
        '18px',
        {
          lineHeight: '24px',
          letterSpacing: '-1px',
        },
      ],
      'header-6': [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '0px',
        },
      ],
      'body-xl': [
        '20px',
        {
          lineHeight: '36px',
          letterSpacing: '0px',
        },
      ],
      'body-l': [
        '18px',
        {
          lineHeight: '32px',
          letterSpacing: '0px',
        },
      ],
      'body-base': [
        '16px',
        {
          lineHeight: '28px',
          letterSpacing: '0px',
        },
      ],
      'body-s': [
        '14px',
        {
          lineHeight: '24px',
          letterSpacing: '0px',
        },
      ],
      'body-xs': [
        '13px',
        {
          lineHeight: '24px',
          letterSpacing: '0px',
        },
      ],
    },
    screens: {
      ms: '320px',
      ml: '375px',
      ts: '640px',
      tl: '768px',
      ds: '1024px',
      dm: '1280px',
      dl: '1536px',
    },
    spacing: {
      1: '1px',
      xs: '2px',
      base: '4px',
      m: '8px',
      l: '12px',
      xl: '16px',
      xl2: '24px',
      xl3: '32px',
      xl4: '48px',
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
