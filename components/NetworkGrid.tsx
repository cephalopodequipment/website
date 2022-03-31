import Image from 'next/image';
import Link from 'next/link';
import { Box, NetworkCard } from '.';
import { networks } from '../data/networks';
import { Color } from './Box.types';

export const NetworkGrid = ({ tileBorderColor = 'blue' }) => (
  <Box
    columns={1}
    gap="normal"
    width="100%"
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
