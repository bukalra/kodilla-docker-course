FROM gradle:8.5.0-jdk11

WORKDIR /app

COPY . .

RUN gradle build

EXPOSE 8080

CMD ["java", "-jar", "build/libs/products-api-0.0.1-SNAPSHOT.jar"]
