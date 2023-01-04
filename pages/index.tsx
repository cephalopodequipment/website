import startCase from 'lodash/startCase';
import Head from 'next/head';
import Image from 'next/image';
import {
  Anchor,
  Banner,
  BobbingBox,
  Box,
  Button,
  Heading,
  Icon,
  NetworkGrid,
  PageSection,
  Text,
  TypeWriter,
} from '../components';
import { Color } from '../components/Box.types';
import { BrandIconName } from '../components/Icon.types';
import { stakingReasons } from '../data/staking-reasons';
import { teamMembers } from '../data/teamMembers';
import { Vote } from './networks/[slug]';
import { PageProps } from './_app';

const Home = ({ siteActions }: PageProps) => {
  return (
    <>
      <Head>
        <title>Informal Staking</title>
      </Head>

      <PageSection
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        paddingTop="xloose"
        rowGap="xloose"
      >
        <Box
          alignItems="center"
          as="section"
          justifyContent="center"
          rowGap="loose"
        >
          <Heading variant="primary" position="relative">
            <Box zIndex="10">
              Innovators of{' '}
              <Box
                responsiveProps={{
                  desktopOrLarger: {
                    display: 'block',
                    whiteSpace: 'nowrap',
                  },
                }}
              >
                Interchain Connectivity
              </Box>
            </Box>
            <Box
              left="50%"
              position="absolute"
              top={0}
              transform="translate(-50%, -50%)"
              zIndex="1"
            >
              <BobbingBox>
                <Image
                  alt="Cephalopod"
                  src="/img/cephalopod-hero.png"
                  width={378}
                  height={323}
                />
              </BobbingBox>
            </Box>
          </Heading>

          <Box
            responsiveProps={{
              tabletOrLarger: {
                maxWidth: '50vw',
              },
              bigDesktopOrLarger: {
                maxWidth: '30vw',
              },
            }}
          >
            We <strong>build</strong>, <strong>operate</strong>, and{' '}
            <strong>promote</strong> critical interchain infrastructure powering
            the Cosmos <Text whiteSpace="nowrap">ecosystem and beyond.</Text>
          </Box>

          <Button variant="primary" onClick={siteActions.delegateToUs}>
            Delegate To Us
          </Button>
        </Box>

        <Banner>
          We voted <Vote type="yes" /> to Cosmos Hub Proposal #65.{' '}
          <Anchor
            color="white"
            href="https://www.mintscan.io/cosmos/proposals/65"
            target="_blank"
          >
            Learn more
          </Anchor>
          <Box
            alignItems="center"
            backgroundColor="green--bright"
            borderColor="blue--bright"
            borderRadius="circle"
            color="blue--bright"
            height="2rem"
            justifyContent="center"
            left={0}
            position="absolute"
            top={0}
            transform="translate(-50%, -50%)"
            width="2rem"
          >
            <Icon name="check" />
          </Box>
        </Banner>
      </PageSection>

      <PageSection
        justifyContent="center"
        rowGap="loose"
        id="why-stake-with-us"
      >
        <Text variant="heading--2">
          Why Stake <Text whiteSpace="nowrap">With Us?</Text>
        </Text>

        <Box
          rowGap="normal"
          textAlign="left"
          responsiveProps={{
            desktopOrLarger: {
              columnGap: 'normal',
              columns: 3,
            },
          }}
        >
          {stakingReasons.map((stakingReason, index) => (
            <Box
              backgroundColor={
                ['blue--bright--30', 'blue--bright--20', 'blue--bright--10'][
                  index
                ] as Color
              }
              border="normal"
              borderRadius="normal"
              flexDirection="column"
              justifyContent="space-between"
              key={stakingReason.label}
              paddingX="calc(var(--whiteSpace--normal) * 1.2)"
              paddingY="tight"
              rowGap="normal"
            >
              <Box paddingY="normal" rowGap="normal">
                <Text variant="heading--3">{stakingReason.label}</Text>
                <Text as="p">{stakingReason.blurb}</Text>
              </Box>
              <Box as="ul" whiteSpace="nowrap">
                {stakingReason.links.map((link, index) => (
                  <li key={link.label}>
                    <Anchor
                      borderTop={index !== 0 ? 'hairline' : undefined}
                      borderTopColor={index !== 0 ? 'blue--dark' : undefined}
                      columnGap="xtight"
                      href={link.url}
                      paddingY="tight"
                      target="_blank"
                      textDecoration="underline"
                      variant="subtle"
                    >
                      <Icon name="arrow-up-right" />
                      <span>{link.label}</span>
                    </Anchor>
                  </li>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </PageSection>

      <PageSection justifyContent="center" minHeight="100vh" rowGap="normal">
        <Text variant="heading--2">
          Validating With{' '}
          <TypeWriter
            numCycles={1}
            values={[
              { value: 'Networks', color: 'red' },
              { value: 'Humans', color: 'teal--bright' },
            ]}
          />{' '}
          We Trust
        </Text>

        <Text as="p">
          Contribute to the security of these networks by delegating to Informal
          Staking, and{' '}
          <Text whiteSpace="nowrap">earn rewards for doing so.</Text>
        </Text>

        <NetworkGrid />
      </PageSection>

      <PageSection rowGap="normal" textAlign="left" id="meet-the-team">
        <Text variant="heading--2">Meet the Team</Text>

        <Text as="p">
          We connect the Interchain in close collaboration with our partners at
          Informal Systems.
        </Text>

        <Box
          responsiveProps={{
            tabletOrLarger: {
              columns: 2,
              gap: 'xtight',
              position: 'relative',
            },
            desktopOrLarger: {
              columns: 4,
            },
          }}
        >
          {teamMembers.map(({ bio, name, socials }) => (
            <Box
              cursor="pointer"
              data-team-member
              key={name}
              hoverProps={{
                zIndex: '100',
              }}
            >
              <BobbingBox textAlign="center">
                <Image
                  alt={`${name}`}
                  height={370}
                  src={`/img/portraits/${name}.png`}
                  width={370}
                />
                <Box
                  color="violet"
                  fontSize="small"
                  responsiveProps={{
                    tabletOrLarger: {
                      backgroundColor: 'blue--dark',
                      borderRadius: 'small',
                      bottom: 0,
                      left: '50%',
                      paddingX: 'tight',
                      paddingY: 'xtight',
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)',
                      whiteSpace: 'nowrap',
                    },
                  }}
                >
                  {startCase(name.replace('-', ' '))}
                </Box>
                <Box
                  fontSize="xsmall"
                  textAlign="left"
                  customSelectorProps={{
                    '[data-team-member]:hover &': {
                      opacity: 1,
                      pointerEvents: 'all',
                    },
                  }}
                  responsiveProps={{
                    phoneOnly: {
                      rowGap: 'tight',
                    },
                    tabletOrLarger: {
                      backgroundColor: 'blue',
                      borderRadius: 'small',
                      left: '50%',
                      opacity: 0,
                      pointerEvents: 'none',
                      position: 'absolute',
                      top: '100%',
                      transform: 'translateX(-50%)',
                      transitionProperty: 'opacity',
                      width: 300,
                    },
                  }}
                >
                  <Box
                    paddingY="tight"
                    responsiveProps={{
                      tabletOrLarger: {
                        paddingX: 'normal',
                      },
                    }}
                  >
                    {bio}
                  </Box>
                  <Box
                    borderTop="hairline"
                    borderTopColor="white--30"
                    columnGap="normal"
                    paddingY="tight"
                    responsiveProps={{
                      tabletOrLarger: {
                        paddingX: 'normal',
                      },
                    }}
                  >
                    {socials.map((social) => (
                      <Anchor
                        href={social.href}
                        key={social.href}
                        target="_blank"
                        variant="subtle"
                      >
                        <Icon
                          name={social.icon as BrandIconName}
                          variant="brands"
                        />{' '}
                        {social.label}
                      </Anchor>
                    ))}
                  </Box>
                </Box>
              </BobbingBox>
            </Box>
          ))}
        </Box>
      </PageSection>
    </>
  );
};

export default Home;
