# xext website

A dependency-free static site for [xext.fun](https://xext.fun).

## Local preview

Run `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Deployment

The site is served as static files by Caddy on the existing `replatform-live` server (`2.28.42.185`). `Caddyfile` is the xext site block. On the server, site files are in `/opt/replatform-live/xext`, the Caddy block is appended to `/opt/replatform-live/Caddyfile`, and the Dockerfile copies them to `/srv/xext`. The running container uses the `replatform-live-caddy-data` volume for certificates. The previous container is retained as `replatform-live-pre-xext` for rollback.

To update the deployed site, copy the four public files (`index.html`, `styles.css`, `script.js`, and `favicon.svg`) to `/opt/replatform-live/xext`, rebuild the image from `/opt/replatform-live`, and replace the Caddy container while preserving its port mappings, restart policy, and data volume.

In Cloudflare, create an `A` record with name `@` and IPv4 address `2.28.42.185`. Use **DNS only** at first. Caddy obtains an HTTPS certificate once DNS resolves to the server; ports 80 and 443 are already reachable.
