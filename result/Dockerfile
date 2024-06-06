FROM debian:latest

WORKDIR /app

RUN apt update && apt install -y ca-certificates curl gnupg

RUN mkdir -p /etc/apt/keyrings

RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_21.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list

RUN apt update && apt install nodejs -y

COPY result /app/

RUN npm ci

EXPOSE 4000

CMD ["node", "server.js"]