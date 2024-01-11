FROM --platform=linux/x86_64 node:18-alpine
WORKDIR /usr/src/app
COPY ./pm2.json .
COPY ./index.js .
COPY ./package*.json .
RUN npm ci
RUN ln -s /usr/src/app/node_modules/.bin/pm2 /usr/bin/pm2
RUN ln -s /usr/src/app/node_modules/.bin/pm2-runtime /usr/bin/pm2-runtime

EXPOSE 8000
#CMD [ "pm2-runtime", "pm2.json" ]
CMD [ "node", "index.js" ]
