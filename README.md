# pull-request-scanner

Pulls github pull request for analysis.

### Running the app

Grab the dependencies if using docker see [docker-compose](https://docs.docker.com/compose/install/)
otherwise:
[nodejs](https://nodejs.org)
[yarn](https://yarnpkg.com)

Create dotenv file and update env values as desired
`cp .env.example .env`

_using docker compose_
Build and run service and db containers
`docker-compose build`
`docker-compose up`

or

_without docker compose_
Install libraries and run service
`yarn install`
`npm start`

Available env vars:

- ENV
- NODE_ENV
- LOGLEVEL
- GITHUB_API_KEY

#### Tests

`docker-compose exec service npm test`

or

`npm test`
