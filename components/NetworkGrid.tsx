import Image from 'next/image';
import Link from 'next/link';
import { Box } from '.';
import { networks } from '../data/networks';
import { Color } from './Box.types';

export const NetworkCard = ({
  network = {},
  showBackgroundImage = false,
  tileBorderColor = 'blue',
  ...props
}) => {
  const { label, logoSize, slug } = network as typeof networks[number];
  const [logoWidth, logoHeight] = logoSize.split('x');

  return (
    <Box
      alignItems="center"
      borderColor={tileBorderColor as Color}
      borderRadius="normal"
      cursor="pointer"
      display="flex"
      justifyContent="center"
      key={slug}
      overflow="hidden"
      paddingX="normal"
      paddingY="loose"
      position="relative"
      transform="scale(1)"
      transitionProperty="background border transform"
      hoverProps={{
        backgroundColor: 'blue',
        borderColor: 'blue--bright',
        transform: 'scale(1.1)',
      }}
      {...props}
    >
      <Box
        display="flex"
        height="6vh"
        pointerEvents="none"
        width="75%"
        zIndex="1"
      >
        <Image
          alt={`${label} Network`}
          layout="fill"
          objectFit="contain"
          src={`/img/networks/${slug}-logo.png`}
        />
      </Box>
      <Link href={`/networks/${slug}`} passHref={true}>
        <Box
          as="a"
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          opacity={showBackgroundImage ? 1 : 0}
          transitionProperty="opacity"
          top={0}
          style={{
            backgroundImage: `url(/img/networks/${slug}-bg.jpeg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(50%)',
          }}
          hoverProps={{
            opacity: 1,
          }}
        />
      </Link>
    </Box>
  );
};

export const NetworkGrid = ({ tileBorderColor = 'blue' }) => (
  <Box
    columns={1}
    gap="normal"
    responsiveProps={{
      desktopOrLarger: { columns: 3 },
      tabletOnly: { columns: 2 },
    }}
  >
    {networks.map((network) => {
      return (
        <NetworkCard
          key={network.slug}
          network={network}
          tileBorderColor={tileBorderColor}
        />
      );
    })}
  </Box>
);
