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
import { networks } from '../../data/networks';
import { PageProps } from '../_app';

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
            <NetworkPanel height="100%" network={networkObject} width="100%" />
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

      <Box
        alignItems="center"
        backgroundColor="banner"
        borderRadius="normal"
        paddingX="xloose"
        paddingY="loose"
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
          We voted{' '}
          <Text variant="voteabstain" whiteSpace="nowrap">
            <Icon name="circle-minus" variant="solid" /> Abstain
          </Text>{' '}
          on{' '}
          <Text responsiveProps={{ tabletOrLarger: { whiteSpace: 'nowrap' } }}>
            Proposal #60
          </Text>
        </Text>
        <Box>
          Cephalopod validates on the Cosmos Hub since...Lorem Ipsum is simply
          dummy text of the printing and{' '}
          <Text whiteSpace="nowrap">typesetting industry.</Text>
        </Box>
      </Box>

      <Box
        flexDirection="column"
        rowGap="loose"
        textAlign="left"
        responsiveProps={{
          tabletOrLarger: {
            alignItems: 'center',
            display: 'grid',
            flexDirection: 'row',
            columnGap: 'xloose',
            columns: 2,
          },
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

        <Box alignItems="flex-end" as="form" rowGap="normal">
          <TextInput placeholder="Name" />
          <TextInput placeholder="Email Address" type="email" />
          <Button>Get in Touch</Button>
        </Box>
      </Box>

      <Box rowGap="loose" textAlign="center">
        <Box
          columns={1}
          gap="normal"
          responsiveProps={{
            tabletOrLarger: {
              columns: 2,
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
          View All Networks <Icon name="chevron-right" />
        </Anchor>
      </Box>
    </PageSection>
  );
};

export default NetworkPage;
