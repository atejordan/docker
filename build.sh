docker stop $(docker ps -a -q)
docker kill $(docker ps -q)
docker container prune -f
docker network prune -f

docker build -t postgres_img ./postgres  #création image
docker build -t redis_img ./redis
docker build -t result_img ./result
docker build -t vote_img ./vote
docker build -t worker_img ./worker
docker build -t hugo_img ./hugo
docker build -t traefik_img ./traefik

docker network create back-end  #création réseau 
docker network create front-end 
docker network create internal

docker volume create volumepsql #création du volume

docker create -i --name hugo -p 1313:1313 --network internal hugo_img
docker create -i --name vote -p 5000:5000 --network back-end vote_img
docker create -i --name redis -p 6379:6379 --network back-end redis_img
docker create -i --name worker --network back-end worker_img
docker create -i --mount type=volume,src=volumepsql,target=/var/lib/postgresql/15/data --name db --network back-end postgres_img  #création container utilisant une image
docker create -i --name result -p 4000:4000 --network back-end result_img
docker create -i --name traefik -p 8080:8080 -p 443:443 --network internal traefik_img