FROM debian:jessie

RUN echo "deb http://http.debian.net/debian jessie-backports main" >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get -y --no-install-recommends -t jessie-backports install openjdk-8-jdk-headless maven vim ne curl sudo wget && \
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && \
    sudo apt-get install -y nodejs && \
    apt-get clean

RUN cd /tmp && \
    wget https://dl.google.com/go/go1.11.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.11.linux-amd64.tar.gz && \
    rm -f go1.11.linux-amd64.tar.gz && \
    ln -s /usr/local/go/bin/go /usr/local/bin

# Rust excluded for now for to reduce size
# RUN curl https://sh.rustup.rs -sSf | sh -s -- -y && \
#    /root/.cargo/bin/rustup target add wasm32-unknown-unknown

WORKDIR /src

EXPOSE 8080
