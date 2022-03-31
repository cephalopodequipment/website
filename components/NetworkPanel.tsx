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
      padding="xtight"
      {...props}
    >
      <NetworkCard
        borderRadius="20px"
        network={network}
        showBackgroundImage={true}
      />
      <Box
        position="relative"
        rowGap="normal"
        whiteSpace="nowrap"
        padding="normal"
      >
        {network?.stats.map(({ label, value }) => (
          <Box key={label} rowGap={0}>
            <Text variant="label">{label}</Text>
            <Text variant="statistic">{value}</Text>
          </Box>
        ))}
        {network?.socials && (
          <Box
            as="ul"
            bottom="normal"
            columnGap="normal"
            position="absolute"
            right="normal"
          >
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
    </Box>
  );
};
