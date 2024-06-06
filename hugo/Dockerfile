FROM debian:latest

WORKDIR /app

RUN apt-get update

RUN apt-get install git-all -y

ADD https://go.dev/dl/go1.21.6.linux-amd64.tar.gz /app

RUN tar -C /usr/local -xzf go1.21.6.linux-amd64.tar.gz

ENV PATH="$PATH:/usr/local/go/bin"

ADD https://github.com/sass/dart-sass/releases/download/1.69.7/dart-sass-1.69.7-linux-x64.tar.gz /app

RUN tar -C /opt/ -xzf dart-sass-1.69.7-linux-x64.tar.gz 

ENV PATH="/opt/dart-sass:$PATH"

ADD https://github.com/gohugoio/hugo/releases/download/v0.121.2/hugo_extended_0.121.2_linux-amd64.tar.gz /app

RUN tar -C /usr/local/bin -xzf hugo_extended_0.121.2_linux-amd64.tar.gz 

ENV PATH="$PATH:/usr/local/bin/hugo"

RUN mkdir quickstart

COPY ./quickstart /quickstart

EXPOSE 1313

WORKDIR /quickstart

CMD ["hugo", "server", "--bind=0.0.0.0"]