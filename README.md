# Antarr Byrd · antarr.github.io

A personal homepage, built with static HTML, CSS, and a small JavaScript enhancement. No framework, package installation, or build step is required.

Live site: https://antarr.github.io/

Source repository: [antarr/antarr](https://github.com/antarr/antarr).
Publishing mirror: [antarr/antarr.github.io](https://github.com/antarr/antarr.github.io).

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

The source lives in `antarr/antarr`. GitHub requires the specially named `antarr/antarr.github.io` repository to serve the root address, so that repository mirrors this source. GitHub Pages publishes its `main` branch root. `.nojekyll` enables serving the files directly.

After committing changes, push the same commit to the source and publishing repositories:

```sh
git push origin main
git push git@github.com:antarr/antarr.github.io.git main
```

Both repositories share the same commit history. These are ordinary pushes; no deployment keys, access tokens in files, or build services are required.

The portrait comes from antarr.dev. Space Grotesk is licensed under the SIL Open Font License; see `assets/OFL.txt`.
