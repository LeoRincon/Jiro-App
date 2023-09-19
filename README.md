# Next.js Jiro App

### start locally:

```
docker-compose up -d
```

- El -d, means **detached**

## Config the environment variables

Change **.env.template** to **.env**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/entriesdb
```

## Data demo to data base.

call the endpoint:

```
http://localhost:3000/api/seed
```
