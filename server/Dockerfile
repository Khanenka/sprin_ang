# FROM openjdk:11
# ENV TZ="Europa/Minsk"
# EXPOSE 8081
# RUN apt-get update
# RUN apt-get install -y maven
# ADD /path/to/settings.xml /root/.m2/settings.xml
# ADD target/spring-boot-docker.jar spring-boot-docker.jar
# ENTRYPOINT ["java","-jar","/spring-boot-docker.jar"]

FROM openjdk:8-alpine

COPY target/mysql_oracle-0.0.1-SNAPSHOT.jar mysql_oracle-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java","-jar","/mysql_oracle-0.0.1-SNAPSHOT.jar"]