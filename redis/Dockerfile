FROM debian:latest

WORKDIR /app/

RUN apt-get update

RUN apt-get -y install lsb-release curl gpg

RUN curl -fsSL https://packages.redis.io/gpg | gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

RUN echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/redis.list

RUN  apt-get update

RUN apt-get -y install redis redis-server

EXPOSE 6379

CMD ["redis-server", "--protected-mode", "no"]


