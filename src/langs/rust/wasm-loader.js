(() => {
  wheel.defaultWasmLoader('wheel-part-rust.wasm', wheel.defaultReadStringFromMemory, {
    env: {
      log: (what) => {
        console.log('Rust: ' + what);
      },
      exp: (x) => Math.exp(x)
    }
  })
})();