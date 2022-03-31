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
  const { label, slug } = network as typeof networks[number];

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
        height="120px"
        pointerEvents="none"
        width="100%"
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
