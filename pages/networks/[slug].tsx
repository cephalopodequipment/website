import { useRouter } from 'next/router';
import {
  Anchor,
  Box,
  Button,
  Icon,
  NetworkCard,
  NetworkPanel,
  PageSection,
  Text,
  TextInput,
} from '../../components';
import { Color } from '../../components/Box.types';
import { IconName } from '../../components/Icon.types';
import { networks, VoteType } from '../../data/networks';
import { PageProps } from '../_app';

const voteIconMap: {
  [K in VoteType]: {
    icon: IconName;
    color: Color;
  };
} = {
  'yes': {
    icon: 'check-to-slot',
    color: 'teal--bright',
  },
  'no': {
    icon: 'xmark-to-slot',
    color: 'red',
  },
  'no-with-veto': {
    icon: 'octagon-exclamation',
    color: 'red',
  },
  'abstain': {
    icon: 'circle-minus',
    color: 'violet',
  },
};

type VoteProps = {
  type: VoteType;
};

export const Vote = ({ type, ...props }: VoteProps) => (
  <Text
    color={voteIconMap[type].color}
    variant="vote"
    whiteSpace="nowrap"
    {...props}
  >
    <Icon name={voteIconMap[type].icon} variant="solid" /> {type}
  </Text>
);

const NetworkPage = ({ siteActions }: PageProps) => {
  const router = useRouter();
  const { slug } = router.query;
  const networkIndex = networks.findIndex((network) => network.slug === slug);
  const networkObject = networks[networkIndex];
  const previousNetworkObject =
    networks[networkIndex - 1] ?? networks[networks.length - 1];
  const nextNetworkObject = networks[networkIndex + 1] ?? networks[0];

  return (
    <PageSection
      rowGap="xxloose"
      textAlign="left"
      responsiveProps={{
        tabletOnly: {
          paddingTop: 'loose',
        },
        desktopOrLarger: {
          paddingTop: 'xxloose',
        },
      }}
    >
      <Box rowGap="loose">
        <Box
          rowGap="loose"
          responsiveProps={{
            desktopOrLarger: {
              columnGap: 'xloose',
              columns: ['3fr', '2fr'],
              display: 'grid',
            },
          }}
        >
          <Box rowGap="loose">
            <Box rowGap="normal">
              <Anchor
                color="white--70"
                fontSize="small"
                href="#"
                variant="subtle"
                onClick={siteActions.showNetworkSelector}
              >
                All Networks <Icon name="grid" />
              </Anchor>
              <Text variant="heading--2">{networkObject?.label}</Text>

              <Text>{networkObject?.blurb}</Text>
            </Box>
            <Box alignItems="center" columnGap="loose">
              {networkObject?.delegationURL && (
                <Button
                  variant="primary"
                  onClick={() => {
                    window.open(networkObject.delegationURL);
                  }}
                >
                  Delegate To Us
                </Button>
              )}
            </Box>
          </Box>
          <Box>
            <NetworkPanel network={networkObject} width="100%" />
          </Box>
        </Box>
      </Box>

      <Box
        rowGap="loose"
        responsiveProps={{
          desktopOrLarger: {
            columns: 2,
            columnGap: 'xloose',
            display: 'grid',
          },
        }}
      >
        <Box rowGap="normal">
          <Box rowGap="xtight">
            <Text color="highlighted" variant="label">
              Token
            </Text>
            <Text variant="heading--2">{networkObject?.token?.label}</Text>
          </Box>
          <Box>{networkObject?.token?.description}</Box>
        </Box>

        <Box rowGap="normal">
          <Box rowGap="xtight">
            <Text color="highlighted" variant="label">
              Chain
            </Text>
            <Text variant="heading--2">{networkObject?.chain?.label}</Text>
          </Box>
          <Box>{networkObject?.chain?.description}</Box>
        </Box>
      </Box>

      {networkObject?.recentVote && (
        <Box
          alignItems="center"
          backgroundColor="banner"
          borderRadius="normal"
          paddingX="xloose"
          paddingTop="loose"
          paddingBottom="xloose"
          rowGap="normal"
          textAlign="center"
          responsiveProps={{
            desktopOrLarger: {
              paddingX: 'xxloose',
            },
          }}
        >
          <Text variant="label">Governance</Text>
          <Text variant="heading--2">
            We voted <Vote type={networkObject.recentVote.vote} />
            <br />
            on{' '}
            <Text
              responsiveProps={{ tabletOrLarger: { whiteSpace: 'nowrap' } }}
            >
              Proposal #{networkObject.recentVote.proposal}
            </Text>
          </Text>
          {networkObject?.recentVote?.blurb && (
            <Box>{networkObject.recentVote.blurb}</Box>
          )}
        </Box>
      )}

      <Box
        alignItems="center"
        flexDirection="column"
        rowGap="loose"
        textAlign="center"
        responsiveProps={{
          tabletOrLarger: {},
        }}
      >
        <Box rowGap="normal">
          <Text variant="heading--2">
            Get In Touch <Text whiteSpace="nowrap">With Us</Text>
          </Text>
          <Text as="p">
            If you’re a whale or a whale or a whale... how to get the delegation
            deck
          </Text>
        </Box>

        <Box
          as="form"
          rowGap="normal"
          width="100%"
          responsiveProps={{
            desktopOrLarger: {
              columnGap: 'normal',
            },
          }}
        >
          <TextInput placeholder="Name" />
          <TextInput placeholder="Email Address" type="email" />
          <Button>Get in Touch</Button>
        </Box>
      </Box>

      <Box rowGap="loose" textAlign="center">
        <Box
          columns={1}
          gap="normal"
          width="100%"
          responsiveProps={{
            tabletOrLarger: {
              columns: 2,
              marginX: 'auto',
              width: '60vw',
            },
          }}
        >
          <NetworkCard
            network={previousNetworkObject}
            showBackgroundImage={true}
          />
          <NetworkCard network={nextNetworkObject} showBackgroundImage={true} />
        </Box>

        <Anchor
          fontSize="small"
          href="#"
          variant="subtle"
          onClick={siteActions.showNetworkSelector}
        >
          View All Networks <Icon name="grid" />
        </Anchor>
      </Box>
    </PageSection>
  );
};

export default NetworkPage;
