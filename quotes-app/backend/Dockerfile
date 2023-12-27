FROM gradle:8.5.0-jdk11

ENV POSTGRES_USER=kodilla

ENV POSTGRES_PASSWORD=kodilla

ENV POSTGRES_DB=kodilla-quotes

WORKDIR /app

COPY . .

RUN gradle build

EXPOSE 8080

CMD ["java", "-jar", "build/libs/quotes-0.0.1-SNAPSHOT.jar"]

