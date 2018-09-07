FROM debian:jessie


# COPY install.sh /tmp
# RUN /tmp/install.sh

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

#    RUN
#    cd /tmp && \
#    wget https://raw.githubusercontent.com/boyanio/wasm-wheel/master/src/langs/java/pom.xml && \
#    mvn org.apache.maven.plugins:maven-dependency-plugin:3.1.0:go-offline

#RUN curl https://sh.rustup.rs -sSf | sh -s -- -y && \
#    /root/.cargo/bin/rustup target add wasm32-unknown-unknown

# RUN cd /src && \
#     git clone --depth 1 https://github.com/dtschan/wasm-wheel && \
#     cd wasm-wheel && \
#     mkdir build/wasm && \
#     npm install && \
#     cd src/langs/java && \
#     mvn install && \
#     echo 'export PATH=$PATH:/src/wasm-wheel/node_modules/.bin' >>/root/.profile

# rm -rf src/langs/csharp src/langs/kotlin src/langs/rust && \

# ENV PATH=${PATH}:/usr/local/go/bin
#RUN     cd /src/wasm-wheel/src/langs
#     && \
#    rm -rf csharp kotlin

WORKDIR /src

EXPOSE 8080

# gulp build
# curl https://sh.rustup.rs -sSf | sh -s -- -y
# rustup target add wasm32-unknown-unknown
# curl -s https://get.sdkman.io | bash

