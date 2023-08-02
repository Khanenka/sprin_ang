FROM node:latest
ENV TZ=Europa/Minsk
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
EXPOSE 4200
CMD npm run start
