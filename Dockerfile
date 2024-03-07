FROM node:lts-alpine3.19

WORKDIR /usr/src/app

# Copy the package.jsons from host to container
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package.json /usr/src/app/

COPY ./pnpm-lock.yaml /usr/src/app/

# Here we install all the deps
RUN npm i -g pnpm tsx 
RUN pnpm install

COPY . .

RUN pnpm run build

RUN ["chmod", "+x", "/usr/src/app/entrypoint.sh"]

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
