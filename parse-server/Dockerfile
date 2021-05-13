FROM node

USER node

ENV PORT 1337
ENV PARSE_HOME /home/node/parse-server

RUN mkdir -p ${PARSE_HOME}
ADD ./package.json ${PARSE_HOME}
ADD ./index.js ${PARSE_HOME}

WORKDIR ${PARSE_HOME}

RUN yarn install

EXPOSE ${PORT}

CMD [ "yarn", "start" ]
