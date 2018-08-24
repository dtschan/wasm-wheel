FROM trzeci/emscripten:sdk-tag-1.38.11-64bit

# COPY install.sh /tmp
# RUN /tmp/install.sh

RUN apt-get update && \
    apt-get -y install openjdk-8-jdk-headless maven vim ne && \
    apt-get clean

#RUN curl https://sh.rustup.rs -sSf | sh -s -- -y && \
#    /root/.cargo/bin/rustup target add wasm32-unknown-unknown

RUN cd /tmp && \
    wget https://dl.google.com/go/go1.11rc1.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.11rc1.linux-amd64.tar.gz && \
    rm -f go1.11rc1.linux-amd64.tar.gz && \
    echo 'export PATH=$PATH:/usr/local/go/bin' >>/root/.profile

RUN cd /src && \
    git clone --depth 1 https://github.com/dtschan/wasm-wheel && \
    cd wasm-wheel && \
    mkdir build/wasm && \
    rm -rf src/langs/csharp src/langs/kotlin src/langs/rust && \
    npm install && \
    cd src/langs/java && \
    mvn install && \
    echo 'export PATH=$PATH:/src/wasm-wheel/node_modules/.bin' >>/root/.profile


# ENV PATH=${PATH}:/usr/local/go/bin
#RUN     cd /src/wasm-wheel/src/langs
#     && \
#    rm -rf csharp kotlin

WORKDIR /src/wasm-wheel

EXPOSE 8080

# gulp build
# curl https://sh.rustup.rs -sSf | sh -s -- -y
# rustup target add wasm32-unknown-unknown
# curl -s https://get.sdkman.io | bash

