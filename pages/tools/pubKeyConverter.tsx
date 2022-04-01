import { useEffect, useRef } from 'react';
import { Box, Icon, PageSection, Text, TextInput } from '../../components';

const PubKeyConverter = () => {
  const inputElementRef = useRef<HTMLInputElement>(null);
  const outputElementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputElement = inputElementRef.current;
    const outputElement = outputElementRef.current;

    if (!inputElement || !outputElement) {
      return;
    }

    const updateOutput = (byteArray: Array<string | number>) => {
      let keyLength = 33;
      let aminoPrefix = [0xeb, 0x5a, 0xe9, 0x87, 0x21];
      let arrayLength = byteArray.length;
      if (arrayLength === 0) {
        // empty input
        outputElement.value = '';
      } else if (arrayLength === aminoPrefix.length + keyLength) {
        // correct length input
        let byteArrayPrefix = byteArray.slice(0, aminoPrefix.length);
        let validAmino = true;
        for (let i = 0; i < aminoPrefix.length; i++) {
          // compare amino prefix
          if (byteArrayPrefix[i] !== aminoPrefix[i]) {
            validAmino = false;
            break;
          }
        }
        if (validAmino) {
          // amino prefix checks out: valid pubkey
          outputElement.value =
            '\'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"' +
            base64_encode(
              byteArray.slice(
                Math.max(0, byteArray.length - keyLength),
                byteArray.length
              ) as any
            ) +
            '"}\'';
        } else {
          // amino prefix invalid
          outputElement.value = 'Invalid amino prefix. Unsupported key type.';
        }
      } else if (arrayLength === 20) {
        // this is a wallet not a pubkey
        outputElement.value =
          'This looks like a wallet address. Enter a pubkey instead.';
      } else {
        // invalid length input
        outputElement.value = 'Invalid length. Unsupported key.';
      }
    };

    const validateInput = () => {
      let value: any = [];
      // Empty input
      if (inputElement.value.length === 0) {
        outputElement.value = '';
      } else {
        try {
          value = bech32_decode(inputElement.value);
        } catch (e) {
          // invalid address
          outputElement.value = 'Valid bech32 string required';
        }
        if (value !== null) {
          updateOutput(value);
        } else {
          // invalid address
          outputElement.value = 'Valid bech32 string required';
        }
      }
    };

    let timer: NodeJS.Timeout;

    const copyToClipboard = () => {
      const cachedValue = outputElement.value;
      outputElement.select();
      document.execCommand('copy');

      outputElement.value = 'Copied to clipboard!';

      timer = setTimeout(() => {
        outputElement.value = cachedValue;
      }, 1500);
    };

    inputElement.addEventListener('keyup', validateInput);
    outputElement.addEventListener('click', copyToClipboard);

    return () => {
      inputElement.removeEventListener('keyup', validateInput);
      outputElement.removeEventListener('click', copyToClipboard);
      clearTimeout(timer);
    };
  }, []);

  return (
    <PageSection
      rowGap="loose"
      responsiveProps={{
        tabletOnly: {
          paddingTop: 'loose',
        },
        desktopOrLarger: {
          paddingTop: 'xxloose',
        },
      }}
    >
      <Text variant="heading--2">Public Key Converter</Text>

      <Box
        backgroundColor="banner"
        borderRadius="normal"
        padding="loose"
        rowGap="loose"
      >
        <Box
          alignItems="center"
          columnGap="normal"
          justifyContent="center"
          whiteSpace="nowrap"
        >
          <Box
            alignItems="flex-start"
            border="normal"
            borderRadius="normal"
            paddingX="normal"
            paddingY="tight"
            rowGap={0}
          >
            <Text as="p">Cosmos SDK v0.43</Text>
            <Text variant="label">bech32-encoded</Text>
          </Box>
          <Box>
            <Icon name="arrow-right" />
          </Box>
          <Box
            alignItems="flex-start"
            border="normal"
            borderRadius="normal"
            paddingX="normal"
            paddingY="tight"
            rowGap={0}
          >
            <Text as="p">Cosmos SDK v0.44</Text>
            <Text variant="label">base64-encoded</Text>
          </Box>
        </Box>
        <Box
          as="ul"
          color="white--70"
          fontSize="xsmall"
          marginLeft="normal"
          rowGap="xtight"
          textAlign="left"
        >
          <Box as="li" listStyleType="disc">
            This will only work for regular public keys.
          </Box>
          <Box as="li" listStyleType="disc">
            Multisig keys have to be recreated using each key and the CLI.
          </Box>
          <Box as="li" listStyleType="disc">
            Wallet addresses cannot be converted.
          </Box>
          <Box as="li" listStyleType="disc">
            This tool is provided AS IS. Use it at your own risk. Using the CLI
            to recover a pubkey is the safer option.
          </Box>
        </Box>
        <Box as="form" alignItems="stretch" rowGap="normal">
          <Box alignItems="flex-start" as="label" rowGap="xtight">
            <Text variant="label">Bech32-encoded public key:</Text>
            <TextInput
              fontSize="small"
              placeholder="example: cosmospub1addwnpepqw40c3ukg8aczklckt6qw5yxhnav8cuqv560zd0fj5g3xz0m4g2sjkrc9y2"
              ref={inputElementRef}
            />
          </Box>
          <Box alignItems="flex-start" as="label" rowGap="xtight">
            <Text variant="label">Base64-encoded public key:</Text>
            <TextInput fontSize="xsmall" readOnly ref={outputElementRef} />
          </Box>
        </Box>
      </Box>
    </PageSection>
  );
};

function base64_encode(byteArray: Array<number>) {
  let binary = '';
  let bytes = new Uint8Array(byteArray);
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/// Source code from https://www.github.com/sipa/bech32

/// bech32.js

// Copyright (c) 2017, 2021 Pieter Wuille
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
var GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];

const encodings = {
  BECH32: 'bech32',
  BECH32M: 'bech32m',
};

function getEncodingConst(enc: string) {
  if (enc == encodings.BECH32) {
    return 1;
  } else if (enc == encodings.BECH32M) {
    return 0x2bc830a3;
  } else {
    return null;
  }
}

function polymod(values: Array<number>) {
  var chk = 1;
  for (var p = 0; p < values.length; ++p) {
    var top = chk >> 25;
    chk = ((chk & 0x1ffffff) << 5) ^ values[p];
    for (var i = 0; i < 5; ++i) {
      if ((top >> i) & 1) {
        chk ^= GENERATOR[i];
      }
    }
  }
  return chk;
}

function hrpExpand(hrp: string) {
  var ret = [];
  var p;
  for (p = 0; p < hrp.length; ++p) {
    ret.push(hrp.charCodeAt(p) >> 5);
  }
  ret.push(0);
  for (p = 0; p < hrp.length; ++p) {
    ret.push(hrp.charCodeAt(p) & 31);
  }
  return ret;
}

function verifyChecksum(
  hrp: string,
  data: number | ConcatArray<number>,
  enc: string
) {
  return polymod(hrpExpand(hrp).concat(data)) === getEncodingConst(enc);
}

function decode(bechString: string, enc: string) {
  var p;
  var has_lower = false;
  var has_upper = false;
  for (p = 0; p < bechString.length; ++p) {
    if (bechString.charCodeAt(p) < 33 || bechString.charCodeAt(p) > 126) {
      return null;
    }
    if (bechString.charCodeAt(p) >= 97 && bechString.charCodeAt(p) <= 122) {
      has_lower = true;
    }
    if (bechString.charCodeAt(p) >= 65 && bechString.charCodeAt(p) <= 90) {
      has_upper = true;
    }
  }
  if (has_lower && has_upper) {
    return null;
  }
  bechString = bechString.toLowerCase();
  var pos = bechString.lastIndexOf('1');
  if (pos < 1 || pos + 7 > bechString.length || bechString.length > 90) {
    return null;
  }
  var hrp = bechString.substring(0, pos);
  var data = [];
  for (p = pos + 1; p < bechString.length; ++p) {
    var d = CHARSET.indexOf(bechString.charAt(p));
    if (d === -1) {
      return null;
    }
    data.push(d);
  }
  if (!verifyChecksum(hrp, data, enc)) {
    return null;
  }
  return { hrp: hrp, data: data.slice(0, data.length - 6) };
}

// segwit_addr.js (heavily modified to remove actually segwit functionality)

// Copyright (c) 2017, 2021 Pieter Wuille
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

function convertbits(data: any, frombits: any, tobits: any, pad: boolean) {
  var acc = 0;
  var bits = 0;
  var ret = [];
  var maxv = (1 << tobits) - 1;
  for (var p = 0; p < data.length; ++p) {
    var value = data[p];
    if (value < 0 || value >> frombits !== 0) {
      return null;
    }
    acc = (acc << frombits) | value;
    bits += frombits;
    while (bits >= tobits) {
      bits -= tobits;
      ret.push((acc >> bits) & maxv);
    }
  }
  if (pad) {
    if (bits > 0) {
      ret.push((acc << (tobits - bits)) & maxv);
    }
  } else if (bits >= frombits || (acc << (tobits - bits)) & maxv) {
    return null;
  }
  return ret;
}

function bech32_decode(addr: string) {
  let dec = decode(addr, encodings.BECH32);
  if (dec === null || dec.data.length < 1) {
    return null;
  }
  let res = convertbits(dec.data, 5, 8, false);
  if (res === null || res.length < 2 || res.length > 40) {
    return null;
  }
  return res;
}

export default PubKeyConverter;
