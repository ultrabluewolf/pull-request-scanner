# pull-request-scanner

Pulls github pull request for analysis.

### Running the app

Grab the dependencies if using docker see [docker-compose](https://docs.docker.com/compose/install/)

otherwise, see:
[nodejs](https://nodejs.org)
[yarn](https://yarnpkg.com)


Create dotenv file and update env values as desired

`cp .env.sample .env`

_using docker compose_

Build and start container

`docker-compose build`

`docker-compose up`

And in a new tab run:

`docker-compose exec node npm start <organization>`

or

_without docker compose_

Install libraries and run service

`yarn install`

`npm start <organization>`

Available env vars:

- NODE_ENV
- LOGLEVEL
- GITHUB_URL
- GITHUB_API_TOKEN
- GITHUB_MAX_REPOS
- GITHUB_MAX_PULLREQUESTS

#### Tests

`docker-compose exec node npm test`

or

`npm test`
