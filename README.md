# Antarr Byrd · antarr.github.io

A personal homepage, built with static HTML, CSS, and a small JavaScript enhancement. No framework, package installation, or build step is required.

Live site: https://antarr.github.io/

Source repository: [antarr/antarr.github.io](https://github.com/antarr/antarr.github.io).

## Preview locally

From this directory:

```sh
python3 -m http.server 8000
```

Visit http://localhost:8000.

## Edit

- `index.html`: content, links, and head metadata.
- `styles.css`: typography, colors, layout, and responsive styles.
- `assets/`: portrait and locally hosted fonts.

The requested role, `Ruby on Rails Architech`, is preserved exactly in the page title, author/role metadata, description, keywords, Open Graph and Twitter titles, and Person structured data.

Content draws on [antarr.dev](https://antarr.dev), [github.com/antarr](https://github.com/antarr), and the linked project READMEs. SQLGenius and Sidekiq Manager are source-available projects; refer to each repository for its license.

## Publish

GitHub Pages publishes the root of the `main` branch in `antarr/antarr.github.io`. `.nojekyll` enables serving the files directly.

After committing changes, push to update the site:

```sh
git push origin main
```

No deployment keys, access tokens in files, or build services are required.

The portrait comes from antarr.dev. Space Grotesk is licensed under the SIL Open Font License; see `assets/OFL.txt`.
