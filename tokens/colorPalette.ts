const corePalette = {
  'banner': {
    backdropFilter: `blur(20px)`,
    background: `linear-gradient(315deg, rgba(27, 5, 120, 0.5) 29.69%, rgba(63, 18, 254, 0.5) 87.5%)`,
  },
  'blue': '#140A6F',
  'blue--bright': '#3F18FE',
  'blue--bright--10': 'rgba(63, 24, 254, 0.1)',
  'blue--bright--20': 'rgba(63, 24, 254, 0.2)',
  'blue--bright--30': 'rgba(63, 24, 254, 0.3)',
  'blue--bright--40': 'rgba(63, 24, 254, 0.4)',
  'blue--bright--50': 'rgba(63, 24, 254, 0.5)',
  'blue--bright--60': 'rgba(63, 24, 254, 0.6)',
  'blue--bright--70': 'rgba(63, 24, 254, 0.7)',
  'blue--bright--80': 'rgba(63, 24, 254, 0.8)',
  'blue--bright--90': 'rgba(63, 24, 254, 0.9)',
  'blue--dark': '#050121',
  'blurred': {
    backdropFilter: 'blur(10px) brightness(60%)',
  },
  'blurred--off': {
    backdropFilter: 'blur(0) brightness(100%)',
  },
  'border': '#1B0578',
  'green--bright': '#37FF9F',
  'green--dark': 'rgba(51, 153, 94, 0.5)',
  'red': '#FD595E',
  'red--dark': 'rgba(182, 22, 22, 0.5)',
  'teal--bright': '#26FDCF',
  'transparent': 'transparent',
  'violet': '#CDC1FF',
  'white': 'rgba(255, 255, 255, 1)',
  'white--30': 'rgba(255, 255, 255, 0.3)',
  'white--50': 'rgba(255, 255, 255, 0.5)',
  'white--70': 'rgba(255, 255, 255, 0.7)',
};

const colorSwatches = {
  'abstain': corePalette['violet'],
  'gradient': {
    backgroundImage:
      'linear-gradient(220deg, #8FFFF6 0%, #5838FF 70%, #2A25FF 100%)',
    boxShadow: `-20px 25px 30px -20px ${corePalette['blue--bright--50']}`,
  },
  'link': corePalette['teal--bright'],
  'link--hovered': corePalette['teal--bright'],
  'highlighted': corePalette['teal--bright'],
};

export const colorPalette = {
  ...corePalette,
  ...colorSwatches,
};
