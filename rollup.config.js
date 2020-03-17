import pkg from './package.json';
export default [
    {
        input: 'index.js',
        external: ['bip39', 'bip32', '@cityofzion/neon-core', 'assert', 'randombytes', '@ont-community/hdkey-secp256r1'],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ]
    }
]
