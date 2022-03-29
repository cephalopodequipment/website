import type { AppProps } from 'next/app';
import Head from 'next/head';
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
          <DeepSeaAnimations />

          <NetworkSelector
            isOpen={isShowingNetworkSelector}
            setIsOpen={setIsShowingNetworkSelector}
          />

          <Box rowGap="xxloose">
            <Box
              alignItems="center"
              as="header"
              backgroundColor={
                isScrolling || isShowingMenu ? 'blurred' : 'blurred--off'
              }
              left={0}
              right={0}
              top={0}
              paddingY={isScrollingAndNotShowingMenu ? 'xtight' : 'tight'}
              position="fixed"
              responsiveProps={{
                phoneOnly: {
                  paddingX: 'normal',
                },
                phoneOrTablet: {
                  textAlign: 'left',
                },
                tabletOnly: {
                  bottom: isShowingMenu ? 0 : undefined,
                  alignItems: 'flex-start',
                },
                tabletOrLarger: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingX: '10vw',
                },
                bigDesktopOrLarger: {
                  paddingX: '20vw',
                },
              }}
              transitionDuration="normal"
              transitionProperty={['backdrop-filter', 'padding']}
              transitionTimingFunction="linear"
              zIndex="5000"
            >
              <Anchor
                href="/"
                position="relative"
                variant="subtle"
                zIndex="5000"
                onClick={hideMenu}
              >
                <Text
                  fontSize={isScrollingAndNotShowingMenu ? 'small' : 'normal'}
                  transitionDuration="normal"
                  transitionProperty="font-size"
                  transitionTimingFunction="ease-in-out"
                  variant="logo"
                >
                  Cephalopod
                  <br />
                  Equipment
                </Text>
              </Anchor>

              <HamburgerButton
                iconName="bars"
                isVisible={!isShowingMenu}
                onClick={showMenu}
              />

              <HamburgerButton
                iconName="xmark"
                isVisible={isShowingMenu}
                onClick={hideMenu}
              />

              {isShowingMenu && (
                <Box
                  responsiveProps={{
                    tabletOrLarger: {
                      display: 'none',
                    },
                  }}
                >
                  <Fish
                    left="-20vw"
                    position="fixed"
                    top="95vh"
                    zIndex={5000}
                  />
                  <PeekingCephalopod
                    right={0}
                    position="fixed"
                    top="30vh"
                    transform="scaleX(-1)"
                    zIndex={5000}
                  />
                  <BobbingBubble
                    left={0}
                    position="fixed"
                    top="8vh"
                    transform="translateX(-60%)"
                    variant={3}
                    zIndex={5000}
                  />
                </Box>
              )}

              <Box as="nav">
                <Box
                  as="ul"
                  fontSize={isScrollingAndNotShowingMenu ? 'xsmall' : 'small'}
                  responsiveProps={{
                    phoneOnly: {
                      bottom: 0,
                      height: '100vh',
                      left: 0,
                      paddingTop: '16vh',
                      top: 0,
                    },
                    phoneOrTablet: {
                      backgroundColor: 'blue',
                      pointerEvents: isShowingMenu ? 'all' : 'none',
                      position: 'absolute',
                      right: 0,
                      transform: `translateX(${isShowingMenu ? '0' : '100%'})`,
                      zIndex: 4999,
                    },
                    tabletOnly: {
                      borderBottomLeftRadius: 'small',
                      borderTopLeftRadius: 'small',
                      overflow: 'hidden',
                      top: 'calc(var(--whiteSpace--loose) * 1.8)',
                    },
                    desktopOrLarger: {
                      alignItems: 'center',
                      columnGap: 'normal',
                      display: 'flex',
                    },
                  }}
                  transitionProperty={['font-size', 'transform']}
                  transitionTimingFunction="ease-in-out"
                  whiteSpace="nowrap"
                  onClick={hideMenu}
                >
                  {menuItems.map((link) => (
                    <Anchor
                      href={link.href}
                      key={link.label}
                      variant="subtle"
                      transitionProperty="padding"
                      responsiveProps={{
                        phoneOnly: {
                          height: '21vh',
                        },
                        tabletOnly: {
                          paddingX: 'loose',
                          paddingY: 'normal',
                        },
                        phoneOrTablet: {
                          alignItems: 'center',
                          backgroundColor: link.backgroundColor as Color,
                          fontName: 'body--bold',
                          fontSize: 'normal',
                          justifyContent: 'center',
                        },
                      }}
                      onClick={link.onClick}
                    >
                      {link.label}
                    </Anchor>
                  ))}
                  <li>
                    <Button
                      variant="primary"
                      responsiveProps={{
                        phoneOnly: {
                          height: '21vh',
                        },
                        phoneOrTablet: {
                          alignItems: 'center',
                          borderRadius: 0,
                          fontSize: 'normal',
                          justifyContent: 'center',
                          width: '100%',
                        },
                        desktopOrLarger: {
                          fontSize: isScrollingAndNotShowingMenu
                            ? 'xsmall'
                            : 'small',
                          paddingX: isScrollingAndNotShowingMenu
                            ? 'normal'
                            : 'loose',
                          paddingY: isScrollingAndNotShowingMenu
                            ? 'tight'
                            : 'normal',
                        },
                      }}
                      transitionDuration="normal"
                      transitionProperty={['font-size', 'padding', 'transform']}
                      transitionTimingFunction="ease-in-out"
                      onClick={delegateToUs}
                    >
                      Delegate To Us
                    </Button>
                  </li>
                </Box>
              </Box>
            </Box>

            <Box as="main" rowGap="xxloose" zIndex="1000">
              <Component
                siteActions={{ delegateToUs, showNetworkSelector }}
                {...pageProps}
              />
            </Box>

            <PageSection
              as="footer"
              rowGap="loose"
              textAlign="left"
              zIndex="100"
            >
              <Box
                rowGap="loose"
                responsiveProps={{
                  tabletOrLarger: {
                    columnGap: 'xloose',
                    columns: ['2fr', '1fr'],
                    justifyContent: 'space-between',
                  },
                }}
              >
                <Box rowGap="normal">
                  <Text variant="logo">
                    Cephalopod
                    <br />
                    Equipment
                  </Text>
                  <Text as="p">
                    We work with our partners at{' '}
                    <Anchor
                      href="http://informal.systems/about"
                      target="_blank"
                    >
                      Informal Systems
                    </Anchor>{' '}
                    to <Text whiteSpace="nowrap">build the Interchain.</Text>
                  </Text>
                </Box>

                <Box
                  as="nav"
                  rowGap="normal"
                  whiteSpace="nowrap"
                  responsiveProps={{
                    desktopOrLarger: {
                      alignItems: 'flex-end',
                    },
                  }}
                >
                  <Text variant="heading--3">Social Media</Text>
                  <Box as="ul" columnGap="tight">
                    <li>
                      <Anchor href="#" variant="subtle">
                        <Icon name="twitter" variant="brands" />
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="#" variant="subtle">
                        <Icon name="discord" variant="brands" />
                      </Anchor>
                    </li>
                    <li>
                      <Anchor href="#" variant="subtle">
                        <Icon name="globe" variant="solid" />
                      </Anchor>
                    </li>
                  </Box>
                </Box>
              </Box>
              <Box
                as="nav"
                borderTop="hairline"
                borderTopColor="white--30"
                fontSize="small"
                justifyContent="space-between"
                paddingY="loose"
              >
                <Box as="ul" columnGap="normal">
                  {menuItems.map((menuItem) => (
                    <li key={menuItem.label}>
                      <Anchor
                        variant="subtle"
                        href={menuItem.href}
                        onClick={menuItem.onClick}
                      >
                        {menuItem.label}
                      </Anchor>
                    </li>
                  ))}
                </Box>
                <Box as="ul" columnGap="normal">
                  <li>
                    <Anchor
                      variant="subtle"
                      href="https://docs.google.com/document/d/1GvxlxBJO42YJ3xDUzAopQsJ7IVWBTnwWhV5S9rOYUao/edit#"
                      target="_blank"
                    >
                      Terms of Service
                    </Anchor>
                  </li>
                </Box>
              </Box>
            </PageSection>
          </Box>
        </Box>
      </BreakpointProvider>
    </>
  );
}

export default MyApp;
