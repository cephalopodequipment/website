import Image from 'next/image';
import { BobbingBox, BobbingBubble, Box, Fish, PeekingCephalopod } from '.';
import { colorPalette } from '../tokens';

export const DeepSeaAnimations = () => (
  <>
    <Box
      backgroundColor="red"
      bottom={0}
      left={0}
      overflow="hidden"
      position="absolute"
      right={0}
      style={{
        backgroundImage: 'url(/img/noise.png)',
        pointerEvents: 'none',
        mixBlendMode: 'overlay',
      }}
      top={0}
      width="100vw"
      zIndex={1}
    />

    <Box zIndex="100">
      <PeekingCephalopod right={0} position="absolute" top="220vh" />

      <Fish left={0} position="absolute" top="100vh" />

      <BobbingBox
        position="absolute"
        right={0}
        top="-5vh"
        transform="translateX(50%)"
      >
        <Image
          alt="Ghost Bubble"
          src="/img/ghost-bubble-1.png"
          width={925}
          height={730}
          priority={true}
        />
      </BobbingBox>

      <BobbingBox
        position="absolute"
        left={0}
        top="50vh"
        transform="translateX(-50%)"
      >
        <Image
          alt="Ghost Bubble"
          src="/img/ghost-bubble-2.png"
          width={980}
          height={743}
        />
      </BobbingBox>

      <BobbingBubble
        position="absolute"
        right={0}
        top="20vh"
        transform="translateX(50%)"
        variant={1}
      />

      <BobbingBubble
        left={0}
        position="absolute"
        top="60vh"
        transform="translateX(-40%)"
        variant={2}
      />

      <BobbingBubble left="3vw" position="absolute" top="10vh" variant={3} />

      <BobbingBox
        height="120vh"
        left={0}
        position="absolute"
        style={{
          backgroundImage: `radial-gradient(closest-side, ${colorPalette['blue--bright']}, rgba(64, 23, 254, 0))`,
        }}
        top="20vh"
        transform="translateX(-70%)"
        width="120vh"
      />

      <BobbingBox
        height="120vh"
        position="absolute"
        right={0}
        style={{
          backgroundImage: `radial-gradient(closest-side, ${colorPalette['blue--bright']}, rgba(64, 23, 254, 0))`,
        }}
        top="100vh"
        transform="translateX(70%)"
        width="120vh"
      />

      <BobbingBox
        height="120vh"
        left={0}
        position="absolute"
        style={{
          backgroundImage: `radial-gradient(closest-side, ${colorPalette['blue--bright']}, rgba(64, 23, 254, 0))`,
        }}
        top="180vh"
        transform="translateX(-70%)"
        width="120vh"
      />
    </Box>
  </>
);
