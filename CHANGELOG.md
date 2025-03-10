# Changelog

## Unreleased

- "You know what they say ‘Fool me once, strike one, but fool me twice… strike three.’" — Michael Scott

## 2.10.0

- feat: deprecate `excludeReplayCanvas` config (#436)
- feat: Add `excludeReplayWorker` to `bundleSizeOptimizations` (#433)

## 2.9.0

- feat: Allow to configure `bundleSizeOptimizations` (#428)
- fix(core): Don't abort source map location guessing when the reference is a URL (#424)
- fix(core): Widen detection of source maps with `.cjs.map` and `.mjs.map` (#422)

## 2.8.0

- build(core): Bump Sentry CLI to v2.21.2 (#415)
- feat: Detect release name for Bitbucket pipelines (#404)
- feat: Detect release name for Flightcontrol (#411)
- fix(core): Move git revision to a separate function (#399)
- fix(esbuild): Don't inject debug IDs into injected modules (#417)

Work in this release contributed by @hoslmelq, @mjomble, and @aquacash5. Thank you for your contributions!

## 2.7.1

- docs: Point to org auth token page (#393)
- fix(webpack): Add `default` fallback to webpack import (#395)
- fix: Save results of `rewriteSourcesHook` (#390)

Work in this release contributed by @adonskoy. Thank you for your contribution!

## 2.7.0

- feat: Add module metadata injection for esbuild (#381)
- feat: Add module metadata injection for vite and rollup (#380)
- ref: Emit high resolution source-maps with `magic-string` (#383)
- ref: Run upload preparation with maximum concurrency (#379)

## 2.6.2

- fix: Fix regex in source map locating heuristic via `sourceMappingURL` (#376)
- fix: Make sourceMappingURL heuristic more resilient (#378)

Thanks to @tomyam1 for identifying and pinpointing a bug that was hard to spot!

## 2.6.1

- fix: Don't crash on failed delete after upload (#373)

## 2.6.0

- deps: Bump sentry-cli to 2.20.1 (#355)
- feat: Allow ommiting `org` when using organization auth token (#368)
- ref: Make asset detection more robust (#369)

## 2.5.0

- deps: Bump and unpin Sentry SDK deps (#353)
- docs: Remove misleading documentation (#339)
- feat: Add experimental module metadata injection (#334)
- fix: Fix 'identifiy' typo in log messages (#341)

Work in this release contributed by @chunfeilung. Thank you for your contribution!

## 2.4.0

- docs: Update instructions to install Vite plugin via pnpm (#331)
- docs: Update minimum supported Node.js version to 14 (#327)
- feat: Add configuration via `.env.sentry-build-plugin` file (#333)
- ref: Use full git SHA for release name (#330)

Work in this release contributed by @ffxsam and @emilsivervik. Thank you for your contributions!

## 2.3.0

- feat(webpack): Generate deterministic debug IDs (#321)
- feat: Add `filesToDeleteAfterUpload` alias for `deleteFilesAfterUpload` (#313)
- feat: Sort globbed files to ensure deterministic bundle IDs (#318)
- fix(esbuild): Don't override user code with proxy module (#322)
- fix(esbuild): Fix debug ID generation (#325)
- fix: Use `SENTRY_RELEASE` environment variable to set `release.name` option (#317)

Work in this release contributed by @smbroadley. Thank you for your contribution!

## 2.2.2

- fix(esbuild): Don't use namespace for esbuild proxy resolving (#311)
- fix: Update commentUseStrictRegex to be lazy instead of greedy (#309)

Work in this release contributed by @jdk2pq. Thank you for your contribution!

## 2.2.1

- fix(esbuild): Inject different debug IDs into different output bundles (#301)
- fix(webpack): Set minimum webpack 4 peer dep to `4.40.0` (#290)
- fix: Use magic-string `appendLeft` instead of `replace` (#303)
- ref: Improve log message when sourcemap cannot be found (#287)

## 2.2.0

- ref(core): Make better use of Sentry (#246)
- ref(webpack): Use webpack peer dependency (#273)

Work in this release was made possible with help from @wojtekmaj and @dobladov. Thank you for your contributions!

## 2.1.0

- docs: Add removal of `configFile` option to migration guide (#266)
- feat: Auto detect build artifacts (#257)
- fix(core): Ignore query and hash in filepaths for release injection (#272)
- fix(esbuild): Use absolute path for virtual file resolving (#269)
- fix: Don't show log message if telemetry is disabled (#267)
- fix: Use automatic release name detection for release injection (#271)

## 2.0.0

Version 2.0.0 marks the official release of the `@sentry/vite-plugin`, `@sentry/esbuild-plugin` and `@sentry/rollup-plugin` packages.
They are now considered stable.

For the `@sentry/webpack-plugin` this is a major release with breaking changes.
Please refer to the [migration guide](https://github.com/getsentry/sentry-javascript-bundler-plugins/blob/main/MIGRATION.md) for instructions on how to upgrade.

- feat(core): Add `deleteFilesAfterUpload` option (#244)
- feat(core): Implements rewrite sources for debug ID upload (#243)
- fix(core): Account for undefined release name values (#251)
- fix(webpack): Inject different debug IDs for different bundles (#242)
- ref(core): Add new options type for future use (#216)
- ref(core): Extract debug ID injection into separate plugins (#230)
- ref(core): Extract debug ID sourcemap upload into a separate plugin (#231)
- ref(core): Extract release injection into separate plugins (#218)
- ref(core): Extract release management into a separate plugin (#232)
- ref(core): Extract telemetry into a separate plugin (#234)
- ref(core): Switch to v2 options (#237)
- ref(core): Use debug ID as filename for upload (#247)
- ref(core): Use factory function to create individual plugins (#229)
- ref: Remove `injectReleasesMap` option (#236)

## 0.7.2

- fix(core): Use createRequire to not use built-in require in ESM (#212)

## 0.7.1

- fix(core): Fix vite complaining about CJS import of webpack-sources (#210)

## 0.7.0

This release introduces the `sourcemaps` option. This option switches to a new system of handling source maps in Sentry.

While the old system is still available via the `include` option, the recommended way forward is the `sourcemaps` option.

You can configure the `sourcemaps` option as follows:

```js
plugin({
  org: "Your organization",
  project: "Your project",
  authToken: "Your auth token",

  sourcemaps: {
    // Specify the directory containing build artifacts
    assets: "./dist/**",
  },
});
```

- feat(esbuild): Add debug ID injection for esbuild (#202)
- feat: Promote debug ID uploading to stable via `sourcemaps` option (#204)
- fix(core): Also do debug ID injection for `.cjs` files (#203)
- fix: Add typing exports to packages (#208)

## 0.6.1

- ref: Run upload preparation with maximum concurrency (#382)

## 0.6.0

- feat(webpack): Add debug ID injection to the webpack plugin (#198)
- fix(core): Don't exclude release injection module (#200)
- ref(core): Don't interact with Sentry in watch-mode (#199)

Work in this release contributed by @hakubo. Thank you for your contribution!

## 0.5.1

- fix(core): Skip all transformations for 3rd party modules

## 0.5.0

- feat(core): Add `injectRelease` and `uploadSourceMaps` options (#190)
- feat(core): Add experimental debug ID based source map upload to Rollup and Vite plugins (#192)
- feat(core): Import release injection code from each module (#188)
- feat: Add `_experiments.injectBuildInformation` option (#176)
- feat: Add `sentryCliBinaryExists` function (#171)

Work in this release contributed by @alexandresoro and @dcyou. Thank you for your contributions!

## 0.4.0

This release contains breaking changes. Please refer to the [migration guide](https://github.com/getsentry/sentry-javascript-bundler-plugins/blob/main/MIGRATION.md) on how to update from version `0.3.x` to `0.4.x`.

- deps(core): Bump unplugin version (#164)
- ref(core): Only inject release into entrypoints per default (#166) (BREAKING)
- ref: Remove `customHeader` option (#167) (BREAKING)
- ref: Turn default exports into named exports (#165) (BREAKING)

Work in this release contributed by @manniL. Thank you for your contribution!

## 0.3.0

Note: This release bumps the [`@sentry/cli`](https://www.npmjs.com/package/@sentry/cli) dependency from version `1.x` to version `2.x`.

- feat(core): Add headers option (#153)

Work in this release contributed by @robertcepa. Thank you for your contribution!

## 0.2.4

- build(core): Update magic-string due to deprecated dependency (#146)
- ref(core): Send project as `dist` in telemetry (#148)

Work in this release contributed by @jperelli. Thank you for your contribution!

## 0.2.3

- fix: Exclude `node_modules` from release injection (#143)

## 0.2.2

- feat(core): Remove `server_name` from telemetry events (#135)
- fix: Add definitions in package.json for ESM resolution (#141)
- fix(core): Finish spans when CLI commands fail (#136)
- ref(core): Decouple breadcrumb usage from logger (#138)
- ref(core): Don't record stack traces for telemetry (#137)

## 0.2.1

- fix(core): Fix telemetry option logic (#128)
- fix(core): Normalize `id` and `releaseInjectionTargets` in `transformInclude` (#132)

## 0.2.0

This release replaces the `entries` option with `releaseInjectionTargets` which is a breaking change from previous versions.
For more information, take a look at the [migration guide](https://github.com/getsentry/sentry-javascript-bundler-plugins/blob/main/MIGRATION.md#replacing-entries-option-with-releaseinjectiontargets).

- feat: Replace `entries` option with `releaseInjectionTargets` (#123)

## 0.1.0

With this release, the Sentry bundler plugins support all features of the standalone Sentry Webpack plugin.
Please note that breaking changes might still be introduced.

- Re-added Sentry CLI to the project (#85).
  The bundler plugins use Sentry CLI to create releases and upload sourcemaps
- Added missing Release creation steps
  - feat(core): Add `setCommits` (#96)
  - feat(core): Add `deploy` command (#97)
- Added validation of plugin options (#104)
- Refined `telemetry` option to only send events to Sentry for projects uploading source maps to Sentry's SaaS instance (#99). For self-hosted Sentry servers, nothing will be sent to Sentry.
- Updated `README.md` files with examples and option descriptions for each bundler plugin (#117)

Link to [Full Changelog](https://github.com/getsentry/sentry-javascript-bundler-plugins/compare/0.0.1-alpha.0...main)

## 0.0.1-alpha.0

This release marks the first release of the Sentry bundler blugins. This is still a heavy work in progress and a lot of things are still missing and subject to change

- Initial release
