#Prise en main du code

##Service: Vote
Objectif: Front-end destiné à récupèrer les votes utilisateurs
Langage: Python3
Services externes: Flask, Redis, gunicorn

##Service: Worker
Objectif: Fait la liaison entre les services back-end Redis et PostgresSQL
Langage: C#
Services externes: Dotnet, Npgsql, Newtonsoft.Json, StackExchange.Redis

##Service: Result
Objectif: Front-end destiné à afficher les résultats des votes utilisateurs
Langage: JavaScript, HTML, CSS
Services externes: async, body-parser, cookie-parser, express, method-override, pg, socket.io, stoppable
Identifiants: USER : postgres, PASSWORD : postgres, DB_HOST : db
DB_NAME : postgres
Port : 4000
