FROM debian:12

ADD https://github.com/traefik/traefik/releases/download/v2.10.7/traefik_v2.10.7_linux_amd64.tar.gz /app/

WORKDIR /app

RUN tar -xzf traefik_v2.10.7_linux_amd64.tar.gz

RUN mv traefik /usr/local/bin/traefik

RUN rm CHANGELOG.md && rm LICENSE.md && rm traefik_v2.10.7_linux_amd64.tar.gz  

COPY traefik.yml /etc/traefik/traefik.yml

EXPOSE 80

EXPOSE 443

CMD ["/usr/local/bin/traefik", "--configFile=/etc/traefik/traefik.yml"]