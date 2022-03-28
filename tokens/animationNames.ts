import { BoxPropsWithConfigs } from '../components/Box.types';

export const animationNames = ({
  animationDuration,
}: BoxPropsWithConfigs = {}) => ({
  amble: {
    keyframes: `
      {
        0% {
          transform: translateX(-20vw);
        }
        25% {
          transform: translateX(20vw);
        }
        50% {
          transform: translateX(45vw);
        }
        75% {
          transform: translateX(70vw);
        }
        100% {
          transform: translateX(110vw);
        }
      }
    `,
    cssObject: {
      animationDirection: 'forwards',
      animationDuration: animationDuration ?? '20s',
      animationIterationCount: 'infinite',
      animationName: 'amble',
      animationTimingFunction: 'ease-in-out',
    },
  },
  blink: {
    keyframes: `
      {
        0%, 40% {
          opacity: 1;
        }
        60%, 100% {
          opacity: 0;
        }
      }
    `,
    cssObject: {
      animationDirection: 'alternate',
      animationDuration: animationDuration ?? '0.4s',
      animationIterationCount: 'infinite',
      animationName: 'blink',
      animationTimingFunction: 'ease-in-out',
    },
  },
  peek: {
    keyframes: `
      {
        0% {
          transform: translateX(100%);
        }
        10%, 40% {
          transform: translateX(35%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `,
    cssObject: {
      animationDirection: 'forwards',
      animationDuration: animationDuration ?? '10s',
      animationIterationCount: 'infinite',
      animationName: 'peek',
      animationTimingFunction: 'ease-in-out',
    },
  },
  slightRotation: {
    keyframes: `
      {
        0% {
          transform: rotate(-1deg);
        }
        100% {
          transform: rotate(1deg);
        }
      }
    `,
    cssObject: {
      animationDirection: 'alternate',
      animationDuration: animationDuration ?? '6s',
      animationIterationCount: 'infinite',
      animationName: 'slightRotation',
      animationTimingFunction: 'ease-in-out',
    },
  },
  swim: {
    keyframes: `
      {
        0% {
          transform: rotate3d(0, 1, 0, 30deg);
        }
        10% {
          transform: rotate3d(0, 1, 0, -30deg);
        }
        20% {
          transform: rotate3d(0, 1, 0, 30deg);
        }
        30% {
          transform: rotate3d(0, 1, 0, -30deg);
        }
        40% {
          transform: rotate3d(0, 1, 0, 30deg);
        }
        50% {
          transform: rotate3d(0, 1, 0, -30deg);
        }
        75% {
          transform: rotate3d(0, 1, 0, -10deg);
        }
        100% {
          transform: rotate3d(0, 1, 0, 30deg);
        }
      }
    `,
    cssObject: {
      animationDirection: 'forwards',
      animationDuration: animationDuration ?? '5s',
      animationIterationCount: 'infinite',
      animationName: 'swim',
      animationTimingFunction: 'ease-in-out',
      perspective: '5000px',
    },
  },
  verticalBobble: {
    keyframes: `
      {
        0% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(10px);
        }
      }
    `,
    cssObject: {
      animationDirection: 'alternate',
      animationDuration: animationDuration ?? '3s',
      animationIterationCount: 'infinite',
      animationName: 'verticalBobble',
      animationTimingFunction: 'ease-in-out',
    },
  },
});
