const fs = require('fs');
const { exec } = require('child_process');

exports.task = (done) => {
    const buildDir = `${__dirname}/../../../build/wasm`;

    const ls = exec('cargo build --target wasm32-unknown-unknown --release', { cwd: __dirname });
    ls.stdout.pipe(process.stdout)
    ls.stderr.pipe(process.stdout)
    ls.on('exit', (code) => {
        if (code !== 0)
            throw Error('Error when building the Rust wheel part');

        fs.copyFileSync(`${__dirname}/target/wasm32-unknown-unknown/release/wasm_wheel.wasm`, `${buildDir}/wheel-part-rust.wasm`);
        fs.copyFileSync(`${__dirname}/wasm-loader.js`, `${buildDir}/wheel-part-rust.wasm-loader.js`);
        done();
    });
};