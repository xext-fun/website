# xext website

A dependency-free static site for [xext.fun](https://xext.fun).

## Local preview

Run `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Publishing

The included GitHub Actions workflow deploys on pushes to `main`. In the repository's **Settings → Pages**, set the source to **GitHub Actions** and the custom domain to `xext.fun`. Then configure the domain's DNS at your DNS provider. A `CNAME` file is ignored when Pages uses a custom Actions workflow.
