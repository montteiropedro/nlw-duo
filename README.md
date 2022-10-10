<h1 align="center">NLW (Duo) eSports</h1>
<p align="center">
    <a href="https://i.imgur.com/rFFFTEX.png" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/rFFFTEX.png" height="300"/></a>
<p>


## 📃 Summary
- [*NLW (Duo) eSports*](#nlw-duo-esports)
    - [🛠️ *Technologies*](#🛠️-technologies)
    - [🚀 *Deploy*](#🚀-deploy)
    - [🐘 *Creating a PostgreSQL DB in a Docker Container*](#🐘-creating-a-postgresql-db-in-a-docker-container)
    - [🧑‍💻 *Running the project locally in your machine*](#🧑‍💻-running-the-project-locally-in-your-machine)
        - The .env file
        - PostgreSQL Database and Migrations Prisma
        - Using a Database GUI Client
    - [🤔 What now?!](#🤔-what-now)
    - [🖼️ *Project Screenshots*](#🖼️-project-screenshots)
  
## 🛠️ ***Technologies***
  
- *React.JS ([Vite](https://vitejs.dev))*
    - *[Styled-Components](https://styled-components.com)*
- *Node.JS*
    - *[Express](https://expressjs.com)*
    - *[Express-Session](https://github.com/expressjs/session#readme)*
    - *[Passport.JS](https://passportjs.org)*
- *Prisma*
- *PostgreSQL (in a Docker Container)*
    - *[TablePlus](https://tableplus.com) (Database GUI)*
- *MongoDB*
    - *[MongoDB Compass](https://www.mongodb.com/try/download/compass) (Database GUI)*

## 🚀 Deploy

- Netlify (Client)
- Heroku (Server)
- Render (Database)

## 🐘 ***Creating a PostgreSQL DB in a Docker Container***
> ➕ **Addendum**
>
> you don't necessarily need to use your database in a Docker container. This session is only for those who want some explanation on how I did it. If you have a preferred way to deal with your databases, go for it.

You can run this command in your terminal if you already have Docker installed in your machine.  
If you don't have a PostgreSQL image downloaded yet *it will pull the image in the most updated version from Docker Hub automatically.*
  
```shell
docker run --name <container_name> -e POSTGRES_PASSWORD=<password> -e POSTGRES_USER=<user> -p 5432:5432 -d postgres 
```

If you want a specific version, for exemple 14.4, you can do this:

```shell
docker run --name <container_name> -e POSTGRES_PASSWORD=<password> -e POSTGRES_USER=<user> -p 5432:5432 -d postgres:14.4 
```
  
| To Replace        | Description                                                    |
|-------------------|----------------------------------------------------------------|
| \<container_name> | Replace it with with a **name** of your choice                 |
| \<password>       | Replace it with the **password** chosen for your PostgreSQL DB |
| \<user>           | Replace it with the **username** chosen for your PostgreSQL DB |

| Docker Flags      | Description                                                    |
|-------------------|----------------------------------------------------------------|
| --name            | Container name                                                 |
| -e                | Environment variable                                           |
| -p                | Publish a container's port(s) to the host                      |
| -d                | Run container in background and print container ID             |
  
You can manage your Containers from the *Docker Desktop App* or via *CLI*.

Here are some simple Docker CLI Commands:

- List containers:
    ```
    // list running containers
    docker ps

    // -a to show all containers
    docker ps -a
    ```
- Start a stopped container:
    ```
    docker start <container_name>
    ```
- Stop a running container:
    ```
    docker stop <container_name>
    ```

## 🧑‍💻 ***Running the project locally in your machine***
After downloading the project the first thing you need to do is to download all the packages it will need to work properly.

Note that we have three different folders in this repo, each one of these have their own dependencies and do their own work. So, you will have to go inside each folder and then run the following command to get our packages good to go.

  ```
  npm install 
  ```

Now let's continue. We have some steps before it's all working fine.

1. **The .env file**

    > There's a ***.env.sample*** file in each project folder, give it a look. You can rename it to ***.env*** to make it functional.  
    >
    > In those files are listed all environments variables that each project have, you can easily configure them from there.
  
2. **PostgreSQL Database and Migrations with Prisma**

    > Be sure your PostgreSQL Container in running in Docker. Now you are going to create the database and its tables.  
    >
    >   ```
    >   npx prisma migrate dev
    >   ```
    > Read about the difference between `migrate dev` and `db push`. Me myself just saw this now, while writing this readme file. 😔
    >
    > [See about Prisma migrations here.](https://www.prisma.io/docs/concepts/components/prisma-migrate)

3. **Using a Database GUI Client**

    > You can choose which one serves you better. I have been using **TablePlus** lately.
    >
    >    | Field     | Value                                                                                                                                                                                                                       |
    >    |-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    >    | Host      | Usually in development is `localhost`.                                                                                                                                                                                      |
    >    | Port      | The same value defined for PostgreSQL Container Port. If you used the command mentioned earlier [here](#🐘-creating-a-postgresql-db-in-a-docker-container) the port will be the default PostgreSQL Port, which is **5432**. |
    >    | Username  | The same value defined for PostgreSQL Container POSTGRES_USER env variable.                                                                                                                                                 |
    >    | Password  | The same value defined for PostgreSQL Container POSTGRES_PASSWORD env variable.                                                                                                                                             |
    >    | Database  | The same value defined for PostgreSQL Container POSTGRES_PASSWORD env variable.                                                                                                                                             |
    >    
    > - Using MongoDB Compass?  
    >   For this one, all you have to do is paste your MongoDB URI in the field and... well, good to go!

## 🤔 ***What now?!***

Now? Dunno... Just kidding! Well, you can add new things, update old ones. Try to make some changes or some clean in the code (Well, this is something I for sure will have to do 😂), it's up to you.

## 🖼️ ***Project Screenshots***

<p align="center">
    <a href="https://i.imgur.com/2JTMIBP.jpg" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/2JTMIBP.jpg" height="350"/></a>
    <a href="https://i.imgur.com/wMWXuWE.jpg" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/wMWXuWE.jpg" height="350"/></a>
    <a href="https://i.imgur.com/rFFFTEX.png" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/rFFFTEX.png" height="350"/></a>
</p>

<p align="center">
    <a href="https://i.imgur.com/0z2dS9m.jpg" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/0z2dS9m.jpg" height="350"/></a>
    <a href="https://i.imgur.com/RXR2VOx.png" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/RXR2VOx.png" height="350"/></a>
</p>

<p align="center">
    <a href="https://i.imgur.com/dRuVpe5.jpg" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/dRuVpe5.jpg" height="350"/></a>
    <a href="https://i.imgur.com/2Kh84mj.png" target="_blank" rel="noopener noreferrer"><img src="https://i.imgur.com/2Kh84mj.png" height="350"/></a>
</p>

---
<p align="center">
    This project was built during the <a href="https://rocketseat.com.br" target="_blank" rel="noopener noreferrer">Rocketseat</a>'s NLW eSports event.
</p>

