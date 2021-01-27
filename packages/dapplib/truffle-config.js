require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind concert grace rocket sword twelve'; 
let testAccounts = [
"0x6db4a064f7bda9830dc01437e08e57c4f1f3f6e6d4c1068e3c7a90fe04ba6e4a",
"0x979cf24866c2b2cec993322d45b48cbf315a950aa07a874134b8977ccfb74dc6",
"0x0339356ea3b0667a80a35618f30e1b50e64bfd1f5333ecc02100c8b1c1bdf96c",
"0x560fd7292e2131c1ee6d1cf36fd6add4c9c11006238786e475d0954a6550ecf3",
"0x7f0d5cfb99a6214373381f4a7202e19059ba1ddedf34eaf5f20763e4fe43f60c",
"0xf0cba181639fc2b6b9468bf68a3891b487307ca4fbc956ef78ca8d50d9a74054",
"0xd5635e1abd96d843a6bb532f7b3984eed511e31841722430a26f6c56a38d58ba",
"0xccca91ae2a143f407d86db843a8ce5c7ece5b24ae7d28ceb3f8b90b8df00159f",
"0x1372a71f1c0594602860a50a72fa47aed0bbe3641b5242539728d6e53f51c5dc",
"0x1ca86918f577ab1d834a478830c614e098f2c03872901aa62f051db9b742facc"
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
