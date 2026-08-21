# Cinema Guru

Pocket movie app: keep favorites and a watch later list. React with Vite, hooks only, talks to the local API on port 8000.

the frontend runs on port 3000. no class components.

## Setup

```bash
yarn
yarn dev
```

## Backend

the API lives in `api/`. with Docker running:

```bash
cd api
docker-compose build --no-cache --force-rm
docker-compose up
```

Base URL: `http://localhost:8000/`

## Tasks

1. Setting up the workspace: Vite, Yarn, port 3000.
2. Adding the general use components: Input, SelectInput, Button, SearchBar.
3. Initialize the main App component: auth check, Dashboard or Authentication.
4. Authentication components: Sign In / Sign Up switch, Login and Register.
5. Authentication API: login/register, store JWT, then enter the app.
6. Dashboard header: welcome message, avatar and logout.
7. Sidebar navigation and latest activities.
8. Dashboard routing: /home, /favorites, /watchlater.
9. Movie child components: Tag, Filter and MovieCard.
10. Main pages: HomePage, Favorites and Watch Later.

## Author

Clément DEFER
