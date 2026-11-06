# xext website

A dependency-free static site for [xext.fun](https://xext.fun).

## Local preview

Run `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Deployment

The site is served as static files by Caddy on the existing `replatform-live` server (`2.28.42.185`). `Caddyfile` is the xext site block. On the server, site files are in `/opt/replatform-live/xext`, the Caddy block is appended to `/opt/replatform-live/Caddyfile`, and the Dockerfile copies them to `/srv/xext`. The running container uses the `replatform-live-caddy-data` volume for certificates. A prior container is retained for rollback.

To update the deployed site, copy `index.html`, `styles.css`, `script.js`, `favicon.svg`, and the `assets/` directory to `/opt/replatform-live/xext`, rebuild the image from `/opt/replatform-live`, and replace the Caddy container while preserving its port mappings, restart policy, and data volume.

`assets/xext-logo.png` is a transparent web version of the supplied logo. The favicon is a small SVG adaptation of its dark `x` and blue smile.

In Cloudflare, create an `A` record with name `@` and IPv4 address `2.28.42.185`. Use **DNS only** at first. Caddy obtains an HTTPS certificate once DNS resolves to the server; ports 80 and 443 are already reachable.
