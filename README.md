# SpaceX GraphQL Gateway

A GraphQL gateway for [r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API)

### Installation

```bash
# clone the repository
$ git clone https://github.com/kevinstd/spacex-graphql-gateway.git

# copy the example env file
$ cp .env.example .env

# install dependencies
$ yarn
```

### Running the project

```bash
# development mode
$ yarn start

# production mode
$ yarn build && yarn serve
```

> **NOTE: If you run on production mode make sure to change the value of `NODE_ENV` in the `.env` file to `production`**

### Available routes

- The GraphQL endpoint
  - /graphql

### Test

```bash
# static analysis
$ yarn static:analysis

# unit test
$ yarn test:unit
```
