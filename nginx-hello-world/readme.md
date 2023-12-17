This is how to run the container in order to changes in index.html were visible immediatelly in the browswer without the need of container rebuid:

docker run --name nginx-hello -p 8080:80 -v $(pwd):/usr/share/nginx/html bukalra2/nginx-hello-world:1.0.0
