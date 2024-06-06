FROM debian:latest

COPY entrypoint.sh /app/

WORKDIR /app

RUN apt-get update

RUN apt-get -y install postgresql

EXPOSE 5432

RUN echo "listen_addresses = '*' " >> /etc/postgresql/15/main/postgresql.conf

RUN echo "host  all  all  0.0.0.0/0  md5" >> /etc/postgresql/15/main/pg_hba.conf

RUN echo "data_directory = '/var/lib/postgresql/15/data' " >> /etc/postgresql/15/main/postgresql.conf

USER postgres

RUN /usr/lib/postgresql/15/bin/initdb /var/lib/postgresql/15/data

RUN /usr/lib/postgresql/15/bin/pg_ctl -D /var/lib/postgresql/15/data -l /tmp/pg_logfile start

CMD [ "sh", "entrypoint.sh" ]