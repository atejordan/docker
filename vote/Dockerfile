FROM debian:latest

WORKDIR /app/

RUN apt-get update

RUN apt-get install -y python3 python3-pip

COPY vote /app/

RUN python3 -mpip install -r requirements.txt --break-system-packages

EXPOSE 5000

CMD ["python3", "app.py"]


