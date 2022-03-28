import { Anchor, Box, Icon, Text } from '.';
import { NetworkGrid } from './NetworkGrid';

export const NetworkSelector: (props: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => JSX.Element = ({ isOpen = false, setIsOpen }) => (
  <Box
    backgroundColor="blue"
    height="100vh"
    justifyContent="center"
    left={0}
    opacity={isOpen ? 1 : 0}
    pointerEvents={isOpen ? 'all' : 'none'}
    position="fixed"
    top={0}
    transitionProperty="opacity"
    width="100vw"
    zIndex={5001}
    responsiveProps={{
      desktopOrLarger: {
        alignItems: 'center',
      },
    }}
    onClick={() => setIsOpen(false)}
  >
    <Anchor
      fontSize="xlarge"
      href="#"
      position="absolute"
      right="loose"
      top="normal"
      variant="subtle"
      onClick={() => setIsOpen(false)}
    >
      <Icon name="xmark" />
    </Anchor>

    <Box alignItems="flex-start" padding="loose" overflow="auto" rowGap="loose">
      <Text variant="heading--2">Networks We Support</Text>
      <NetworkGrid tileBorderColor="white--30" />
    </Box>
  </Box>
);
