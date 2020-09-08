import pkg from './package.json';
export default [
    {
        input: 'index.js',
        external: ['bip39', 'bip32', '@cityofzion/neon-core', 'assert', 'randombytes', 'hdkey'],
        output: [
            { file: pkg.main, format: 'cjs', exports: "auto"  },
            { file: pkg.module, format: 'es',exports: "auto"   }
        ]
    }
]
