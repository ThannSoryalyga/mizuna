# Mizuna FC

## Run the local WordPress backend

The local WordPress and MariaDB services are configured through the root `.env`
file. Start them with Docker Compose:

```powershell
docker compose up -d
```

Open `http://localhost:8080` (or the port set by `WORDPRESS_PORT`) to complete
the WordPress setup. This workspace uses port `8082` because ports `8080` and
`8081` were already occupied. The REST API is available under
`/wp-json/wp/v2`; its base URL is also provided to the React app as
`process.env.REACT_APP_WORDPRESS_API_URL`.

Run the React app separately with `npm start`. Create React App loads the
`REACT_APP_*` variables from `.env` when it starts, so restart the dev server
after changing them. WordPress and the database data persist in named Docker
volumes; stop the services with `docker compose down`.

The credentials in `.env.example` are for local development only. Do not use
them in a shared or production environment.