import { Anchor, Box, Icon, NetworkCard, Text } from '.';
import { NetworkDescriptor } from '../data/networks';
import { BoxProps } from './Box.types';

type NetworkPanelProps = BoxProps<'div'> & {
  network: NetworkDescriptor;
};

export const NetworkPanel = ({ network, ...props }: NetworkPanelProps) => {
  const { label, slug } = (network as NetworkDescriptor) || {};

  return (
    <Box
      backgroundColor="blue--bright--30"
      border="normal"
      borderRadius="normal"
      flexDirection="column"
      padding="xtight"
      {...props}
    >
      <NetworkCard
        borderRadius="20px"
        network={network}
        pointerEvents="none"
        showBackgroundImage={true}
      />
      {network?.stats && (
        <Box
          gap="normal"
          padding="normal"
          whiteSpace="nowrap"
          responsiveProps={{
            tabletOrLarger: {
              columns: 2,
            },
          }}
        >
          {network?.stats?.map(({ label, value }) => (
            <Box key={label} rowGap={0}>
              <Text variant="label">{label}</Text>
              <Text variant="statistic">{value}</Text>
            </Box>
          ))}
        </Box>
      )}
      {network?.socials && (
        <Box alignSelf="flex-end" as="ul" columnGap="normal" padding="normal">
          {network.socials.map((social) => (
            <li key={social.label}>
              <Anchor color="white" href={social.url} target="_blank">
                <Icon
                  name={social.icon as any}
                  variant={(social.iconCollection ?? 'brands') as any}
                />
              </Anchor>
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
};
