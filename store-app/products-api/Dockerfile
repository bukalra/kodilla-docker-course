FROM gradle:8.5.0-jdk11

ENV MYSQL_HOST=store-database

ENV MYSQL_PORT=5433

ENV MYSQL_USERNAME=kodilla

ENV MYSQL_PASSWORD=kodilla

ENV MYSQL_DATABASE=store-database

ENV RABBITMQ_HOST=my-rabbit

ENV RABBITMQ_PORT=5434

ENV RABBITMQ_QUEUE_NAME=some-rabbit

WORKDIR /app

COPY . .

RUN gradle build

EXPOSE 8080

CMD ["java", "-jar", "build/libs/products-api-0.0.1-SNAPSHOT.jar"]
