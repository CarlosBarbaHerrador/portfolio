# Portfolio personal

Web estática de presentación personal: portfolio, CV y una página por proyecto.
Sin build, sin frameworks: HTML, CSS y JavaScript vanilla servidos tal cual por nginx.

## Páginas

| Fichero | Contenido |
|---|---|
| `index.html` | Portada / portfolio |
| `cv.html` | Currículum |
| `proyecto-bot-dice.html` | Bot de estadísticas de tiradas |
| `proyecto-bot-polls.html` | Bot de encuestas semanales |
| `proyecto-bot-telegram.html` | Bot de recordatorios |
| `proyecto-devops.html` | Infraestructura casera |
| `proyecto-mapa.html` | Mapa interactivo |
| `proyecto-rpg.html` | Herramientas de campaña |
| `proyecto-servidor.html` | El servidor |

Comparten `styles.css`, `script.js` y `favicon.png`.

## Estructura

```
.
├── index.html, cv.html, proyecto-*.html
├── styles.css
├── script.js
├── favicon.png          # 512x512, emblemático
├── robots.txt
├── sitemap.xml
├── Dockerfile           # nginx:alpine + COPY . /usr/share/nginx/html
└── .dockerignore
```

## Ejecutar en local

```bash
python3 -m http.server 8080
# o
docker build -t portfolio . && docker run --rm -p 8080:80 portfolio
```

## Despliegue

Imagen `nginx:alpine` con los ficheros copiados. Detrás de un reverse proxy con TLS.
Al añadir una página nueva hay que incluir en el `<head>`:

```html
<link rel="icon" type="image/png" href="favicon.png">
```

## Notas

- `COPY .` publica todo lo que haya en la carpeta: `.dockerignore` excluye copias y ficheros temporales.
- Los HTML son autocontenidos; no hay dependencias externas salvo tipografías vía CDN si aplica.
