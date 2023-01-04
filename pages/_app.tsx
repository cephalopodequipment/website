import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import {
  Anchor,
  BobbingBubble,
  Box,
  BreakpointProvider,
  Button,
  DeepSeaAnimations,
  Fish,
  GlobalStyles,
  HamburgerButton,
  Icon,
  NetworkSelector,
  PageSection,
  PeekingCephalopod,
  Text,
} from '../components';
import { Color } from '../components/Box.types';
import { useKeyboardShortcuts } from '../hooks';
import '../public/fonts/svg-with-js.min.css';

const LOGO_HEIGHT = 60;
const LOGO_WIDTH = 150;

export type PageProps = {
  siteActions: {
    delegateToUs: () => void;
    showNetworkSelector: () => void;
  };
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [isShowingNetworkSelector, setIsShowingNetworkSelector] =
    useState(false);

  const isScrollingAndNotShowingMenu = isScrolling && !isShowingMenu;

  useEffect(() => {
    const scrollingElement = window;
    const handleScroll = () => {
      const { scrollTop } = document.documentElement;

      setIsScrolling(scrollTop >= 1);
    };

    scrollingElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollingElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useKeyboardShortcuts({
    escape: () => {
      setIsShowingNetworkSelector(false);
    },
  });

  const delegateToUs = () =>
    window?.open(
      'https://wallet.keplr.app/#/cosmoshub/stake?modal=detail&validator=cosmosvaloper16k579jk6yt2cwmqx9dz5xvq9fug2tekvlu9qdv'
    );

  const showNetworkSelector = () => {
    setIsShowingNetworkSelector(true);
  };

  const hideMenu = () => {
    setIsShowingMenu(false);
  };

  const showMenu = () => {
    setIsShowingMenu(true);
  };

  const menuItems = [
    {
      label: 'Why Stake With Us',
      href: '/#why-stake-with-us',
      backgroundColor: 'blue--bright--50',
    },
    {
      label: 'Team',
      href: '/#meet-the-team',
      backgroundColor: 'blue--bright--30',
    },
    {
      label: 'Networks We Support',
      href: '#',
      onClick: showNetworkSelector,
    },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script
        src="https://kit.fontawesome.com/401fb1e734.js"
        data-auto-replace-svg="nest"
      ></Script>

      <GlobalStyles />

      <BreakpointProvider>
        <Box
          backgroundColor="blue--dark"
          color="white"
          fontName="body"
          fontSize="normal"
          maxWidth="100vw"
          minHeight="100vh"
          overflow="hidden"
          position="relative"
          textAlign="center"
          transitionDuration="long"
          transitionProperty="font-size"
          transitionTimingFunction="ease-in-out"
          responsiveProps={{
            phoneOrTablet: {
              paddingTop: 'xloose',
            },
          }}
        >
          <Box
            alignItems="center"
            left="50%"
            position="absolute"
            rowGap="normal"
            top="50%"
            transform="translate(-50%, -50%)"
            width="50vw"
          >
            <Box>
              Cephalopod Equipment is now renamed to{' '}
              <strong>Informal Staking</strong>. For the past few years we have
              been closely aligned with the team at Informal Systems. As a
              result of our close collaboration, we’ve decided to formalize our
              naming across the blockchains we validate. Our delegators will now
              see us as &ldquo;Informal Systems&rdquo;!
            </Box>

            <Button
              as="a"
              href="https://informal.systems/staking"
              target="_blank"
              textDecoration="none"
            >
              Go to Informal Staking <Icon name="arrow-right" />
            </Button>
          </Box>
        </Box>
      </BreakpointProvider>
    </>
  );
}

export default MyApp;
