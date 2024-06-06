FROM debian:latest

WORKDIR /app/

RUN apt-get update

RUN apt-get install -y wget

RUN wget https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb -O packages-microsoft-prod.deb

RUN dpkg -i packages-microsoft-prod.deb

RUN rm packages-microsoft-prod.deb

RUN apt-get update

RUN apt-get install -y dotnet-sdk-7.0

COPY worker /app/

RUN dotnet restore

RUN dotnet publish -c release -o /app

CMD ["dotnet", "Worker.dll"]



