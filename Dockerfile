ARG NODE_VERSION=21
FROM node:${NODE_VERSION}

RUN echo ${NODE_VERSION}
RUN echo ${TINI_VERSION}

# Add Tini
# See: https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#handling-kernel-signals
ARG TINI_VERSION=v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

# Used when running the next directives
ENV WORK_DIR=/home/node
WORKDIR ${WORK_DIR}

# Install JS dependencies via latest npm
ENV CACHE_DIR=/tmp/npm-cache
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install --cache ${CACHE_DIR} -g npm@latest \
    && npm install --cache ${CACHE_DIR} . \
    && rm -rf ${CACHE_DIR}

# Add the app
COPY ./index.js .

# Necessary so we can mount .env as a single file instead of a directory
RUN touch ./.env

# The port the bot listens on (duh)
EXPOSE 8080

# Run your program under Tini
CMD ["node", "index.js"]
# or docker run your-image /your/program ...

# Running the container as non-root user
# -- this user is added by the node image
USER node
