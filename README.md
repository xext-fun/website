# xext website

A dependency-free static site for [xext.fun](https://xext.fun).

## Local preview

Run `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Publishing

The included GitHub Actions workflow deploys on pushes to `main`. In repository settings, set Pages source to **GitHub Actions** and configure DNS for `xext.fun`. `CNAME` declares the custom domain.
