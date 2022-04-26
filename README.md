# ValorantBro

![image](https://i.imgur.com/OYLvGsb.png)

Discord Bot that gives you a random Valorant Agent.

## Installation & Launch

All commands below are to be executed relative to the repository's root directory.

### Manual

#### Prerequisites

Install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). This bot was tested with Node V17, but any recent version (16+) should do.

1. Clone this repository.

2. Install all required dependencies using `npm`:
   
    ```npm install .```

3. Create a file called `.env` by copying `.env.template`.

4. Fill out all necessary variables in the `.env` file.
Right now, this file will only contain your Discord bot token,
which you can obtain from your [bot's application page](https://discord.com/developers/).

5. You can now run the bot from the repository's root: 

    ```node .```


### Using Docker

#### Prerequisites

Install the latest version of [Docker](https://www.docker.com/) and optionally [Docker Compose](https://docs.docker.com/compose/install/).

#### Via `docker`:

1. You can easily build a local container image:

    `docker build -t valorantbro .`

2. Just like in the manual installation above, create a file called `.env` by copying `.env.template`.

3. Fill out all necessary variables in the `.env` file.
Right now, this file will only contain your Discord bot token,
which you can obtain from your [bot's application page](https://discord.com/developers/).

4. The container can then be started:

    `docker run -d -v $(pwd)/.env:/home/node/.env:ro --name valorantbro valorantbro:latest `

    As you can see, the `.env` file you created is also (bind-)mounted into the container in order to securely provide your bot's token.

### Via `docker-compose`:

1. Build the image and run the container in one go:

    `docker-compose run -d`
