docker stop $(docker ps -a -q)
docker kill $(docker ps -q)
docker container prune -f
docker network prune -f