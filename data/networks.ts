export type VoteType = 'abstain' | 'yes' | 'no' | 'no-with-veto';

export type NetworkDescriptor = {
  blurb: string;
  chain: {
    description: string;
    label: string;
  };
  delegationURL?: string;
  label: string;
  recentVote?: {
    vote: VoteType;
    proposal: number;
    blurb?: string;
  };
  slug: string;
  socials?: Array<{
    icon: string;
    iconCollection?: string;
    label: string;
    url: string;
  }>;
  stats?: Array<{
    label: string;
    value: string;
  }>;
  token: {
    description: string;
    label: string;
  };
};

export const networks: Array<NetworkDescriptor> = [
  {
    blurb: `
      Cephalopod has been an active validator on Agoric since March 2022. The Agoric
      team are pioneers of smart contracts, with their work predating blockchains, and
      also helped to standardize and generalize the IBC protocol. Agoric is also
      working with Informal Systems using formal verification tools to improve
      software integrity.
    `,
    chain: {
      description: `
        Agoric is the first proof of stake blockchain to utilize hardened JavaScript
        smart contracts. Zoe, another first of its kind innovation, provides “offer
        safety”, ensuring users get what they pay for or a full refund. ERTP is the
        token standard that treats fungible and non-fungible assets exactly the same.
      `,
      label: `Agoric`,
    },
    delegationURL:
      'https://wallet.keplr.app/#/agoric/stake?modal=detail&validator=agoricvaloper1x20lytyf6zkcrv5edpkfkn8sz578qg5shcm4rq',
    label: 'Agoric',
    slug: 'agoric',
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        url: 'https://twitter.com/agoric',
      },
      {
        icon: 'globe',
        iconCollection: 'solid',
        label: 'Website',
        url: 'https://agoric.com/',
      },
      {
        icon: 'telescope',
        iconCollection: 'solid',
        label: 'Explorer',
        url: 'https://main.explorer.agoric.net/',
      },
    ],
    stats: [
      {
        label: 'Commission',
        value: '5%',
      },
      {
        label: 'Self-Delegated BLD',
        value: '31,818',
      },
      {
        label: 'Total Delegated BLD',
        value: '490,151',
      },
      {
        label: 'Uptime',
        value: '99.99%',
      },
    ],
    token: {
      description: `
        Agoric uses a dual token system to “grease” the on-chain economy. BLD is the
        staking and governance token and the primary token backing Run Protocol. RUN is
        a stable local currency that is used to pay network fees.
      `,
      label: 'BLD & RUN',
    },
  },
  {
    blurb: `
      Cephalopod has been an active validator for Akash Network since February, 2022.
      Here at Cephalopod we don’t consider current software solutions to be secure
      enough to build Web 3.0 infrastructure.  Akash helps to solve this problem by
      providing a secure decentralized alternative to current cloud computing
      marketplaces.
    `,
    chain: {
      description: `
        Akash Network powers the “Unstoppable Cloud”. Akash is decentralized,
        permissionless, censorship-resistant and is aiming to rival AWS and other cloud
        service providers by providing a digital p2p marketplace for cloud compute
        resources.
      `,
      label: 'Akash Network',
    },
    delegationURL:
      'https://wallet.keplr.app/#/akashnet/stake?modal=detail&validator=akashvaloper1x20lytyf6zkcrv5edpkfkn8sz578qg5sjyfzx8',
    label: 'Akash',
    slug: 'akash',
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        url: 'https://twitter.com/akashnet_',
      },
      {
        icon: 'globe',
        iconCollection: 'solid',
        label: 'Website',
        url: 'https://akash.network/',
      },
      {
        icon: 'telescope',
        iconCollection: 'solid',
        label: 'Explorer',
        url: 'https://www.mintscan.io/akash',
      },
    ],
    stats: [
      {
        label: 'Commission',
        value: '5%',
      },
      {
        label: 'Self-Delegated AKT',
        value: '1',
      },
      {
        label: 'Total Delegated AKT',
        value: '94,176',
      },
      {
        label: 'Uptime',
        value: '99.99%',
      },
    ],
    token: {
      description: `
        AKT plays multiple roles for the Akash network. It is the gas staking and
        governance token for the network and is used for the cloud compute marketplace.
        AKT staking includes fees from the p2p marketplace.
      `,
      label: 'AKT',
    },
  },
  {
    blurb: `
      Cephalopod has been an active validator for Cheqd since November, 2021. Cheqd 
      enables digital trust between people and organizations and is the first self 
      sovereign identity solution in the Interchain. As one of the top validators for 
      Cheqd we offer premium network security and are active in network governance.
    `,
    chain: {
      description: `
        Cheqd Network is an application specific blockchain powering a Self Sovereign 
        Identity (SSI) platform. The Cheqd network enables digital trust, facilitates 
        new business around SSI, and bridges DeFi to DID (Decentralized Identifiers) 
        markets. 
      `,
      label: 'Cheqd Network',
    },
    delegationURL: 'https://cheqd.omniflix.co/',
    label: 'Cheqd',
    recentVote: {
      blurb: 'This was a software upgrade signalling proposal to v0.4.x',
      vote: 'yes',
      proposal: 2,
    },
    slug: 'cheqd',
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        url: 'https://twitter.com/cheqd_io',
      },
      {
        icon: 'globe',
        iconCollection: 'solid',
        label: 'Website',
        url: 'https://www.cheqd.io/',
      },
      {
        icon: 'telescope',
        iconCollection: 'solid',
        label: 'Explorer',
        url: 'https://explorer.cheqd.io/',
      },
    ],
    stats: [
      {
        label: 'Commission',
        value: '8.11%',
      },
      {
        label: 'Self-Delegated CHEQ',
        value: '500,000',
      },
      {
        label: 'Total Delegated CHEQ',
        value: '22,563,370',
      },
      {
        label: 'Uptime',
        value: '99.99%',
      },
    ],
    token: {
      description: `
        The CHEQ token is used as a staking and governance token for the Cheqd
        blockchain. CHEQ is also used to monetize verifiable credentials and incentivize
        usage of the network.
      `,
      label: 'CHEQ',
    },
  },
  {
    blurb: `
      Cephalopod has been operating a Cosmos Hub validator since the genesis block in
      2019 and continues to be an active network participant working to improve the
      utility of the Cosmos Hub and providing IBC relayer services. In our time as a
      validator for Cosmos Hub we have not been slashed and maintain 99.99% uptime.
    `,
    chain: {
      description: `
        Cosmos Hub was the first blockchain in the Interchain and is the only chain that
        upholds the core principles of the Cosmos vision. Cosmos Hub is dedicated to
        supporting the Interchain ecosystem.
      `,
      label: 'Cosmos Hub',
    },
    delegationURL:
      'https://wallet.keplr.app/#/cosmoshub/stake?modal=detail&validator=cosmosvaloper16k579jk6yt2cwmqx9dz5xvq9fug2tekvlu9qdv',
    label: 'Cosmos Hub',
    recentVote: {
      blurb:
        'v7: Theta brings exciting update to the Hub such as Interchain accounts.',
      vote: 'yes',
      proposal: 65,
    },
    slug: 'cosmos',
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        url: 'http://twitter.com/cosmos',
      },
      {
        icon: 'globe',
        iconCollection: 'solid',
        label: 'Website',
        url: 'https://cosmos.network/',
      },
      {
        icon: 'telescope',
        iconCollection: 'solid',
        label: 'Explorer',
        url: 'https://www.mintscan.io/cosmos',
      },
    ],
    stats: [
      {
        label: 'Commission',
        value: '8.11%',
      },
      {
        label: 'Self-Delegated ATOM',
        value: '3,000.22',
      },
      {
        label: 'Total Delegated ATOM',
        value: '2,439,433',
      },
      {
        label: 'Uptime',
        value: '99.99%',
      },
    ],
    token: {
      description: `
        The Cosmos Hub blockchain is powered by the ATOM, the gas, staking and
        governance token. ATOM is also used to bootstrap new networks and will be able
        to lease security to consumer chains following the Interchain Security upgrade.
      `,
      label: 'Atom',
    },
  },
  {
    blurb: `
      Cephalopod has been operating a validator for the IXO Impact Hub since September,
      2021. Here at Cephalopod we believe that blockchains enable more sustainable
      economies that will lead to new forms of economic and social coordination and
      the Impact Hub provides a platform for economic and social innovation.
    `,
    chain: {
      description: `
        The Ixo Protocol is the foundation for building an internet of impact that
        supports sustainable social, environmental and economic developments. Ixo is
        building a global digital immune system for humanity.
      `,
      label: 'IXO Protocol',
    },
    delegationURL:
      'https://wallet.keplr.app/#/impacthub/stake?modal=detail&validator=ixovaloper1x20lytyf6zkcrv5edpkfkn8sz578qg5sqfyqnp',
    label: 'IXO',
    recentVote: {
      blurb: 'We support a network minimum commission of 5%',
      vote: 'yes',
      proposal: 10,
    },
    slug: 'ixo',
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        url: 'https://twitter.com/ixoworld',
      },
      {
        icon: 'globe',
        iconCollection: 'solid',
        label: 'Website',
        url: 'https://www.ixo.world/',
      },
      {
        icon: 'telescope',
        iconCollection: 'solid',
        label: 'Explorer',
        url: 'https://blockscan.ixo.world/',
      },
    ],
    stats: [
      {
        label: 'Commission',
        value: '8.11%',
      },
      {
        label: 'Self-Delegated IXO',
        value: '4,799',
      },
      {
        label: 'Total Delegated IXO',
        value: '576,969',
      },
      {
        label: 'Uptime',
        value: '99.99%',
      },
    ],
    token: {
      description: `
        IXO powers the tokenized impact economy by securing the Impact Hub through
        staking and functions as the fee token for the IXO blockchain.
      `,
      label: 'IXO',
    },
  },
  {
    blurb: `
      Cephalopod has been an active Juno validator since the Juno launch on October 
      2021. Juno is an innovation by the community and became the first blockchain to 
      implement CosmWasm 1.0 which introduced IBC enabled smart contracts. As innovators 
      of the Interchain, we support Juno as a pioneer of fully interoperable smart contracts.
    `,
    chain: {
      description: `
        Juno is a decentralized, permission-less, censorship resistant smart contract
        platform offering an open-source sandbox environment for developers to deploy
        smart contracts using CosmWasm. Juno utilizes IBC to enable interoperability
        with the Interchain ecosystem, from token transfers to smart contract calls.
      `,
      label: 'Juno Network',
    },
    delegationURL:
      'https://wallet.keplr.app/#/juno/stake?modal=detail&validator=junovaloper1x20lytyf6zkcrv5edpkfkn8sz578qg5sujlhnj',
    label: 'Juno',
    recentVote: {
      blurb: 'See vote explanation here: https://ceph.is/voting/juno/16',
      vote: 'no',
      proposal: 16,
    },
    slug: 'juno',
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        url: 'https://twitter.com/JunoNetwork',
      },
      {
        icon: 'globe',
        iconCollection: 'solid',
        label: 'Website',
        url: 'https://www.junonetwork.io/',
      },
      {
        icon: 'telescope',
        iconCollection: 'solid',
        label: 'Explorer',
        url: 'https://www.mintscan.io/juno',
      },
    ],
    stats: [
      {
        label: 'Commission',
        value: '8.11%',
      },
      {
        label: 'Self-Delegated JUNO',
        value: '7,000',
      },
      {
        label: 'Total Delegated JUNO',
        value: '540,635',
      },
      {
        label: 'Uptime',
        value: '99.99%',
      },
    ],
    token: {
      description: `
        JUNO is the gas, staking and governance token for the Juno Network. 
        JUNO is required to pay for fees when interacting with smart contracts 
        and sending tokens on the Juno blockchain. JUNO also serves as the base 
        pair for JunoSwap, the on-chain Interchain Automated Market Maker (AMM). 
      `,
      label: 'JUNO',
    },
  },
  {
    blurb: `
      Cephalopod has been an active validator for Nomic since April, 2022. The
      Nomic Bitcoin bridge is a custom developed blockchain designed specifically
      to bring BTC to the Interchain. We view BTC as central to the future of the
      decentralized cryptocurrency economy, and Nomic offers a novel and unique
      bridging protocol to enable Bitcoin transactions in the Interchain.
    `,
    chain: {
      description: `
        The Nomic blockchain secures the Nomic Bitcoin bridge – the first decentralized
        and permissionless bridge bringing BTC into the Interchain ecosystem. Nomic is a
        custom proof of stake blockchain developed using Rust running on top of
        Tendermint.
      `,
      label: 'Nomic Bitcoin Bridge',
    },
    label: 'Nomic',
    slug: 'nomic',
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        url: 'https://twitter.com/nomicbtc',
      },
      {
        icon: 'globe',
        iconCollection: 'solid',
        label: 'Website',
        url: 'https://nomic.io',
      },
    ],
    token: {
      description: `
        Nomic has two tokens. NOM is the staking token used to secure and govern the
        Nomic Bitcoin bridge, as well as the fee token required to pay network fees. The
        second token on Nomic is nBTC, a 1:1 wrapped token of BTC on the Nomic
        blockchain.
      `,
      label: 'NOM',
    },
  },
  {
    blurb: `
      Cephalopod has been an active validator and main IBC relayer operator for 
      Osmosis since the genesis block on June 2021. Osmosis has become an economic 
      hub in the Interchain continuing to innovate and push the limits of what IBC 
      is capable of, with the Hermes relayers supporting the highest volume channels 
      in the ecosystem. 
    `,
    chain: {
      description: `
        Osmosis is a highly advanced and experimental AMM protocol developed using the 
        Cosmos SDK. Beyond tools for DeFi, Osmosis is also leading the way for DeFi to ReFi 
        (“Regenerative Finance”) as the first ever blockchain to go carbon neutral using 
        completely on-chain methods. 
      `,
      label: 'Osmosis AMM',
    },
    delegationURL:
      'https://wallet.keplr.app/#/osmosis/stake?modal=detail&validator=osmovaloper1x20lytyf6zkcrv5edpkfkn8sz578qg5s833swz',
    label: 'Osmosis',
    recentVote: {
      blurb:
        'We support the creation of rNCT carbon markets on Osmosis to enable DeFi to ReFi!',
      vote: 'yes',
      proposal: 182,
    },
    slug: 'osmosis',
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        url: 'https://twitter.com/osmosiszone',
      },
      {
        icon: 'globe',
        iconCollection: 'solid',
        label: 'Website',
        url: 'https://osmosis.zone/',
      },
      {
        icon: 'telescope',
        iconCollection: 'solid',
        label: 'Explorer',
        url: 'https://www.mintscan.io/osmosis',
      },
    ],
    stats: [
      {
        label: 'Commission',
        value: '8.11%',
      },
      {
        label: 'Self-Delegated OSMO',
        value: '100',
      },
      {
        label: 'Total Delegated OSMO',
        value: '2,534,579',
      },
      {
        label: 'Uptime',
        value: '99.99%',
      },
    ],
    token: {
      description: `
        OSMO holds multiple roles in the Osmosis ecosystem. OSMO is a staking and 
        governance token, liquidity mining incentive, staking reward token, and 
        provides a base pair for Osmosis AMM Liquidity Pools. Osmosis supports a 
        novel “superfluid staking” mechanism that allows OSMO in liquidity pools 
        to be used to secure the chain.
      `,
      label: 'OSMO',
    },
  },
  {
    blurb: `
      Cephalopod has been an active validator for Regen Network since the genesis
      block in March, 2022. Regen was the second network that Cephalopod joined after
      the Cosmos Hub. We support Regen as pioneers of the DeFi to ReFi movement.
    `,
    chain: {
      description: `
        Regen Ledger is the world’s first publicly-verifiable blockchain ledger designed
        to combat climate change by focusing on ecological health and regenerative
        finance. Regen Ledger was developed using Tendermint and the Cosmos SDK with
        some modifications, such as the eco-credit module.
      `,
      label: 'Regen Ledger',
    },
    delegationURL:
      'https://wallet.keplr.app/#/regen/stake?modal=detail&validator=regenvaloper1kl83t6gm2y5lgg5c5h3sz87tt5fg3cmyl2sksd',
    label: 'Regen',
    recentVote: {
      blurb:
        'Regen Ledger v3 supports new eco-credit baskets that will be used Interchain for carbon markets.',
      vote: 'yes',
      proposal: 9,
    },
    slug: 'regen',
    socials: [
      {
        icon: 'twitter',
        label: 'Twitter',
        url: 'https://twitter.com/regen_network',
      },
      {
        icon: 'globe',
        iconCollection: 'solid',
        label: 'Website',
        url: 'https://www.regen.network/',
      },
      {
        icon: 'telescope',
        iconCollection: 'solid',
        label: 'Explorer',
        url: 'https://www.mintscan.io/regen',
      },
    ],
    stats: [
      {
        label: 'Commission',
        value: '8.11%',
      },
      {
        label: 'Self-Delegated REGEN',
        value: '238,499',
      },
      {
        label: 'Total Delegated REGEN',
        value: '2,284,119',
      },
      {
        label: 'Uptime',
        value: '99.99%',
      },
    ],
    token: {
      description: `
        REGEN is the gas, staking and governance token for the Regen Ledger. The REGEN
        token also serves utility for eco-credit basket creation and the buying/selling
        of eco-credits.
      `,
      label: 'REGEN',
    },
  },
];
