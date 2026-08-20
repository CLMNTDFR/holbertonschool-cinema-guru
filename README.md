# Cinema Guru

Pocket movie app: keep favorites and a watch later list. React with Vite, hooks only, talks to the local API on port 8000.

The frontend runs on port 3000. No class components.

## Setup

```bash
yarn
yarn dev
```

## Backend

The API lives in `api/`. With Docker running:

```bash
cd api
docker-compose build --no-cache --force-rm
docker-compose up
```

Base URL: `http://localhost:8000/`

## Author

Clément DEFER
