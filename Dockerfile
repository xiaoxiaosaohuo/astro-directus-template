FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN yarn
RUN yarn run build

ENV HOST=0.0.0.0
ENV PORT=8081
EXPOSE 8081
CMD node ./dist/server/entry.mjs