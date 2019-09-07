---
layout: page
title: Cosmos Validator
---

The Cephalopod Equipment validator was a proud [participant in the gentx ceremony](https://github.com/cosmos/launch/blob/master/gentx/cec.json)
of the Cosmos Hub and has been an active validator since the genesis block.

We recently upgraded our infrastructure and cycled validator signing and
operator keys. Here is a summary of our setup:

- Datacenter
  - Tier 3
  - Near Toronto, Canada
- Hardware
  - RAID-0 storage
  - TPM encrypted hard drive
  - Secure Boot
  - Redundant networking and power
- Signer
  - Yubikey HSM
  - Tendermint KMS
- Sentry Nodes
  - VPN on AWS
- Alerting
  - Peer connectivity
  - Height drift
- Operator Address
  - 2-of-3 multisig

