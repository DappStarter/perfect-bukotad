require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth mean pulp hunt perfect flip gas'; 
let testAccounts = [
"0x2ca1c59e02a0549c7b765ff92bd5a8215e5e70c898e4b133f67fdfe0d37471cb",
"0x303671a32907df2ce3cec7610873ef2c21c89f2641af8a25df9015719cbbc516",
"0x8c63016a708f070a5a15e339319d1a20f9bd098f7e03721dc8fe8a66ddbaed55",
"0x123181acfd725321b9fbedf29606934365cbff87c16a4caab782997648f1ce55",
"0x2bf377cf110f9d0952455b6dae682d515e7f93056a0e6383c2094c3ee7175e57",
"0x19f1c1a6388ba04ffcc6179b0ac2769d2d55494e637d52845abf9f6c5ca585d1",
"0x29cdc6092a1ac356674e9d16c4ea402e162eea77f9054b312433cbcc61d08c54",
"0x47574b37b54e7872a6b33091b235651962bf0cbb82da9bd23cb0a64d50dbf943",
"0x879b48242c5ef77480cf8a462499704bd870a53bcc9b57c775bd972ca29879b5",
"0xa93bdfc01cc2f242ccfd8fa9c652e14714814859ac5d5c92bb91b47b40986d38"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
