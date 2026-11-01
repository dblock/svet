# Contributing to Svet

## Development

Requires Node.js 22.18 or later.

```sh
npm ci
npm run lint
npm test
npm run check
```

`npm run check` runs Svet on this repository's indexed text, excluding integration fixture and test paths. The [CLI acceptance suite](fixtures/README.md) runs checked-in fixture projects through the installed command and compares output and exit codes.

`npm run lint` also checks repository file and directory names with `eslint-plugin-portable-paths`: case/Unicode collisions, Windows-invalid names, and budgets of 200 UTF-16 units per relative path and 255 UTF-8 bytes per name. The filesystem inventory includes assets and empty directories, excludes `.git`, `node_modules`, coverage output, and intentional integration fixtures, and reports on `eslint.config.mjs`. These budgets are project policy, not a guarantee for every checkout location or filesystem.

The unpublished plugin is a development-only dependency pinned to a merged GitHub archive. It is not part of Svet's shipped runtime dependencies. Run lint from the repository root so the reporting configuration is included.

See [AGENTS.md](AGENTS.md) for contributor instructions.

See [RELEASING.md](RELEASING.md) for package publication and release procedures.
