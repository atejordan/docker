# Vote application

Ce projet permet une mise en place rapide et simple d'un site web afin de récolter des votes.
Il est composé de deux services Front-End et d'un sous réseau Back-End, les premiers  
permettant de récolter les votes utilisateurs et d'en afficher le resultat tandis  
que le second stock les informations dans une base de données.

## Usage

Afin de démarrer le projet, exécutez dans l'ordre les commandes suivantes :

```sh
docker compose up
```

- Permet d'installer l'outil docker qui nous permettra par la suite de mettre en place  
  notre environnement de travail
- Permet de mettre en place le réseau principal et le sous réseau afin de relier le front-end et le back-end.
- Créer les images des différents services requis permettant d'installer les containers.
- Créer un volume afin de stocker les votes.
- Execute une série de commandes pour la gestion des conteneurs Docker.
  Les instructions permettent de stopper et supprimer des conteneurs inutiles dans le cas d'un redémarrage, il créer ensuite des conteneurs basés sur des images Docker préalablement instanciées et les démarre.

```sh
ctrl+c
docker compose down
```

- Permet de stoper le processus.

# Schema d'architecture

![schema d'architecture](./schema.png "schema d'architecture").
