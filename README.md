# my-postgre-webapp

This is an experiment to evolve a very basic set up of React frontend and Node express backend using PostgreSQL DB in a devcontainer and docker.

### Features

- Switched to biome instead of prettier and eslint
- Created DB set up that uses initialising script, but can be re-seeded (scripts need to be kept in sync at moment)

### Running

It is ideally suited if running within vscode to just let vscode open the devcontainer. However, you can keep the code opened locally and run these commands in the terminal.

- To clear any existing version of containers

  `docker-compose down -v`

- To re-run containers with default initialisation 

  `docker-compose up --build`

- To re-seed data (slightly different data) after it is running 

  `docker-compose exec backend node src/db-setup/seed.js`
