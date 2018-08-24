#!/bin/sh

set -e

# Install prerequisites
apt-get update
apt-get -y install openjdk-8-jdk-headless maven
apt-get clean

# Install Rust
curl https://sh.rustup.rs -sSf | sh -s -- -y
/root/.cargo/bin/rustup target add wasm32-unknown-unknown

# Install Go
cd /tmp
wget https://dl.google.com/go/go1.11rc1.linux-amd64.tar.gz
tar -C /usr/local -xzf go1.11rc1.linux-amd64.tar.gz
rm -f go1.11rc1.linux-amd64.tar.gz
echo 'export PATH=$PATH:/usr/local/go/bin' >>/root/.profile

# Install wasm-wheel
cd /src
git clone --depth 1 https://github.com/dtschan/wasm-wheel
cd wasm-wheel
mkdir build/wasm
rm -rf src/langs/csharp src/langs/kotlin
npm install
cd src/langs/java
mvn install
echo 'export PATH=$PATH:/src/wasm-wheel/node_modules/.bin' >>/root/.profile
