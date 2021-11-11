"use strict";

// Web elements store
let w;

// copyToClipboard is used to copy text to the clipboard.
function copyToClipboard() {
    let button = document.querySelector('#copyButton');
    button.innerHTML = "Copied";
    setTimeout(function () {
        button.innerHTML = "";
    }, 800);

    let textarea = document.getElementById('pubkey-base64-address');
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length); /* For mobile devices */
    return document.execCommand('copy');
}

function getWebElements() {
    return {
        pubkeyInput: document.getElementById('pubkey-input-address'),
        pubkeyOutput: document.getElementById('pubkey-base64-address'),
    }
}

function updateOutput(byteArray) {
    let keyLength = 33;
    let aminoPrefix = [0xEB, 0x5A, 0xE9, 0x87, 0x21];
    let arrayLength = byteArray.length;
    if (arrayLength === 0) { // empty input
        w.pubkeyOutput.value = "";
    } else if (arrayLength === aminoPrefix.length + keyLength) { // correct length input
        let byteArrayPrefix = byteArray.slice(0, aminoPrefix.length);
        let validAmino = true;
        for (let i = 0; i < aminoPrefix.length ; i++) { // compare amino prefix
            if (byteArrayPrefix[i] !== aminoPrefix[i]) {
                validAmino = false;
                break;
            }
        }
        if (validAmino) { // amino prefix checks out: valid pubkey
            w.pubkeyOutput.value = "'{\"@type\":\"/cosmos.crypto.secp256k1.PubKey\",\"key\":\"" +
                base64_encode(byteArray.slice(Math.max(0, byteArray.length - keyLength), byteArray.length)) +
                "\"}'";
        } else { // amino prefix invalid
            w.pubkeyOutput.value = "Invalid amino prefix. Unsupported key type.";
        }
    } else if (arrayLength === 20) { // this is a wallet not a pubkey
        w.pubkeyOutput.value = "This looks like a wallet address. Enter a pubkey instead.";
    } else { // invalid length input
        w.pubkeyOutput.value = "Invalid length. Unsupported key.";
    }
}

function validateInput() {
    let value = [];
    // Empty input
    if (w.pubkeyInput.value.length === 0) {
        w.pubkeyOutput.value = "";
    } else {
        try {
            value = bech32_decode(w.pubkeyInput.value);
        } catch (e) { // invalid address
            w.pubkeyOutput.value = "Valid bech32 string required";
        }
        if (value !== null) {
            updateOutput(value);
        } else { // invalid address
            w.pubkeyOutput.value = "Valid bech32 string required";
        }
    }
}

// Inject validation and output update into elements.
document.addEventListener("DOMContentLoaded", () => {
    w = getWebElements();
    document.querySelector('#pubkey-input-address').addEventListener('keyup', validateInput);
    document.querySelector('#pubkey-base64-address').addEventListener('click', copyToClipboard);
})

function base64_encode(byteArray) {
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
    BECH32: "bech32",
    BECH32M: "bech32m",
};

function getEncodingConst(enc) {
    if (enc == encodings.BECH32) {
        return 1;
    } else if (enc == encodings.BECH32M) {
        return 0x2bc830a3;
    } else {
        return null;
    }
}

function polymod(values) {
    var chk = 1;
    for (var p = 0; p < values.length; ++p) {
        var top = chk >> 25;
        chk = (chk & 0x1ffffff) << 5 ^ values[p];
        for (var i = 0; i < 5; ++i) {
            if ((top >> i) & 1) {
                chk ^= GENERATOR[i];
            }
        }
    }
    return chk;
}

function hrpExpand(hrp) {
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

function verifyChecksum(hrp, data, enc) {
    return polymod(hrpExpand(hrp).concat(data)) === getEncodingConst(enc);
}

function createChecksum(hrp, data, enc) {
    var values = hrpExpand(hrp).concat(data).concat([0, 0, 0, 0, 0, 0]);
    var mod = polymod(values) ^ getEncodingConst(enc);
    var ret = [];
    for (var p = 0; p < 6; ++p) {
        ret.push((mod >> 5 * (5 - p)) & 31);
    }
    return ret;
}

function encode(hrp, data, enc) {
    var combined = data.concat(createChecksum(hrp, data, enc));
    var ret = hrp + '1';
    for (var p = 0; p < combined.length; ++p) {
        ret += CHARSET.charAt(combined[p]);
    }
    return ret;
}

function decode(bechString, enc) {
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
    return {hrp: hrp, data: data.slice(0, data.length - 6)};
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

function convertbits(data, frombits, tobits, pad) {
    var acc = 0;
    var bits = 0;
    var ret = [];
    var maxv = (1 << tobits) - 1;
    for (var p = 0; p < data.length; ++p) {
        var value = data[p];
        if (value < 0 || (value >> frombits) !== 0) {
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
    } else if (bits >= frombits || ((acc << (tobits - bits)) & maxv)) {
        return null;
    }
    return ret;
}

function bech32_decode(addr) {
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
