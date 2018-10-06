FROM node:8

ENV TZ="/usr/share/zoneinfo/Asia/Seoul"
ENV HOST 0.0.0.0
ENV PORT 3000

ARG PROJECT_DIR=/geusan/web/lab
ADD . ${PROJECT_DIR}

WORKDIR ${PROJECT_DIR}

RUN npm install -g firebase-tools

RUN npm install

RUN npm run build

EXPOSE $PORT

# RUN npm run start
CMD ["npm", "start"]
